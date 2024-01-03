import { Grid, Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "./header.css";
import logo from "./logo2.png";
import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logout from "../../logoutModal";
import Modal from "../../modal";
import {
  AccountTree,
  AddRoad,
  DeviceHub,
  FolderSpecial,
  Home,
  Menu,
  StackedLineChart,
} from "@mui/icons-material";
import { useHistory } from "react-router";
import { useWeb3React } from "@web3-react/core";

export default () => {
  const history = useHistory();
  const { account } = useWeb3React();
  const [openConnect, setopenConnect] = useState(false);
  const [logout, setlogout] = useState(false);
  const dataSet = [
    { name: "Home", link: "#home", icon: <Home sx={{ color: "#FF4365" }} /> },
    {
      name: "About Us",
      link: "#about",
      icon: <AccountTree sx={{ color: "#FF4365" }} />,
    },
    {
      name: "Tokenomics",
      link: "#tokenomics",
      icon: <FolderSpecial sx={{ color: "#FF4365" }} />,
    },
    {
      name: "Distribution",
      link: "#distribution",
      icon: <DeviceHub sx={{ color: "#FF4365" }} />,
    },
    {
      name: "Roadmap",
      link: "#ourroadmap",
      icon: <AddRoad sx={{ color: "#FF4365" }} />,
    },
  ];
  let dir = "right";
  const [state, setState] = React.useState({});
  const toggleDrawer = (open) => () => {
    setState({ [dir]: open });
  };
  const [nav, setNav] = useState(false);
  const navDealer = () => {
    if (window.scrollY >= 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", navDealer);

  return (
    <Box sx={{ position: "fixed", top: "0", width: "100%", zIndex: "4" }}>
      <Modal setOpen={setopenConnect} open={openConnect} />
      <Logout setOpen={setlogout} open={logout} />
      {/* return <Box> */}
      <Box maxWidth="xl" margin="auto" position="relative">
        <Grid
          container
          justifyContent="space-around"
          sx={{ zIndex: 2, margin: "auto" }}
          alignItems="center"
        >
          {/* my links  */}
          <Hidden mdDown>
            <Grid
              container
              item
              xs={10}
              sm={11}
              md={11}
              lg={10}
              justifyContent="space-around"
              alignItems="center"
            >
              <Grid item style={{ textAlign: "center" }} mt={2}>
                <Typography
                  paragraph
                  fontSize={{ xs: "15px", md: "15px" }}
                  onClick={() => history.push("/")}
                >
                  <a
                    href="#home"
                    style={{
                      padding: "10px 6px",
                      fontWeight: "bold",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    Home{" "}
                  </a>
                </Typography>
              </Grid>
              <Grid item style={{ textAlign: "center" }} mt={2}>
                <Typography
                  paragraph
                  fontSize={{ xs: "15px", md: "15px" }}
                  onClick={() => history.push("/")}
                >
                  <a
                    href="#about"
                    style={{
                      padding: "10px 6px",
                      fontWeight: "bold",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    About Us{" "}
                  </a>
                </Typography>
              </Grid>
              <Grid item style={{ textAlign: "center" }} mt={2}>
                <Typography
                  paragraph
                  fontSize={{ xs: "15px", md: "15px" }}
                  onClick={() => history.push("/")}
                >
                  <a
                    href="#tokenomics"
                    style={{
                      padding: "10px 6px",
                      fontWeight: "bold",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    Coins{" "}
                  </a>
                </Typography>
              </Grid>

              <Grid item style={{ textAlign: "center" }}>
                <Box width={{ xs: "50%", sm: "100%", md: "100%" }}>
                  <img src={logo} alt={logo} width="100%" />
                </Box>
              </Grid>

              <Grid item style={{ textAlign: "center" }} mt={2}>
                <Typography
                  paragraph
                  fontSize={{ xs: "15px", md: "15px" }}
                  onClick={() => history.push("/")}
                >
                  <a
                    href="#distribution"
                    style={{
                      padding: "10px 6px",
                      fontWeight: "bold",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    Distribution{" "}
                  </a>
                </Typography>
              </Grid>

              <Grid item style={{ textAlign: "center" }} mt={2}>
                <Typography
                  paragraph
                  fontSize={{ xs: "15px", md: "15px" }}
                  onClick={() => history.push("/")}
                >
                  <a
                    href="#map"
                    style={{
                      padding: "10px 6px",
                      fontWeight: "bold",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    Roadmaps{" "}
                  </a>
                </Typography>
              </Grid>
              {/* <Grid item style={{ textAlign: "center" }} mt={2}>
                <Typography
                  paragraph
                  fontSize={{ xs: "15px", md: "15px" }}
                  onClick={() => history.push("/")}
                >
                  <a
                    href="#roadmap"
                    style={{
                      padding: "10px 6px",
                      fontWeight: "bold",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    Roadmap{" "}
                  </a>
                </Typography>
              </Grid> */}

              <Grid item style={{ textAlign: "center" }} mt={2}>
                <Typography paragraph>
                  {" "}
                  {account ? (
                    <a
                      href="#wallectconnect"
                      style={{
                        background: "#FF4365",
                        textDecoration: "none",
                        padding: "10px 20px",
                        borderRadius: "45px",
                        color: "white",
                      }}
                      className="glow-on-hover"
                      onClick={() => setlogout(true)}
                    >
                      {account.slice(0, 6) + "..." + account.slice(-4)}
                    </a>
                  ) : (
                    <a
                      href="#wallectconnect"
                      style={{
                        background: "#FF4365",
                        textDecoration: "none",
                        padding: "10px 20px",
                        borderRadius: "45px",
                        color: "white",
                      }}
                      className="glow-on-hover"
                      onClick={() => setopenConnect(true)}
                    >
                      {" "}
                      Connect Wallet{" "}
                    </a>
                  )}
                </Typography>
              </Grid>
            </Grid>{" "}
          </Hidden>
          <Hidden mdUp>
            <Grid item style={{ textAlign: "center" }}>
              <Box width={{ xs: "50%", sm: "100%", md: "100%" }}>
                <img src={logo} alt={logo} width="100%" />
              </Box>
            </Grid>
            <Grid item>
              <Menu
                sx={{
                  color: "#FF4365",
                  fontSize: "35px",
                  "&:hover": { cursor: "pointer" },
                }}
                onClick={toggleDrawer(dir, true)}
              />

              <SwipeableDrawer
                anchor={dir}
                open={state[dir]}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
                <Box
                  sx={{
                    width: 200,
                    marginLeft: "1vw",
                    marginRight: "1vw",
                    marginTop: "5vh",
                  }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {dataSet.map((obj, index) => (
                      <ListItem key={index} onClick={() => history.push("/")}>
                        <ListItemIcon> {obj.icon} </ListItemIcon>
                        <a
                          href={obj.link}
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          <ListItemText primary={obj.name} />
                        </a>
                      </ListItem>
                    ))}
                    {/* <ListItem onClick={() => history.push("/staking")}>
                      <ListItemIcon>
                        {" "}
                        <StackedLineChart sx={{ color: "#FF4365" }} />{" "}
                      </ListItemIcon>
                      <a style={{ color: "white", textDecoration: "none" }}>
                        <ListItemText primary="STAKING" />
                      </a>
                    </ListItem> */}

                    <Divider
                      sx={{
                        background: "#FF4365",
                        height: "4px",
                        borderRadius: "20px",
                        margin: "10px 0px",
                      }}
                    />
                    <ListItem>
                      <ListItemText sx={{ textAlign: "center" }} mt={2}>
                        <Typography paragraph>
                          {account ? (
                            <a
                              href="#wallectconnect"
                              style={{
                                background: "#FF4365",
                                textDecoration: "none",
                                padding: "10px 20px",
                                borderRadius: "45px",
                                color: "white",
                              }}
                              className="glow-on-hover"
                              onClick={() => setlogout(true)}
                            >
                              {account.slice(0, 6) + "..." + account.slice(-4)}
                            </a>
                          ) : (
                            <a
                              href="#wallectconnect"
                              style={{
                                background: "#FF4365",
                                textDecoration: "none",
                                padding: "10px 20px",
                                borderRadius: "45px",
                                color: "white",
                              }}
                              className="glow-on-hover"
                              onClick={() => setopenConnect(true)}
                            >
                              {" "}
                              Connect Wallet{" "}
                            </a>
                          )}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  </List>
                </Box>
              </SwipeableDrawer>
            </Grid>
          </Hidden>
          <Box
            width={{ xs: "90%", lg: "85%" }}
            sx={{
              margin: "auto",
              background: "#00092B",
              height: "50px",
              position: "absolute",
              left: "0",
              right: "0",
              zIndex: "-1",
              borderRadius: "40px",
            }}
            top={{ xs: "10%", sm: "29%" }}
          ></Box>
        </Grid>
      </Box>
    </Box>
  );
};
