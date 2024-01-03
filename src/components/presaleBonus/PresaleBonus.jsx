import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Hidden,
  IconButton,
  CircularProgress,
  Container,
  Input,
} from "@mui/material";
import { Box } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import BG from "./background.png";
import React, { useEffect, useState } from "react";
import APXlogo from "./alogo.png";
import BNBlogo from "./bnb.png";
import BackG from "./backgroundTable.png";
import { toast } from "react-toastify";
import { formatUnits, parseUnits } from "@ethersproject/units";
import { presaleAddress } from "../../utils/environment";
import { useWeb3React } from "@web3-react/core";
import Modal from "../../modal";
import {
  usePresaleContract1,
  usePresaleContract,
  useTokenContract,
} from "../../hooks";
import { gasEstimationPayable } from "../../util";
import { logDOM } from "@testing-library/react";
export default ({ symbol, oneBnbtotoken }) => {
  let refAddress =
    typeof localStorage != "undefined"
      ? localStorage.getItem("APX_PRESALE")
      : "";
  const [positionType, setpositionType] = useState(true);

  const [tokenvalue, settokenvalue] = useState(0);
  const [loading, setloading] = useState(false);
  const { account, active } = useWeb3React();
  const [openConnect, setopenConnect] = useState(false);
  const presaleContract1 = usePresaleContract1();
  const presaleContract = usePresaleContract();
  const tokenContract = useTokenContract();
  const [mytokens, setmytokens] = useState("");

  const [decimal, setdecimals] = useState();
  const [tokenvalues, setTokenValues] = useState({
    decimal: 0,
    balance: 0,
    refcount: 0,
    refAmount: 0,
  });
 

const buyToken = async () =>{
  console.log('buy tokens');
     try {
       setloading(true);
      
       let decimals = await tokenContract.decimals();
       console.log("decimals", decimals);
   
console.log(" value noe",   parseUnits(tokenvalue.toString(), decimals).toString());
       const tx = await presaleContract.buyToken({
         value: parseUnits(tokenvalue.toString(), decimals.toString()),
       });
       await tx.wait();

       console.log(tx, "tx1");
       if (tx) {
         setloading(false);
        toast.success("Transaction Successfully Completed", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        
        
       }
       
       
     } catch (err) {

      console.log("error buy", err);
       setloading(false);
            toast.error(err.data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
     }
}



  useEffect(async () => {
    if (tokenContract && presaleContract && +tokenvalue > 0) {
      try {
        let tokendecimals = await tokenContract.decimals();

        console.log(tokendecimals, "decimal");
        let myToken = await presaleContract.bnbToToken(
          parseUnits(tokenvalue.toString(), tokendecimals)
        );

        console.log("myTokens", +myToken);

        setmytokens(formatUnits(myToken.toString(), tokendecimals));

    
      } catch (error) {
        console.log(error);
      }
    } else {
      // setoneValue("");
      settokenvalue("");
    }
  }, [tokenvalue]);

  useEffect(() => {
    (async function () {
      try {
        if (account) {
          const decimal = await tokenContract.decimals();
          setdecimals(decimal);
          const balance = await tokenContract.balanceOf(account);
          const refdata = await presaleContract.getReferrerData(account);
          setTokenValues({
            ...setTokenValues,
            decimal: decimal,
            balance: +balance,
            refcount: +refdata._refCount,
            refAmount: +refdata._refAmount,
          });
        }

    
      } catch (e) {
        console.error(e);
      }
    })();
  }, [tokenContract, presaleContract]);


  console.log("tokenvalue", tokenvalue);
  return (
    <div>
      <Modal setOpen={setopenConnect} open={openConnect} />

      <Box
        maxWidth="xl"
        sx={{ zIndex: "9999" }}
        // mt={{ xs: 80, md: 20 }}
        id="presaleBonus"
      >
        <Typography
          fontSize={{ xs: "24px", md: "40px" }}
          color="white"
          textAlign="center"
        >
          <span>PRESALE WITH BONUS</span>
        </Typography>
        <center>
       
          <Box display="flex" justifyContent="center">
            <Typography
              fontSize={{ xs: "15px", md: "20px" }}
              sx={{ color: "white", border: "1px solid #FF4365" }}
              textAlign="center"
              margin="5px"
              padding="0px 3px"
            >
              <span>ReffCount:{+tokenvalues.refcount}</span>
            </Typography>
            <Typography
              fontSize={{ xs: "15px", md: "20px" }}
              sx={{ color: "white", border: "1px solid #FF4365" }}
              textAlign="center"
              margin="5px"
              padding="0px 3px"
            >
              <span>
                ReffAmount:
                {+tokenvalues.refAmount / Math.pow(10, tokenvalues.decimal)}
              </span>
            </Typography>{" "}
            <Typography
              fontSize={{ xs: "15px", md: "20px" }}
              sx={{ color: "white", border: "1px solid #FF4365" }}
              textAlign="center"
              margin="5px"
              padding="0px 3px"
            >
              <span>
                coinBalance:
                {+tokenvalues.balance / Math.pow(10, +tokenvalues.decimal)}
              </span>
            </Typography>
          </Box>
        </center>{" "}
        <br />
        <br />
        <br />
        <br />
        <Grid container>
          <Grid item xs={12}>
            <Box
              width={{ xs: "95%", md: "40%" }}
              sx={{
                margin: "auto",
                minHeight: "300px",
                borderRadius: "30px",
                padding: "8px",
                backgroundImage: `url(${BG})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            >
              <Grid container mt={2}>
                <Grid
                  item
                  xs={6}
                  style={{
                    padding: "0px 8px",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  Presale
                </Grid>
                <Grid
                  textAlign="right"
                  item
                  xs={6}
                  style={{ padding: "0px 8px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="sc-1ndknrv-0 fZuPAR"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                </Grid>

                <Grid item xs={12} mt={3}>
              
                </Grid>
                <Grid item xs={12} sx={{ position: "relative" }}>
                  <Box style={{ textAlign: "center" }} mt={-2} mb={-2}>
                  
                  </Box>

                  <Box
                    style={{
                      border: "1px solid #EDEEF2",
                      borderRadius: "20px",
                      minHeight: "30px",
                      padding: "16px 12px 24px 12px",
                      background: "#F7F8FA",
                    }}
                  >
                    <Grid container>
                      <Grid item xs={12} sm={12}>
                        <input
                          // id="tkninput"
                          // value={tokenvalue}
                          // onChange={changeHandler}
                          onChange={async (e) => {
                            settokenvalue(e.target.value);
                          }}
                          type="text"
                          placeholder="0.0"
                          style={{
                            textAlign: "right",
                            border: "0px",
                            background: "#F7F8FA",
                            minHeight: "33px",
                            width: "100%",
                            outline: "none",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <br />
                  <Box
                    style={{
                      border: "1px solid #EDEEF2",
                      borderRadius: "20px",
                      minHeight: "30px",
                      padding: "16px 12px 24px 12px",
                      background: "#802962",
                    }}
                  >
                    <Grid container style={{paddingTop: '6px', color: 'white', textAlign: 'center'}}>
                      <Grid item xs={12} sm={12}>
                        {mytokens ? mytokens : <span>Total Coins</span>}
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12} mt={3}>
                  {
                    !account ? (
                      <Button
                        style={{
                          background: "#ff4365",
                          color: "white",
                          borderRadius: "20px",
                          padding: "16px",
                          fontWeight: "500",
                          fontSize: "16px",
                          width: "100%",
                          fontWeight: "bold",
                        }}
                        onClick={() => setopenConnect(true)}
                      >
                        Connect Wallet
                      </Button>
                    ) : loading ? (
                      <Button
                        style={{
                          background: "gray",
                          color: "white",
                          borderRadius: "20px",
                          padding: "16px",
                          fontWeight: "500",
                          fontSize: "16px",
                          width: "100%",
                          fontWeight: "bold",
                        }}
                      >
                        Loading <CircularProgress color="inherit" />
                      </Button>
                    ) : (
                      <Button
                        style={{
                          background: "#ff4365",
                          color: "white",
                          borderRadius: "20px",
                          padding: "16px",
                          fontWeight: "500",
                          fontSize: "16px",
                          width: "100%",
                          fontWeight: "bold",
                        }}
                        onClick={buyToken}
                      >
                       
                        BUY
                      </Button>
                    )

                
                  }
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Box
          item
          xs={12}
          sx={{ textAlign: "center" }}
          width={{ xs: "100%", md: "50%" }}
          margin="auto"
        >
          {/* preSale Statistics section */}
          <Typography
            fontSize={{ xs: "24px", md: "40px" }}
            color="white"
            textAlign="center"
            mt={5}
          >
            <span>PRESALE STATISTICS</span>
          </Typography>
          <Box
            style={{ margin: "50px auto 0px auto" }}
            width={{ xs: "95%", md: "100%" }}
          >
            <TableContainer
              sx={{
                border: " 1px solid #FF4365",
                padding: "5% 10%",
                width: "100%",
                backgroundImage: `url(${BackG})`,
                backgroundSize: "110% 120%",
                backgroundPosition: "center center",
              }}
            >
              <Table
                sx={{ background: "rgba(255, 67, 101, 0.3)," }}
                size="small"
                aria-label="a dense table"
                width="100%"
              >
                <TableBody>
                  {[
                    {
                      label: "NAME",
                      text: " UNIVERSAL GOD COIN",
                    },
                    {
                      label: "SYMBOL",
                      text: "  GOD",
                    },
                    {
                      label: "TOTAL SUPPLY",
                      text: "1 BILLION",
                    },
                    {
                      label: "DECIMAL",
                      text: "18",
                    },
                  ].map((row, index) => (
                    <TableRow key={row.name}>
                      <TableCell
                        align="left"
                        sx={{
                          paddingLeft: "0px",
                          width: "50%",
                          borderBottom: "1px solid #C03156",
                        }}
                        borderBottom="1px solid #C03156"
                      >
                        <Typography
                          fontSize={{ xs: "14px", md: "16px" }}
                          color="white"
                        >
                          {" "}
                          {row.label}{" "}
                        </Typography>
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ borderBottom: "1px solid #C03156" }}
                      >
                        <Typography
                          fontSize={{ xs: "14px", md: "16px" }}
                          color="white"
                        >
                          {" "}
                          {row.text}{" "}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>





        
      </Box>
    </div>
  );
};
