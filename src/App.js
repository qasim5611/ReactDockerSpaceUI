import "./App.css";
import Footer from "./components/footer/Footer";
import Intro from "./components/intero/Intro";
import LaunchTime from "./components/launchTimeSpecification/LaunchTime";
import PresaleBonus from "./components/presaleBonus/PresaleBonus";
import RoadMap from "./components/roadMap/RoadMap";
import Specification from "./components/specification/Specification";
import Tokenomics from "./components/Tokenomics/tokenomics";

import TotalSupply from "./components/totalSupply/TotalSupply";
import Header from "./components/header/Header";
import APXCalclulatorContainer from "./first-section/Main";
import APXStatisticsContainer from "./second-section/Main";
// Copied From Jed Project you can find your intersts below
import NetworkChange from "./networkSwitch";
import { injected } from "./connect/connector";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useStakingContract,
  useTokenContract,
  usePresaleContract,
} from "./hooks";
import { useWeb3React } from "@web3-react/core";
import { formatUnits, parseUnits } from "@ethersproject/units";

import Web3 from "web3";
import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  // Conectivity Assestss copied from APP.JSX in Jed Project
  const [switchNetwork, setSwitchNetwork] = useState(false);
  const web3 = new Web3(Web3.givenProvider);
  const { account, activate } = useWeb3React();
  const tokenContract = useTokenContract();
  const stakingContract = useStakingContract();
  const presaleContract = usePresaleContract();
  const [CurrentTokenPrice, setCurrentTokenPrice] = useState();

  const [userAction, setuserAction] = useState(0);
  const [symbol, setsymbol] = useState(undefined);
  const [decimal, setdecimal] = useState(0);
  const [presaletime, setpresaletime] = useState("");


  const [oneBnbtotoken, setoneBnbtotoken] = useState("");
  const [stakingstate, setstate] = useState({
    totalStakers: 0,
    totalStakedJED: 0,
  });

  console.log("usePresaleContract", usePresaleContract());

  const initoverall = async () => {
    try {
      let obj1 = {
        totalStakedByUser: 0,
        totalUnStakedByUser: 0,
        totalrewardByUser: 0,
        currentStakedByUser: 0,
        stakeDetails: [],
        walletBalance: 0,
        referralCount: 0,
        refAmount: 0,
        personalAmount: 0,
      };
      if (account) {
        let tokendecimals = await tokenContract.decimals();
        let walletBalance = await tokenContract.balanceOf(account);
        // DrCode
        // var { referralCount, refAmount, personalAmount } =
          // await presaleContract.userData(account);

         var presalestartTime = await presaleContract.preSaleStartTime();
         console.log("presalestartTime", +presalestartTime);
         setpresaletime(+presalestartTime);

         console.log("setpresaletime", presaletime && presaletime);

          
        // console.log(referralCount, refAmount, personalAmount, "DrCode");
        // end

        let currentStake = await stakingContract.currentStaked(account);

        var {
          stakecount,
          totalstakeduser,
          claimedstakeTokens,
          unStakedTokens,
        } = await stakingContract.users(account);
        // console.log(
        //   stakecount,
        //   totalstakeduser,
        //   claimedstakeTokens,
        //   unStakedTokens,
        //   "data"
        // );
        if (+stakecount > 0) {
          const arr = [];
          for (let i = 0; i < +stakecount; i++) {
            const { amount, withdrawTime, bonus, withdrawan, unstaked } =
              await stakingContract.stakedetails(account, i.toString());
            // const withdrawTime = await stakingContract
            //   .nextWithdrawTime(account, i.toString())
            //   .call();
            const obj = {
              amount: +formatUnits(amount.toString(), tokendecimals),
              withdrawTime: +withdrawTime,
              unstaked,
              withdrawan,
              bonus: +formatUnits(bonus.toString(), tokendecimals),
            };
            // console.log(obj, "obj");
            arr.push(obj);
          }
          obj1 = {
            ...stakingstate,
            stakedetails: arr,
            totalStakedByUser: formatUnits(totalstakeduser, tokendecimals),
            totalUnStakedByUser: formatUnits(unStakedTokens, tokendecimals),
            totalrewardByUser: formatUnits(claimedstakeTokens, tokendecimals),
            currentStakedByUser: formatUnits(currentStake, tokendecimals),
            walletBalance: formatUnits(walletBalance, tokendecimals),
          };
        }
      }
      let tokendecimals = await tokenContract.decimals();
      setdecimal(tokendecimals);
      const symbol = await tokenContract.symbol();
      setsymbol(symbol);
      const res = parseUnits("1", tokendecimals).toString();
      const ethvalue = await presaleContract.bnbToToken(res);
      const result = formatUnits(ethvalue, tokendecimals);
      setoneBnbtotoken(result);
      // console.log(result, "result");
      let totalStaker = await stakingContract.totalUniqueStakers();
      let totalStaked = await stakingContract.totalStaked();
      const obj = {
        totalStakers: totalStaker,
        totalStakedJED: formatUnits(totalStaked, tokendecimals),
        ...obj1,
      };
      setstate(obj);
      // Drcode
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (stakingContract && tokenContract && presaleContract) {
      initoverall();
      // console.log(presaleContract);
    }
  }, [account, stakingContract, tokenContract, presaleContract]);

  // Copied material eds here :)

  useEffect(() => {
    const storage = localStorage.getItem("wallet");
    if (storage === "meta") {
      activate(injected);
    }
    let chain = async () => {
      const chainid = await web3.eth.getChainId();
      if (chainid !== 56) {
        setSwitchNetwork(true);
      }
    };
    chain();
  }, []);

  // Handling RefAddress
  useEffect(() => {
    if (window.location.href.includes("?ref=")) {
      let getAddress = window.location.href.split("?ref=")[1];
      console.log(getAddress, "getAddress");
      let final = getAddress.slice(0, 34);
      localStorage.setItem("APX_PRESALE", final);
    }
  }, []);

  const query = `
  query{
      ethereum(network: bsc) {
        dexTrades(
          options: {desc: ["block.height","tradeIndex"], limit: 1}
          exchangeName: {in: ["Pancake", "Pancake v2"]}
          baseCurrency: {is: "0x322F6b3ac2Dba24A104727e93930e13b72CaB34D"}
          quoteCurrency: {is: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"}
          date: {after: "2021-04-28"}
        ) {
          transaction {
            hash
          }
          tradeIndex
          block {
            height
          }
          baseCurrency {
            symbol
            address
          }
          quoteCurrency {
            symbol
            address
          }
          quotePrice
       
        }
      }
    
}
`;
  const url = "https://graphql.bitquery.io/";
  const opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "BQYYK5Qlp6lGeoIPH9hWek76kIkIzJsM",
    },
    body: JSON.stringify({
      query,
    }),
  };
  fetch(url, opts)
    .then((res) => res.json())
    .then(({ data }) => {
      console.log((+data.ethereum.dexTrades[0].quotePrice).toFixed(20));
      setCurrentTokenPrice(
        (+data.ethereum.dexTrades[0].quotePrice).toFixed(10)
      );
    })
    .catch(console.error);

    
  return (
    <div className="App">
      <NetworkChange open={switchNetwork} setOpen={setSwitchNetwork} />
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <Intro CurrentTokenPrice={CurrentTokenPrice} />
          {/* console.log("setpresaletime", presaletime ? presaletime : 20); */}
          <LaunchTime presalestartTime={presaletime && presaletime} />
          <Specification />
          <Tokenomics/>
          {/* <TokenPrice /> */}
          <PresaleBonus
            oneBnbtotoken={oneBnbtotoken}
            symbol={symbol}
            decimal={decimal}
            presaleContract={presaleContract}
            tokenContract={tokenContract}
          />
          <TotalSupply />
          {/* <RoadMap /> */}
        </Route>
        <Route exact path="/staking">
          <APXCalclulatorContainer
            state={stakingstate}
            tokenContract={tokenContract}
            initoverall={initoverall}
            stakingContract={stakingContract}
          />
          <APXStatisticsContainer
            initoverall={initoverall}
            state={stakingstate}
            stakingContract={stakingContract}
          />
        </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
