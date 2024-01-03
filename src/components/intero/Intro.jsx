import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router";
import {
  presaleAddress,
  stakingAddress,
  tokenAddress,
} from "../../utils/environment";
// import Header from "../header/Header";
import BG from "./back.png";

export default ({ CurrentTokenPrice }) => {
  const history = useHistory();
  // const matches = useMediaQuery("(max-width:900)");
  const AddToken = async () => {
    const tokenAddress = "0xCE8d00981A3544Adc1013d81C8A91DFA02AA72dC";
    const tokenSymbol = "=A=";
    const tokenDecimals = 18;
    const tokenImage =
      "https://apx-site.netlify.app/static/media/logo2.45200f71.png";

    try {
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: tokenAddress,
            symbol: tokenSymbol,
            decimals: tokenDecimals,
            image: tokenImage,
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Box maxWidth="xl" margin="auto" id="home">
        <Box sx={{ position: "relative", height: "auto" }} id="about">
          <img
            src={BG}
            alt={BG}
            width="100%"
            height="850px"
            // className="imageDealer"
          />

          <Grid
            container
            width={{ xs: "90%", sm: "70%", md: "40%" }}
            className="btnContainer"
            justifyContent="center"
            alignItems="center"
            marginTop={{ xs: "-85px", sm: "0px" }}
          >
            <Box
              className="media1"
              fontSize={{ xs: "12px", md: "50px" }}
              // width={{ xs: "100%", md: "60%" }}
              color="white"
              style={{
                position: "absolute",
                top: "-135px",
                lineHeight: "50px",
                fontWeight: "700",
              }}
              mt={{lg:"0rem" ,xs:"1rem"}}
              fontSize={{ lg: "2.5rem", xs: "1.4rem" }}
            >
              Now We are Listed on <br /> International Exchanges
            </Box>
            <Box
              className="media2"
              fontSize={{ xs: "12px", md: "13px" }}
              // width={{ xs: "100%", md: "60%" }}

              color="white"
              sx={{
                position: "relative",
                top: "-18px",
                paddingRight: "17px",
                paddingLeft: "17px",
                textShadow: "17px 5px 5px black",
              }}
            >
              Universal God Coin, a multi-utility decentralized financial
              convenience, can be trusted for digital payments and high-quality
              financial experience like never before.
            </Box>

            <br />
            <br />
            <br />
            <Grid item xs={12} sm={6} textAlign="center" mt={5} mb={3}>
              <a href="#presaleBonus" style={{ textDecoration: "none" }}>
                {" "}
                <Button
                  className="btn button"
                  sx={{
                    borderRadius: "39px",
                    background: "#FF4365",
                    color: "white",
                    "&:hover": {
                      background: "rgb(109, 54, 136)",
                      transition: "all 0.3s ease 0s",
                    },
                  }}
                >
                  Buy GOD
                </Button>
              </a>
            </Grid>
            <Grid item xs={12} sm={6} textAlign="center" mt={5} mb={3}>
              <a
                href="UGC_Whitepaper.pdf"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button
                  className="btn button"
                  sx={{
                    borderRadius: "39px",
                    background: "rgba(255, 255, 255, 0.7)",
                    color: "black",
                    border: "1px solid red",
                    fontSize: [10, 15, 15],
                    "&:hover": {
                      background: "#6D3688",
                      transition: ".3s",
                      color: "white",
                    },
                  }}
                >
                  Whitepaper
                </Button>
              </a>
            </Grid>
            <Grid item xs={12} textAlign="center" mb={3}>
              <a style={{ textDecoration: "none" }}>
                <Button
                  className="btn button"
                  sx={{
                    borderRadius: "39px",
                    background: "#FFC041",
                    color: "black",
                    border: "1px solid red",
                    fontSize: [10, 15, 15],
                    "&:hover": {
                      background: "#6D3688",
                      transition: ".3s",
                      color: "white",
                    },
                  }}
                  // onClick={() => history.push("/staking")}
                >
                  Staking
                </Button>
              </a>
            </Grid>

            <Grid item xs={12} sm={6} textAlign="center" mb={3}>
              <a href="#presaleBonus" style={{ textDecoration: "none" }}>
                <Button
                  className="btn button"
                  sx={{
                    borderRadius: "39px",
                    background: "rgba(255, 255, 255, 0.7)",
                    color: "black",
                    border: "1px solid red",
                    fontSize: [10, 15, 15],
                    "&:hover": {
                      background: "#6D3688",
                      transition: ".3s",
                      color: "white",
                    },
                  }}
                >
                  How To Buy
                </Button>
              </a>
            </Grid>
            <Grid item xs={12} sm={6} textAlign="center" mb={3}>
              {/* <a
                href={`https://bscscan.com/address/${stakingAddress}`}
                href="#"
                target="_blank"
                style={{ textDecoration: "none" }}
              > */}
              <Button
                className="btn button"
                sx={{
                  borderRadius: "39px",
                  background: "#FF4365",
                  color: "white",
                  fontSize: [10, 15, 15],
                  "&:hover": { background: "#6D3688", transition: ".3s" },
                }}
              >
                Staking Address
              </Button>
              {/* </a> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
