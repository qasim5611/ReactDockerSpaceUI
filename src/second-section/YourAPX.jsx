import React, { useState } from "react";
import { Box, Button, Grid, Stack } from "@mui/material";
import moment from "moment";
import { useWeb3React } from "@web3-react/core";
import { toast } from "react-toastify";
import Loading from "../loading";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useStakingContract } from "../hooks";

const YourJed = ({ state, initoverall }) => {
  const [loading, setloading] = useState(false);
  const stakingContract = useStakingContract();
  const { account } = useWeb3React();
  console.log(stakingContract);
  const unstakeHandler = async (count) => {
    if (account) {
      let id = toast.loading("Processing Transaction.");
      try {
        setloading(true);
        const tx = await stakingContract.unstake(count);
        await tx.wait();

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
    } else {
      toast.error("Error! Please connect your wallet.");
    }
  };

  const withdrawHandler = async (count) => {
    if (account) {
      let id = toast.loading("Processing Transaction.");

      try {
        setloading(true);

        const tx = await stakingContract.withdraw(count);
        await tx.wait();

        toast.update(id, {
          render: "Transaction Successfully Completed.",
          type: "success",
          isLoading: false,
          autoClose: true,
        });
        initoverall();
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
    } else {
      toast.error("Error! Please connect your wallet.");
    }
  };

  const extendHandler = async (count) => {
    if (account) {
      let id = toast.loading("Processing Transaction.");

      try {
        setloading(true);

        const tx = await stakingContract.extendStake(count);
        await tx.wait();

        toast.update(id, {
          render: "Transaction Successfully Completed.",
          type: "success",
          isLoading: false,
          autoClose: true,
        });
        initoverall();
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
    } else {
      toast.error("Error! Please connect your wallet.");
    }
  };
  return (
    <>
      <Loading loading={loading} />
      <Box
        sx={{
          textAlign: "center",
          paddingBottom: "150px",
          color: "#FF4365",
        }}
      >
        <h1 style={{ marginBottom: "40px" }}>YOUR APX</h1>
        <Box
          pt={5}
          width={{ xs: "90%", sm: "80%" }}
          sx={{
            height: "auto",
            backgroundImage: "linear-gradient(purple,blue)",
            padding: "2px 2px",
            borderRadius: "20px",
            margin: "auto",
            background: "blue",
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              background: `rgba(0, 0, 0, 1)`,
              backdropFilter: `blur(54px)`,
              width: "100%",
              borderRadius: "20px",
              margin: "auto",
              textAlign: "center",
              padding: "30px 0",
            }}
          >
            <Stack
              direction="row"
              columnGap={1}
              alignItems="center"
              sx={{ width: "100%" }}
              fontSize={{ xs: "10px", sm: "14px", md: "20px" }}
            >
              <p
                className="your-jed-headings"
                style={{ width: "20%", textAlign: "center" }}
              >
                Staked Amount
              </p>
              <p
                className="your-jed-headings"
                style={{ width: "20%", textAlign: "center" }}
              >
                Withdrawal Time
              </p>
              <p
                className="your-jed-headings"
                style={{ width: "20%", textAlign: "center" }}
              >
                UnStake
              </p>
              <p
                className="your-jed-headings"
                style={{ width: "20%", textAlign: "center" }}
              >
                Claim
              </p>
              <p
                className="your-jed-headings"
                style={{ width: "20%", textAlign: "center" }}
              >
                Extend
              </p>
            </Stack>
            {state?.stakedetails?.length > 0 ? (
              state.stakedetails.map(
                ({ amount, withdrawTime, unstaked, withdrawan }, index) => (
                  <Stack
                    direction="row"
                    key={index}
                    columnGap={1}
                    justifyContent="space-around"
                    alignItems="center"
                    textAlign="center"
                    sx={{
                      width: "100%",
                      marginTop: "20px",
                    }}
                    fontSize={{ xs: "8px", sm: "12px", md: "20px" }}
                  >
                    <p className="your-jed-properties" style={{ width: "10%" }}>
                      {amount}
                    </p>
                    <p className="your-jed-properties" style={{ width: "20%" }}>
                      {moment.unix(withdrawTime).format("MM:DD:YYYY hh:mma")}
                    </p>
                    {console.log(+withdrawTime < +moment().format("X"))}
                    <Button
                      sx={{
                        background: `radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 50%)`,
                        boxShadow: "0px 0px 17px #AD00FF",
                        borderRadius: "10px",
                        cursor: "pointer",
                        color: "#ffffff",
                        p: 1,
                        minWidth: "unset",
                        width: "12%",
                        fontSize: "70%",
                      }}
                      onClick={() => unstakeHandler(index)}
                      disabled={
                        unstaked ||
                        withdrawan ||
                        +withdrawTime < +moment().format("X")
                      }
                    >
                      Unstake
                    </Button>
                    <Button
                      sx={{
                        background: `radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 50%)`,
                        boxShadow: "0px 0px 17px #AD00FF",
                        borderRadius: "10px",
                        cursor: "pointer",
                        color: "#ffffff",
                        p: 1,
                        minWidth: "unset",
                        width: "12%",
                        fontSize: "70%",
                      }}
                      onClick={() => withdrawHandler(index)}
                      disabled={
                        unstaked ||
                        withdrawan ||
                        +withdrawTime > +moment().format("X")
                      }
                    >
                      Claim
                    </Button>
                    <Button
                      sx={{
                        background: `radial-gradient(145.24% 943.2% at 7.91% 50%, #1C84FE 0%, #BD4BC8 50%)`,
                        boxShadow: "0px 0px 17px #AD00FF",
                        borderRadius: "10px",
                        cursor: "pointer",
                        color: "#ffffff",
                        p: 1,
                        minWidth: "unset",
                        width: "12%",
                        fontSize: "70%",
                      }}
                      onClick={() => extendHandler(index)}
                      disabled={
                        unstaked ||
                        withdrawan ||
                        +withdrawTime > +moment().format("X")
                      }
                    >
                      Extend
                    </Button>
                  </Stack>
                )
              )
            ) : (
              <p style={{ color: "red", marginTop: "30px" }}>
                You have no stake record yet.
              </p>
            )}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default YourJed;
