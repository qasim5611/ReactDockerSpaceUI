import { Grid, Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";

import BG from "./background.png";
import leftBorder from "./leftBorder.png";
import rightBorder from "./rightBorder.png";
import LIGFHT1 from "./LIGFHT1.png";
import LIGFHT2 from "./LIGFHT2.png";

export default () => {
  const dataSetMobile = [
    {
      year: "Year 2016",
      text: "PLANING AND IDEA GENERATION",
    },
    {
      year: "Year 2017",
      text: "PLAN IMPROVEMENT, RESEARCH & CONCEPT DEVELOPMENT.",
    },
    {
      year: "Year 2018",
      text: "BRAND LOGO, COLOR AND COMPANY POLICY DEVELOPMENT.",
    },
    {
      year: "Year 2019",
      text: "PLAN IMPROVEMENT, RESEARCH & CONCEPT DEVELOPMENT.",
    },
    {
      year: "Year 2020",
      text: "PLANING AND IDEA GENERATION",
    },
    {
      year: "Year 2021",
      text: "BRAND LOGO, COLOR AND COMPANY POLICY DEVELOPMENT.",
    },
    {
      year: "JANUARY 2021",
      text: "BRAND LOGO, COLOR AND COMPANY POLICY DEVELOPMENT.",
    },
    {
      year: "aUGUST 2021",
      text: "PLAN IMPROVEMENT, RESEARCH & CONCEPT DEVELOPMENT.",
    },
    {
      year: "sEPTEMBER 2021",
      text: "BRAND LOGO, COLOR AND COMPANY POLICY DEVELOPMENT.",
    },
    {
      year: "OCTOBER 2021",
      text: "PLAN IMPROVEMENT, RESEARCH & CONCEPT DEVELOPMENT.",
    },
    {
      year: "NOVEMBER 2021",
      text: "BRAND LOGO, COLOR AND COMPANY POLICY DEVELOPMENT.",
    },
    {
      year: "DECEMBER 2021",
      text: "PLAN IMPROVEMENT, RESEARCH & CONCEPT DEVELOPMENT.",
    },
    {
      year: "JANUARY 2022",
      text: "BRAND LOGO, COLOR AND COMPANY POLICY DEVELOPMENT.",
    },
    {
      year: "mAY 2022",
      text: "PLAN IMPROVEMENT, RESEARCH & CONCEPT DEVELOPMENT.",
    },
    {
      year: "DECEMBER 2022",
      text: "BRAND LOGO, COLOR AND COMPANY POLICY DEVELOPMENT.",
    },
    {
      year: "YEAR 2023",
      text: "PLAN IMPROVEMENT, RESEARCH & CONCEPT DEVELOPMENT.",
    },
    {
      year: "NEXT",
      text: "BRAND LOGO, COLOR AND COMPANY POLICY DEVELOPMENT.",
    },
  ];

  const dataSet3 = [
    {
      year1: "Year 2019",
      text1: "PLAN IMPROVEMENT, RESEARCH & CONCEPT DEVELOPMENT.",
      year2: "Year 2020",
      text2: "PLANING AND IDEA GENERATION",
    },
    {
      year1: "Year 2021",
      text1: "PLAN IMPROVEMENT, RESEARCH & CONCEPT DEVELOPMENT.",
      year2: "JANUARY 2021",
      text2: "BRAND LOGO, COLOR AND COMPANY POLICY DEVELOPMENT.",
    },
    {
      year1: "aUGUST 2021",
      text1: "PLAN IMPROVEMENT, RESEARCH & CONCEPT DEVELOPMENT.",
      year2: "sEPTEMBER 2021",
      text2: "BRAND LOGO, COLOR AND COMPANY POLICY DEVELOPMENT.",
    },
    {
      year1: "OCTOBER 2021",
      text1: "PLAN IMPROVEMENT, RESEARCH & CONCEPT DEVELOPMENT.",
      year2: "NOVEMBER 2021",
      text2: "BRAND LOGO, COLOR AND COMPANY POLICY DEVELOPMENT.",
    },
    {
      year1: "DECEMBER 2021",
      text1: "PLAN IMPROVEMENT, RESEARCH & CONCEPT DEVELOPMENT.",
      year2: "JANUARY 2022",
      text2: "BRAND LOGO, COLOR AND COMPANY POLICY DEVELOPMENT.",
    },
    {
      year1: "mAY 2022",
      text1: "PLAN IMPROVEMENT, RESEARCH & CONCEPT DEVELOPMENT.",
      year2: "DECEMBER 2022",
      text2: "BRAND LOGO, COLOR AND COMPANY POLICY DEVELOPMENT.",
    },
    {
      year1: "YEAR 2023",
      text1: "PLAN IMPROVEMENT, RESEARCH & CONCEPT DEVELOPMENT.",
      year2: "NEXT",
      text2: "BRAND LOGO, COLOR AND COMPANY POLICY DEVELOPMENT.",
    },
  ];

  return (
    <section id="ourroadmap">
      <Box
        maxWidth="xl"
        margin="auto"
        sx={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        padding="50px 0px 200px 0px"
      >
        <Typography
          fontSize={{ xs: "25px", md: "40px" }}
          textAlign="center"
          color="white"
        >
          <span>ROADMAPs</span>
        </Typography>

        <Hidden mdDown>
          <Grid container alignItems="center" justifyContent="center" mt={20}>
            <Grid item container alignItems="center" justifyContent="center">
              <Grid item xs={3}>
                <Box
                  width="90%"
                  margin="auto auto auto auto"
                  sx={{ textAlign: "right", textTransform: "uppercase" }}
                >
                  <Typography fontSize="14px" width="80%" color="white">
                    {" "}
                    Year 2017{" "}
                  </Typography>
                  {/* <img src={leftBorder} width='100%' /> */}
                  <Box
                    width="90%"
                    sx={{
                      backgroundImage: `url(${leftBorder})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "top right",
                      backgroundSize: "100%",
                      minHeight: "100px",
                      paddingTop: "10px",
                    }}
                  >
                    <Typography
                      fontSize="12px"
                      width="90%"
                      float="right"
                      color="white"
                    >
                      {" "}
                      PLAN IMPROVEMENT, RESEARCH {"&"} CONCEPT DEVELOPMENT.{" "}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  width="90%"
                  margin="auto"
                  sx={{ textAlign: "right", textTransform: "uppercase" }}
                >
                  <img
                    src={LIGFHT1}
                    width="100%"
                    style={{ marginTop: "100px" }}
                  />
                  <img src={LIGFHT2} width="100%" />
                  <img src={LIGFHT1} width="100%" />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  width="90%"
                  margin="auto"
                  sx={{ textAlign: "left", textTransform: "uppercase" }}
                >
                  <Typography
                    fontSize="14px"
                    width="80%"
                    color="white"
                    marginLeft="10%"
                  >
                    {" "}
                    Year 2016{" "}
                  </Typography>
                  <Box
                    width="90%"
                    sx={{
                      backgroundImage: `url(${rightBorder})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "top right",
                      backgroundSize: "100%",
                      minHeight: "100px",
                      paddingTop: "10px",
                    }}
                  >
                    <Typography
                      fontSize="12px"
                      width="90%"
                      color="white"
                      marginLeft="10%"
                    >
                      {" "}
                      PLANING AND IDEA GENERATION{" "}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  width="90%"
                  margin="30px auto auto auto"
                  sx={{ textAlign: "left", textTransform: "uppercase" }}
                >
                  <Typography
                    fontSize="14px"
                    width="80%"
                    color="white"
                    marginLeft="10%"
                  >
                    {" "}
                    Year 2018{" "}
                  </Typography>
                  <Box
                    width="90%"
                    sx={{
                      backgroundImage: `url(${rightBorder})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "top right",
                      backgroundSize: "100%",
                      minHeight: "100px",
                      paddingTop: "10px",
                    }}
                  >
                    <Typography
                      fontSize="12px"
                      width="90%"
                      color="white"
                      marginLeft="10%"
                    >
                      {" "}
                      BRAND LOGO, COLOR AND COMPANY POLICY DEVELOPMENT.{" "}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {dataSet3.map((obj, indx) => {
              return (
                <Grid
                  key={indx}
                  item
                  container
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item xs={3}>
                    <Box
                      width="90%"
                      margin="-150px auto auto auto"
                      sx={{ textAlign: "right", textTransform: "uppercase" }}
                    >
                      <Typography fontSize="14px" width="80%" color="white">
                        {" "}
                        {obj.year1}{" "}
                      </Typography>
                      {/* <img src={leftBorder} width='100%' /> */}
                      <Box
                        width="90%"
                        sx={{
                          backgroundImage: `url(${leftBorder})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "top right",
                          backgroundSize: "100%",
                          minHeight: "100px",
                          paddingTop: "10px",
                        }}
                      >
                        <Typography
                          fontSize="12px"
                          width="90%"
                          float="right"
                          color="white"
                        >
                          {" "}
                          {obj.text1}{" "}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Box
                      width="90%"
                      margin="auto"
                      sx={{ textAlign: "right", textTransform: "uppercase" }}
                    >
                      {/* <img src={LIGFHT1} width='100%' /> */}
                      <img src={LIGFHT2} width="100%" />
                      {indx !== 6 ? <img src={LIGFHT1} width="100%" /> : null}
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Box
                      width="90%"
                      margin="auto"
                      sx={{ textAlign: "left", textTransform: "uppercase" }}
                    >
                      <Typography
                        fontSize="14px"
                        width="80%"
                        color="white"
                        marginLeft="10%"
                      >
                        {" "}
                        {obj.year2}{" "}
                      </Typography>
                      <Box
                        width="90%"
                        sx={{
                          backgroundImage: `url(${rightBorder})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "top right",
                          backgroundSize: "100%",
                          minHeight: "100px",
                          paddingTop: "10px",
                        }}
                      >
                        <Typography
                          fontSize="12px"
                          width="90%"
                          color="white"
                          marginLeft="10%"
                        >
                          {" "}
                          {obj.text2}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Hidden>

        <Hidden mdUp>
          <Grid container mt={20} justifyContent="center">
            {dataSetMobile.map((obj, indx) => {
              return (
                <span key={indx}>
                  <Grid item xs={6} textAlign="center">
                    <Box
                      width={{ xs: "90%", sm: "80%" }}
                      margin="auto auto auto auto"
                      sx={{ textTransform: "uppercase" }}
                      textAlign={indx % 2 === 0 ? "right" : "left"}
                    >
                      <Typography
                        fontSize="14px"
                        width={indx % 2 === 0 ? "70%" : "90%"}
                        color="white"
                        margin="auto"
                      >
                        {obj.year}
                      </Typography>
                      <Box
                        width="90%"
                        sx={{
                          backgroundImage: `url(${
                            indx % 2 === 0 ? leftBorder : rightBorder
                          })`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "top right",
                          backgroundSize: "100%",
                          minHeight: "120px",
                          paddingTop: "10px",
                        }}
                      >
                        <Typography
                          fontSize="12px"
                          width="90%"
                          color="white"
                          margin="auto"
                        >
                          {obj.text}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </span>
              );
            })}
          </Grid>
        </Hidden>
      </Box>
    </section>
  );
};
