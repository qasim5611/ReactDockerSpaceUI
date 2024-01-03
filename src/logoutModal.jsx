import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  Slide,
  useMediaQuery,
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  metaMaskUpperLayer: {
    // width: "350px",
    height: "50px",
    // border: "4px solid #00375B",
    background: "#FF4365",
    borderRadius: "50px",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "20px",
    marginBottom: "20px",
    paddingRight: "30px",
    paddingLeft: "30px",
    cursor: "pointer",
    // [theme.breakpoints.down("xs")]: { width: "100%" },
  },
  buttonText: {
    fontStyle: "normal",
    fontWeight: "bold",
    // fontSize: "17.69pt",
    color: "#fff",
    // [theme.breakpoints.down("xs")]: { fontSize: "15px" },
  },
});
function Logout({ open, setOpen, disconnect }) {
  const matches = useMediaQuery("(max-width:600px)");

  const classes = useStyles();
  const { deactivate } = useWeb3React();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="modal__main__container">
        <Dialog
          open={open}
          keepMounted
          TransitionComponent={Transition}
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent className="dialoge__content__section">
            <Box
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                className={classes.metaMaskUpperLayer}
                width={matches ? "80%" : "350px"}
                onClick={() => {
                  setOpen(false);
                  deactivate();
                  localStorage.removeItem("wallet");
                }}
              >
                <Typography
                  variant="h1"
                  className={classes.buttonText}
                  fontSize={matches ? "15px" : "17.69pt"}
                >
                  Logout
                </Typography>
              </Box>
              <Box
                className={classes.metaMaskUpperLayer}
                width={matches ? "80%" : "350px"}
                marginLeft="10px"
                onClick={handleClose}
              >
                <Typography
                  variant="h1"
                  className={classes.buttonText}
                  fontSize={matches ? "15px" : "17.69pt"}
                >
                  Cancel
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center">
              <br />
              <img src="./circle.png" alt="" />
              <br />
            </Box>
          </DialogContent>
        </Dialog>
        {/* </Slide> */}
      </div>
    </div>
  );
}

export default Logout;
