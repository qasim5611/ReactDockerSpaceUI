import { Container, TableHead, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import BG from './background.png';
import Coin from './coin.png';

export default () => {
    const dataSet = [
      { title: "Founder Coin", value: "10%" },
      { title: "Management Team", value: "10%" },
      { title: "Blockchain Exchange", value: "10%" },
      { title: "Team Development", value: "10%" },
      { title: "National & International Meeting", value: "10%" },
      { title: "Burn", value: "10%" },
      { title: "Launchpad", value: "05%" },
      { title: "Private sale", value: "05% (ICO)" },
      { title: "Public Sale", value: "30%" },

    ];

    return (
      <>
        <Box
          maxWidth="xl"
          margin="auto"
          sx={{
            backgroundImage: `url(${BG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <Box textAlign="center" pt={8}>
            <img src={Coin} alt={Coin} />
          </Box>
          <Box
            style={{ margin: "80px auto 0px auto" }}
            width={{ xs: "95%", md: "60%" }}
            pb={10}
          >
            <Typography
              fontSize={{ xs: "25px", md: "40px" }}
              mb={3}
              textAlign="center"
              color="#FFFFFF"
              textTransform="uppercase"
            >
              <span>TOTAL SUPPLY ICO SALE</span>
            </Typography>
            <Container
              style={{
                background: "transparent",
                border: "3px solid #FFFFFF",
                borderRadius: "44px",
                textAlign: "center",
                paddingTop: "50px",
                paddingBottom: "50px",
              }}
              width={{ xs: "100%", md: "85%" }}
              paddingLeft={{ sx: "0px", md: "40px" }}
              paddingRight={{ sx: "0px", md: "40px" }}
            >
              <TableContainer
                style={{ margin: "auto", background: "transparent" }}
              >
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        component="th"
                        style={{
                          color: "white",
                          padding: "14px 10px 2px 0px",
                          textTransform: "uppercase",
                        }}
                      >
                        <Typography
                          fontSize={{ xs: "11px", md: "15px" }}
                          fontWeight="bold"
                        >
                          Total Supply
                        </Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        align="right"
                        style={{
                          color: "white",
                          padding: "14px 0px 2px 10px",
                          textTransform: "uppercase",
                        }}
                      >
                        {" "}
                        <Typography
                          fontSize={{ xs: "11px", md: "15px" }}
                          fontWeight="bold"
                        >
                          1 BILLION only
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataSet.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell
                          component="td"
                          style={{
                            color: "white",
                            padding: "14px 10px 2px 0px",
                            textTransform: "uppercase",
                          }}
                        >
                          <Typography fontSize={{ xs: "10px", md: "14px" }}>
                            {row.title}
                          </Typography>
                        </TableCell>
                        <TableCell
                          component="td"
                          align="right"
                          style={{
                            color: "white",
                            padding: "14px 0px 2px 10px",
                            textTransform: "uppercase",
                          }}
                        >
                          {" "}
                          <Typography fontSize={{ xs: "10px", md: "14px" }}>
                            {row.value}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </Box>
        </Box>

        <section className="section map" id="ourroadmap">
          <div className="container">
            <div className="row">
              <div className="col">
                <div
                  className="section-header section-header--animated section-header--center section-header--medium-margin aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <h4>Our way</h4>
                  <h2>Road Map</h2>
                </div>
              </div>
            </div>
            <div className="row" style={{ justifyContent: "center" }}>
              <div
                className="col-lg-6 offset-lg-4 col-sm-8 offset-sm-4 aos-init aos-animate"
                data-aos="fade-down"
              >
                <div className="road">
                  <div className="road__item road__item-active">
                    <div className="road__item-metka"></div>
                    <div className="road__item-content">
                      <div className="road__item-title">
                        AUGUST AND SEPTEMBER 2022
                      </div>
                      <p>ico launch in 4th phase (every phase 15 days)</p>
                    </div>
                  </div>
                  <div className="road__item road__item-next">
                    <div className="road__item-metka"></div>
                    <div className="road__item-content">
                      <div className="road__item-title">AUGUST 2022</div>
                      <p>decentralized exchange listing</p>
                    </div>
                  </div>
                  <div className="road__item road__item-next">
                    <div className="road__item-metka"></div>
                    <div className="road__item-content">
                      <div className="road__item-title">DECEMBER 2022</div>
                      <p>centralized exchange listing</p>
                    </div>
                  </div>
                  <div className="road__item road__item-next">
                    <div className="road__item-metka"></div>
                    <div className="road__item-content">
                      <div className="road__item-title">JANUARY 2023</div>
                      <p>ido launchpad</p>
                    </div>
                  </div>
                  <div className="road__item road__item-next">
                    <div className="road__item-metka"></div>
                    <div className="road__item-content">
                      <div className="road__item-title">JULY 2023</div>
                      <p>internal decentralized exchange development</p>
                    </div>
                  </div>
                  <div className="road__item road__item-next">
                    <div className="road__item-metka"></div>
                    <div className="road__item-content">
                      <div className="road__item-title">NOVEMBER 2023</div>
                      <p>all recharge options</p>
                    </div>
                  </div>
                  <div className="road__item road__item-next">
                    <div className="road__item-metka"></div>
                    <div className="road__item-content">
                      <div className="road__item-title">MAY 2024</div>
                      <p>gaming sector</p>
                    </div>
                  </div>
                  <div className="road__item road__item-next">
                    <div className="road__item-metka"></div>
                    <div className="road__item-content">
                      <div className="road__item-title">AUGUST 2024</div>
                      <p>e-commerce</p>
                    </div>
                  </div>
                  <div className="road__item road__item-next">
                    <div className="road__item-metka"></div>
                    <div className="road__item-content">
                      <div className="road__item-title">NOVEMBER 2024</div>
                      <p>realstate metaverse land</p>
                    </div>
                  </div>
                  <div className="road__item road__item-next">
                    <div className="road__item-metka"></div>
                    <div className="road__item-content">
                      <div className="road__item-title">APRIL 2025</div>
                      <p>education</p>
                    </div>
                  </div>
                  <div className="road__item road__item-next">
                    <div className="road__item-metka"></div>
                    <div className="road__item-content">
                      <div className="road__item-title">AUGUST 2025</div>
                      <p>internal blockchain</p>
                    </div>
                  </div>
                  <div className="road__item road__item-next">
                    <div className="road__item-metka"></div>
                    <div className="road__item-content">
                      <div className="road__item-title">NOVEMBER 2025</div>
                      <p>health sector</p>
                    </div>
                  </div>
                  <div className="road__item road__item-next">
                    <div className="road__item-metka"></div>
                    <div className="road__item-content">
                      <div className="road__item-title">JANUARY 2026</div>
                      <p>internal centralized exchange development</p>
                    </div>
                  </div>
                  <div className="road__item road__item-next">
                    <div className="road__item-metka"></div>
                    <div className="road__item-content">
                      <div className="road__item-title">MAY 2026</div>
                      <p>mining farm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />

            {/* <img src="img/road_map.png" data-jarallax-element="-40" alt="" className="map__title-bg" style="z-index: 0; transform: translate3d(0px, 100.024px, 0px);" data-jarallax-original-styles="transform: translate3d(0px, 489.998px, 0px);"> */}
          </div>
        </section>
      </>
    );
}
