import React from "react";
import YourStatistics from "./YourStatistics";
import YourAPX from "./YourAPX";
import { Box, Container } from "@mui/material";
const Main = ({ state, initoverall, stakingContract }) => {
  return (
    <>
      <Box sx={{ width: "100%", height: "auto" }}>
        <Container>
          <YourStatistics state={state} />
          <YourAPX
            state={state}
            initoverall={initoverall}
            stakingContract={stakingContract}
          />
        </Container>
      </Box>
    </>
  );
};

export default Main;
