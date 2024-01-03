import React from "react";
import { Grid, Box, Stack } from "@mui/material";
const YourStatistics = ({ state }) => {
  return (
    <Box sx={{ textAlign: "center", padding: "150px 0", color: "white" }}>
      <h1 style={{ marginBottom: "40px", color: "#FF4365" }}>
        YOUR STATISTICS
      </h1>
      <Grid
        pt={5}
        container
        justifyContent="center"
        columnGap={3}
        rowGap={2}
        alignItems="center"
      >
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "363px",
            height: "auto",
            backgroundImage: "linear-gradient(purple,blue)",
            padding: "2px 2px",
            borderRadius: "20px",
            margin: "0",
          }}
        >
          <Box
            sx={{
              background: `rgba(0, 0, 0, 1)`,
              backdropFilter: `blur(54px)`,

              borderRadius: "20px",
              margin: "auto",
              textAlign: "center",
              padding: "30px 0",
            }}
          >
            <Stack direction="column" rowGap={4}>
              <p className="value-text-box">APX EARN</p>
              <p className="value-digit-box">{state.totalrewardByUser}</p>
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "363px",
            height: "auto",
            backgroundImage: "linear-gradient(purple,blue)",
            padding: "2px 2px",
            borderRadius: "20px",
            margin: "0",
          }}
        >
          <Box
            sx={{
              background: `rgba(0, 0, 0, 1)`,
              backdropFilter: `blur(54px)`,

              borderRadius: "20px",
              margin: "auto",
              textAlign: "center",
              padding: "30px 0",
            }}
          >
            <Stack direction="column" rowGap={4}>
              <p className="value-text-box">Your APX Wallet Balance</p>
              <p className="value-digit-box">{state.walletBalance}</p>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Grid
        mt={3}
        container
        justifyContent="center"
        columnGap={3}
        rowGap={2}
        alignItems="center"
      >
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "172px",
            height: "auto",
            backgroundImage: "linear-gradient(purple,blue)",
            padding: "2px 2px",
            borderRadius: "20px",
            margin: "0",
          }}
        >
          <Box
            sx={{
              background: `rgba(0, 0, 0, 1)`,
              backdropFilter: `blur(54px)`,

              borderRadius: "20px",
              margin: "auto",
              textAlign: "center",
              padding: "20px 0",
            }}
          >
            <Stack direction="column" rowGap={4}>
              <p className="value-text-box">Claimed Reward</p>
              <p className="value-digit-box">{state.totalrewardByUser}</p>
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "172px",
            height: "auto",
            backgroundImage: "linear-gradient(purple,blue)",
            padding: "2px 2px",
            borderRadius: "20px",
            margin: "0",
          }}
        >
          <Box
            sx={{
              background: `rgba(0, 0, 0, 1)`,
              backdropFilter: `blur(54px)`,

              borderRadius: "20px",
              margin: "auto",
              textAlign: "center",
              padding: "20px 0",
            }}
          >
            <Stack direction="column" rowGap={4}>
              <p className="value-text-box">Current Staked</p>
              <p className="value-digit-box">{state.currentStakedByUser}</p>
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "172px",
            height: "auto",
            backgroundImage: "linear-gradient(purple,blue)",
            padding: "2px 2px",
            borderRadius: "20px",
            margin: "0",
          }}
        >
          <Box
            sx={{
              background: `rgba(0, 0, 0, 1)`,
              backdropFilter: `blur(54px)`,

              borderRadius: "20px",
              margin: "auto",
              textAlign: "center",
              padding: "20px 0",
            }}
          >
            <Stack direction="column" rowGap={4}>
              <p className="value-text-box">Total Staked</p>
              <p className="value-digit-box">{state.totalStakedByUser}</p>
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "172px",
            height: "auto",
            backgroundImage: "linear-gradient(purple,blue)",
            padding: "2px 2px",
            borderRadius: "20px",
            margin: "0",
          }}
        >
          <Box
            sx={{
              background: `rgba(0, 0, 0, 1)`,
              backdropFilter: `blur(54px)`,

              borderRadius: "20px",
              margin: "auto",
              textAlign: "center",
              padding: "20px 0",
            }}
          >
            <Stack direction="column" rowGap={4}>
              <p className="value-text-box">Total UnStaked</p>
              <p className="value-digit-box">{state.totalUnStakedByUser}</p>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default YourStatistics;
