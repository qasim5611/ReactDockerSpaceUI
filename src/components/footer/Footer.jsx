import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Coin from "./coin.png";

import tele from "./tele.png";
import fb from "./fb.png";
import tw from "./tw.png";
import insta from "./insta.png";
import { useHistory } from "react-router";

export default () => {
  const history = useHistory();

  return (
    <>
      <Box maxWidth="xl" margin="auto">
        <center>
          <img
            src={Coin}
            alt={Coin}
            width="280px"
            style={{ marginTop: "-150px" }}
          />
        </center>
        <Grid
          container
          margin="auto"
          textAlign="center"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            container
            item
            xs={12}
            md={6}
            justifyContent="center"
            spacing={2}
            alignItems="center"
            mb={3}
          >
            <Grid item xs={12} md={6}>
              <a
                href="UGC_Whitepaper.pdf"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <Button
                  className="button"
                  sx={{
                    textDecoration: "none",
                    padding: "2vh 3vw",
                    borderRadius: "39px",
                    background: "rgba(255, 255, 255, 0.7)",
                    color: "black",
                    border: "1px solid red",
                    "&:hover": {
                      background: "#FF4365",
                      transition: ".3s",
                      color: "white",
                    },
                  }}
                  onClick={() => history.push("/")}
                >
                  Whitepaper
                </Button>
              </a>
            </Grid>
            {/* <Grid item xs={12} md={4}>
              <a href="#roadmap" style={{ textDecoration: "none" }}>
                {" "}
                <Button
                  className="button"
                  sx={{
                    padding: "2vh 4vw",
                    borderRadius: "39px",
                    background: "rgba(255, 255, 255, 0.7)",
                    color: "black",
                    border: "1px solid red",
                    "&:hover": {
                      background: "#FF4365",
                      transition: ".3s",
                      color: "white",
                    },
                  }}
                  onClick={() => history.push("/")}
                >
                  Roadmap
                </Button>
              </a>
            </Grid> */}
            <Grid item xs={12} md={6}>
              <a href="#presaleBonus" style={{ textDecoration: "none" }}>
                {" "}
                <Button
                  className="button"
                  sx={{
                    textDecoration: "none",
                    padding: "2vh 4vw",
                    borderRadius: "39px",
                    background: "rgba(255, 255, 255, 0.7)",
                    color: "black",
                    border: "1px solid red",
                    "&:hover": {
                      background: "#FF4365",
                      transition: ".3s",
                      color: "white",
                    },
                  }}
                  onClick={() => history.push("/")}
                >
                  Buy GOD
                </Button>
              </a>
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            md={3}
            justifyContent="center"
            alignItems="center"
            spacing={2}
            mb={3}
          >
            <Grid item>
              <img src={tele} alt={tele} width="100%" />
            </Grid>
            <Grid item>
              <img src={fb} alt={fb} width="100%" />
            </Grid>
            <Grid item>
              <img src={insta} alt={insta} width="100%" />
            </Grid>
            <Grid item>
              <img src={tw} alt={tw} width="100%" />
            </Grid>
          </Grid>
        </Grid>
        <Box
          mt={10}
          padding="30px 0px"
          textAlign="center"
          backgroundColor="#FF4365"
          color="white"
          fontSize="12px"
        >
          All rights reserved @ UNIVERSAL-GOD-COIN 2022
        </Box>
      </Box>
    </>
  );
};
