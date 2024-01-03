import { Backdrop, Button, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
// import Backdrop from "@material-ui/core/Backdrop";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 1000,
    color: "#fff",
  },
}));

export default function Loading({ loading }) {
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
