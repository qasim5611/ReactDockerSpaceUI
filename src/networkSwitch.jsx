import React from "react";
import { Dialog, DialogContent, Box, Slide } from "@mui/material";
// import { useWeb3React } from "@web3-react/core";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function NetworkChange({ open, setOpen }) {
  // const { deactivate } = useWeb3React();
  const handleClose = () => {
    setOpen(false);
  };
  const networkHandler = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x61" }],
      });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
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
            <Box component="h3" color="#fff" mt={3} mb={3}>
              <Box component="span" color="red" fontSize="30px">
                Error!
              </Box>{" "}
              You are on wrong network please switch your network.{" "}
            </Box>
            <Box align="center" display="flex" justifyContent="center" mb={5}>
              <button
                style={{
                  background: "#FF4365",
                  borderRadius: "34px",
                  padding: "15px 20px",
                  outline: "none",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "16px",
                  lineHeight: "19px",
                  fontWeight: "bold",
                  // border: "4px solid #00375B",
                  textTransform: "uppercase",
                  marginRight: "10px",
                  marginBottom: "20px",
                }}
                onClick={networkHandler}
              >
                Switch Network
              </button>
            </Box>
          </DialogContent>
        </Dialog>
        {/* </Slide> */}
      </div>
    </div>
  );
}

export default NetworkChange;
