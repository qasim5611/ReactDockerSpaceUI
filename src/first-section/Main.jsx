import React from "react";
import JedCalculator from "./JedCalculator";
import background from "./background.png";
import { Box, Container, useMediaQuery } from "@mui/material";
const Main = ({ state, initoverall, stakingContract, tokenContract }) => {
  const matches = useMediaQuery("(max-width:900px)");
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        width: "100%",
        height: "auto",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <Container
        sx={{
          background: matches ? "#000" : "none",
          height: matches ? "80px" : "auto",
          width: matches ? "100vw" : "auto",
        }}
      ></Container>

      <JedCalculator
        tokenContract={tokenContract}
        initoverall={initoverall}
        stakingContract={stakingContract}
      />
    </Box>
  );
};

export default Main;
