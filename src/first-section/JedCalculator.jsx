import React, { useEffect, useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import arrowDown from "../img/Arrow 2.svg";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Modal from "../modal";
import { formatUnits, parseUnits } from "@ethersproject/units";
import moment from "moment";
import { useWeb3React } from "@web3-react/core";
import { stakingAddress } from "../utils/environment";
import { toast } from "react-toastify";
import Loading from "../loading";
import {
  useTokenContract1,
  useTokenContract,
  useStakingContract,
} from "../hooks";
function ValueLabelComponent(props) {
  const { children, value } = props;
  return (
    <Tooltip
      enterTouchDelay={0}
      placement="top"
      title={value}
      sx={{ color: "white" }}
    >
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const marks = [
  {
    value: 0,
  },
  {
    value: 120,
  },
  {
    value: 180,
  },
  {
    value: 360,
  },
  {
    value: 720,
  },
];

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#3880ff" : "#3880ff",
  height: 2,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 19,
    width: 19,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "white",
    color: "white",
    "&:before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "#fff" : "#000",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "purple",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "purple",
    height: 10,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
}));
const JedCalculator = ({ initoverall }) => {
  const [openConnect, setopenConnect] = useState(false);
  const { account } = useWeb3React();
  const [days, setdays] = useState(0);
  const [stakeAmount, setstakeAmount] = useState(0);
  const [index, setindex] = useState("");
  const [stakeSymbol, setstakeSymbol] = useState("APX");
  const [rewardSymbol, setrewardSymbol] = useState("APX");
  const [rewardAmount, setrewardAmount] = useState(0);
  const tokenContract1 = useTokenContract1();
  const stakingContract = useStakingContract();
  const tokenContract = useTokenContract();
  const [loading, setloading] = useState(false);

  const init1 = async () => {
    try {
      console.log(tokenContract);
      let stakesymbol = await tokenContract.symbol();
      setstakeSymbol(stakesymbol);
      setrewardSymbol(stakesymbol);
    } catch (error) {
      console.log(error);
    }
  };
  const init = async () => {
    try {
      let indexV;
      switch (days) {
        case 120:
          indexV = "0";
          setindex("0");
          break;
        case 180:
          indexV = "1";
          setindex("1");
          break;
        case 360:
          indexV = "2";
          setindex("2");
          break;
        case 720:
          indexV = "3";
          setindex("3");
          break;
      }
      console.log(tokenContract, "tokenContract====<");
      const stakeDecimals = await tokenContract.decimals();

      console.log(indexV, "indexV");
      console.log(stakingContract, "stakingContract");
      const reward = await stakingContract.calculateRewards(
        parseUnits(stakeAmount.toString(), stakeDecimals).toString(),
        indexV
      );
      setrewardAmount(formatUnits(reward, stakeDecimals));
    } catch (error) {
      if (error?.data?.message) {
        toast.error(error?.data?.message);
      } else {
        toast.error(error?.message);
      }
    }
  };

  useEffect(() => {
    if (stakeAmount > 0 && days > 0) {
      init();
    }
    if (tokenContract) {
      init1();
    }
  }, [tokenContract, stakeAmount, days]);
  const stakeHandler = async () => {
    if (account) {
      const stakeDecimals = await tokenContract.decimals();
      let minAmount = formatUnits(
        await stakingContract.minStake(),
        stakeDecimals
      );
      if (!stakeAmount) {
        toast.error("Error! Please enter a amount");
      } else if (isNaN(stakeAmount) || +stakeAmount < 0) {
        toast.error("Error! Please enter a valid amount");
      } else if (+stakeAmount < +minAmount) {
        toast.error(`Error! Minimun amount to stake is ${+minAmount}.`);
      } else if (days == 0) {
        toast.error("Error! Please select days of stake");
      } else {
        let id = toast.loading("Processing Transaction.");
        try {
          setloading(true);
          let tx = await tokenContract.approve(
            stakingAddress,
            parseUnits(stakeAmount.toString(), stakeDecimals)
          );
          await tx.wait();
          let tx1 = await stakingContract.stake(
            parseUnits(stakeAmount.toString(), stakeDecimals),
            index
          );
          await tx1.wait();

          initoverall();
          toast.update(id, {
            render: "Transaction Successfully Completed.",
            type: "success",
            isLoading: false,
            autoClose: true,
          });
          setloading(false);
        } catch (error) {
          if (error?.data?.message) {
            toast.update(id, {
              render: error?.data?.message,
              type: "error",
              isLoading: false,
              autoClose: true,
            });
          } else {
            toast.update(id, {
              render: error?.message,
              type: "error",
              isLoading: false,
              autoClose: true,
            });
          }
          setloading(false)
        }
      }
    } else {
      toast.error("Error! Please connect your wallet.");
    }
  };
  return (
    <div id="stacking">
      <Modal setOpen={setopenConnect} open={openConnect} />
      <Loading loading={loading} />
      <Box
        id="jedCalculator"
        sx={{
          height: "auto",
          width: "100%",
          padding: "150px 0",
          textAlign: "center",
          background: `radial-gradient(246.87% 1419.53% at 7.07% 18.75%, rgba(28, 132, 254, 0.2) 0%, rgba(189, 75, 200, 0.2) 100%)`,
        }}
      >
        <Container sx={{ color: "#FF4365" }}>
          <h1 style={{ marginBottom: "40px", color: "#FF4365" }}>
            APX CALCULATOR
          </h1>
          <Box
            sx={{
              width: "70%",
              marginTop: "20px",
              height: "auto",
              margin: "auto",
              background: `rgba(0, 0, 0, 0.4)`,
              backdropFilter: `blur(84px)`,
              /* Note: backdrop-filter has minimal browser support */
              padding: "100px 40px",
              borderRadius: `20px`,
              textAlign: "center",
            }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              rowGap={4}
            >
              <p
                width={{ xs: "70%", sm: "70%", md: "70%", lg: "70%" }}
                style={{
                  minHeight: "48px",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "16px",
                  lineHeight: "20px",
                  textAlign: "center",
                  color: "#FFFFFF",
                }}
              >
                Calculate your APX depending on the amount of staked tokens and
                your lock time.
              </p>
              <Stack
                justifyContent="center"
                alignItems="center"
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
              >
                <h4>$ {stakeSymbol}</h4>
                <input
                  style={{
                    width: "217px",
                    height: "43px",
                    textAlign: "center",
                    background: "#FFFFFF",
                    borderRadius: "5px",
                  }}
                  value={stakeAmount}
                  onChange={(e) => setstakeAmount(e.target.value)}
                  type="number"
                  placeholder="5000"
                />
              </Stack>
              <img src={arrowDown} alt="" />
              <p>Lock Tokens for days</p>
              <IOSSlider
                aria-label="ios slider"
                value={days}
                marks={marks}
                step={60}
                valueLabelDisplay="on"
                max="720"
                onChange={(e, value) => {
                  if (e.target.value < 120 && e.target.value > 0) {
                    setdays(120);
                  } else if (e.target.value < 180 && e.target.value > 120) {
                    setdays(180);
                  } else if (e.target.value < 360 && e.target.value > 180) {
                    setdays(360);
                  } else if (e.target.value < 720 && e.target.value > 360) {
                    setdays(720);
                  } else {
                    setdays(value);
                  }
                }}
              />
              <img src={arrowDown} alt="" />
              <Stack
                justifyContent="center"
                alignItems="center"
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
              >
                <h4>$ {rewardSymbol}</h4>
                <input
                  style={{
                    width: "217px",
                    height: "43px",
                    textAlign: "center",
                    background: "#FFFFFF",
                    borderRadius: "5px",
                  }}
                  readOnly
                  value={rewardAmount}
                  type="number"
                  placeholder="5000"
                />
              </Stack>
              <p>(locked {moment().add(days, "days").format("MM/DD/YYYY")})</p>

              {account ? (
                <Box
                  underline="none"
                  color="inherit"
                  sx={{
                    background: `radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 50%)`,
                    boxShadow: "0px 0px 17px #AD00FF",
                    borderRadius: "38.5px",
                    cursor: "pointer",
                  }}
                  padding={{
                    xs: "10px 40px",
                    sm: "10px 50px",
                    md: "20px 60px",
                    lg: "20px 60px",
                  }}
                  onClick={stakeHandler}
                  fontSize={{ xs: "12px", sm: "15px", md: "24px", lg: "28px" }}
                >
                  Stake
                </Box>
              ) : (
                <Box
                  underline="none"
                  color="inherit"
                  sx={{
                    background: `radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 50%)`,
                    boxShadow: "0px 0px 17px #AD00FF",
                    borderRadius: "38.5px",
                    cursor: "pointer",
                  }}
                  padding={{
                    xs: "10px 40px",
                    sm: "10px 50px",
                    md: "20px 60px",
                    lg: "20px 60px",
                  }}
                  onClick={() => setopenConnect(true)}
                  fontSize={{ xs: "12px", sm: "15px", md: "24px", lg: "28px" }}
                >
                  Connect Wallet
                </Box>
              )}
            </Stack>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default JedCalculator;
