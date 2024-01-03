import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Marquee from "react-fast-marquee";
import NumberHolder from "./numberHolder.png";
// import SpaceShip from "./spaceShip.png";
import SpaceShip from "./SS.png";
import BottomBG from "./background.png";
// import { useCountdown } from "./../Hook/countDown.js";
// import Counter from "./CountdownTimer.js";
// import DateCountdown from "react-date-countdown-timer";
import TimerCountDown from "./TimerCountDown.js";
import moment from "moment";

export default (presalestartTime) => {


  
const myli = {
  fontSize: '20px',
    fontWeight: '600',
    padding: '20px',
    color: "white",
    listStyleType: 'none',
}

const myh2 = {
  fontSize: '20px',
    color: '#00cde4',
}

const myp = {
  fontSize: "16px",
};

const mycard = {
  backgroundColor: '#0A2075',
    /* padding: 20px; */
    boxShadow: '#ffffff7a 0px 1px 20px 0px',
    borderRadius: '24px 0',
    overflow: 'hidden',
}

  console.log("presalestartTime at Launch Time");
  console.log(presalestartTime.presalestartTime);
  return (
    <>
      <Box
        maxWidth="xl"
        sx={{
          backgroundImage: `url(${BottomBG})`,
          backgroundSize: "100% 40%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          margin: "auto",
        }}
        pb={8}
      >
        {/* <Typography
          fontSize={{ xs: "27px", sm: "40px", md: "55px" }}
          textAlign="center"
          sx={{ fontFamily: "Bebas Neue", lineHeight: "79px", color: "white" }}
          mb={5}
        >
          <span>LAUNCH COUNTDOWN</span>
        </Typography> */}

        <Container>
          <Grid container justifyContent="center" alignItems="center" mb={8}>
            <Grid item xs={12} mb={8}>
              {/* <Box
                width={{ xs: "100%", md: "60%" }}
                margin="auto"
                color="white"
                mb={3}
                fontSize={{ xs: "20px", md: "26px" }}
              >
                About us
              </Box>
              <Box
                fontSize={{ xs: "12px", md: "16px" }}
                width={{ xs: "100%", md: "60%" }}
                margin="auto"
                color="white"
                mb={3}
              >
                While Decentralized Finance (DeFi) continues to make waves and
                maintain its parabolic growth, yield farming remains a popular
                tool for generating returns from long-term holdings. For the
                uninitiated, yield farming is simply the act of staking your
                assets into a platform to earn yield.
              
                Address - LTQ 33, 61 BRIDGE STREET, KINGTON, HEREFORDSHIRE, UNITED KINGDOM HR5 3DJ
              </Box>
              
              <Box
                width={{ xs: "100%", md: "60%" }}
                margin="auto"
                color="white"
                mb={3}
                fontSize={{ xs: "20px", md: "26px" }}
              >
                 Meet Our Team
              </Box>
              <Grid container margin="auto" width={{ xs: "100%", md: "60%" }} justifyContent="center" alignItems="center" mb={8}>
              <Box item
                fontSize={{ xs: "12px", md: "16px" }}
                width={{ xs: "25%", md: "25%" }}
                margin="auto"
                color="white"
                mb={3}
                alignItems="center"
              >
                <img  src={'https://i.imgur.com/GRaeipz.png'} />
                <br />
                <h2>Joe C Graham</h2>
               
                Joe is our technical expert and a founding member. He heads the company operations.

              </Box>

              <Box item
                fontSize={{ xs: "12px", md: "16px" }}
                width={{ xs: "25%", md: "25%" }}
                margin="auto"
                color="white"
                mb={3}
              >
               <img  src={'https://i.imgur.com/WkSmqCa.png'} />
               <br />
               <h2>Shadab Khan</h2>
               
               An Indian-British businessman, He holds a management degree from a leading British university. He is one of the financial aspects of the company . 

              </Box>

              <Box item
                fontSize={{ xs: "12px", md: "16px" }}
                width={{ xs: "25%", md: "25%" }}
                margin="auto"
                color="white"
                mb={3}
              >
                <img  src={'https://i.imgur.com/hUjtYTU.png'} />
                <br />
                <h2>Pardeep </h2>
                
                Has a finance degree from a leading British university 12 years of global experience. He is the CEO of the company.

              </Box>
              </Grid>

              <Box
                width={{ xs: "100%", md: "60%" }}
                margin="auto"
                color="white"
                mb={3}
                fontSize={{ xs: "20px", md: "26px" }}
              >
                 Our Registration
              </Box>

              <Grid margin="auto" width={{ xs: "100%", md: "60%" }} justifyContent="center" alignItems="center" mb={8}>
              <Box item
                fontSize={{ xs: "12px", md: "16px" }}
                width={{ xs: "25%", md: "100%" }}
                margin="auto"
                color="white"
                mb={3}
                alignItems="center"
              >
                <img width="100%" src={'https://i.imgur.com/8hopKya.png'} />
              </Box>
              
              </Grid>
              <Grid margin="auto" width={{ xs: "100%", md: "60%" }} justifyContent="center" alignItems="center" mb={8}>
             
              <Box item
                fontSize={{ xs: "12px", md: "16px" }}
                width={{ xs: "25%", md: "100%" }}
                margin="auto"
                color="white"
                mb={3}
                alignItems="center"
              >
                <img width="100%" src={'https://i.imgur.com/YLDqblj.png'} />
              </Box>
              </Grid>
              

              <Box
                width={{ xs: "100%", md: "60%" }}
                margin="auto"
                color="white"
                mb={3}
                fontSize={{ xs: "20px", md: "26px" }}
              >
                Our vision
              </Box>
              <Box
                fontSize={{ xs: "12px", md: "16px" }}
                width={{ xs: "100%", md: "60%" }}
                margin="auto"
                color="white"
                mb={3}
              >
                Our vision is to be a leading Cardano farm on the Binance Smart
                Chain platform, possessing transparent and fair metrics and
                bringing many returns.
              </Box>


              <Box
                width={{ xs: "100%", md: "60%" }}
                margin="auto"
                color="white"
                mb={3}
                fontSize={{ xs: "20px", md: "26px" }}
              >
                 International Support Team
              </Box>
              <Grid container margin="auto" width={{ xs: "100%", md: "60%" }} justifyContent="center" alignItems="center" mb={8}>
              <Box item
                fontSize={{ xs: "12px", md: "16px" }}
                width={{ xs: "25%", md: "25%" }}
                margin="auto"
                color="white"
                mb={3}
                alignItems="center"
              >
                <img width="100%"  src={'https://i.imgur.com/5Nu71if.png'} />
                <br />
                <h2>Emily Ann</h2>
                Emily is an expert trading professional with rich experience in global market. She is tha COO for Belgium
              </Box>

              <Box item
                fontSize={{ xs: "12px", md: "16px" }}
                width={{ xs: "25%", md: "25%" }}
                margin="auto"
                color="white"
                mb={3}
              >
               <img width="100%"  src={'https://i.imgur.com/Y5KRJO9.png'} />
               <br />
               <h2>Shan Lee</h2>
               Shan is responsible for the asia pacific region. He looks after market expansion. Shan is an expert in market strategy. He is based in Hongkong
              </Box>

              <Box item
                fontSize={{ xs: "12px", md: "16px" }}
                width={{ xs: "25%", md: "25%" }}
                margin="auto"
                color="white"
                mb={3}
              >
                <img width="100%"  src={'https://i.imgur.com/rukKknT.png'} />
                <br />
                <h2>K B Prince </h2>
                A passionate trader with a degree in financial planning management from a leading USA University. Prince is tha COO for tha south African region.
              </Box>
              </Grid>
              <Grid container margin="auto" width={{ xs: "100%", md: "60%" }} justifyContent="center" alignItems="center" mb={8}>
              <Box item
                fontSize={{ xs: "12px", md: "16px" }}
                width={{ xs: "25%", md: "25%" }}
                margin="auto"
                color="white"
                mb={3}
                alignItems="center"
              >
                <img width="100%"   src={'https://i.imgur.com/tA1CQLR.png'} />
                <br />
                <h2>Ralph B Gotez</h2>
                Ralph is tha COO for tha South American region. He holds a marketing degree and has fifteenth years of experience
              </Box>

              <Box item
                fontSize={{ xs: "12px", md: "16px" }}
                width={{ xs: "25%", md: "25%" }}
                margin="auto"
                color="white"
                mb={3}
              >
               <img width="100%"  src={'https://i.imgur.com/E14YCOw.png'} />
               <br />
               <h2>Ebelji Canel</h2>
               Looks after turkey and kazak region. Is a network marketing professional with finance background.
              </Box>

              <Box item
                fontSize={{ xs: "12px", md: "16px" }}
                width={{ xs: "25%", md: "25%" }}
                margin="auto"
                color="white"
                mb={3}
              >
                <img width="100%"    src={'https://i.imgur.com/VK2Znd7.png'} />
                <br />
                <h2>Elena Issova </h2>
                Elena hold a degree in marketing and has two decades of experience. She is tha COO for Georgia and Russia
              </Box>
              </Grid> */}


              {/* CountDown here */}
              {/* <center>
                <Box
                  width={{ xs: "100%", md: "60%" }}
                  margin="auto"
                  color="white"
                  mb={3}
                  fontSize={{ xs: "20px", md: "40px" }}
                >
                  LAUNCH COUNTDOWN
                </Box>
              </center>

              <TimerCountDown
                
                time={presalestartTime.presalestartTime}
              /> */}
              <br />
              <center>
                <Box
                  width={{ xs: "100%", md: "60%" }}
                  margin="auto"
                  color="white"
                  mb={3}
                  fontSize={{ xs: "20px", md: "40px" }}
                >
                  Our Process
                </Box>
              </center>

              <Box
                fontSize={{ xs: "12px", md: "16px", textAlign: "justify" }}
                width={{ xs: "100%", md: "60%" }}
                margin="auto"
                color="white"
                mb={7}
              >
                Universal God Coin Staking dapp works on the Binance platform,
                which is eco-friendly, working on a proof of stake. Universal god
                Coin staking ensures users' funds are safe by leveraging
                effective security measures and providing Secure Asset Fund for
                Users. Our staking method at the time of writing is arguably one
                of the safest and eco-friendliest methods (for cryptocurrency)
                to earn passive income by merely storing or locking funds in a
                wallet as more individuals.
              </Box>

              <center>
                <a href="#presaleBonus" style={{ textDecoration: "none" }}>
                  <Button
                    className="btn button"
                    sx={{
                      borderRadius: "39px",
                      background: "#816EC4",
                      color: "white",
                      "&:hover": {
                        background: "#F7D6BB",
                        transition: ".3s",
                        color: "black",
                      },
                    }}
                  >
                    Buy GOD
                  </Button>
                </a>
              </center>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box
                width={{ xs: "100%", md: "60%" }}
                margin="auto"
                color="white"
                mb={3}
                fontSize={{ xs: "20px", md: "26px" }}
              >
                UNIVERSAL GOD COIN ICO
              </Box>
              <Box
                fontSize={{ xs: "12px", md: "16px" }}
                width={{ xs: "100%", md: "60%" }}
                margin="auto"
                color="white"
                mb={3}
              >
                UNIVERSAL GOD COIN ICO proved to be a Solid Combination of the
                following:
                <ul>
                  <li>The most advanced Blockchain technology</li>
                  <li>The best in class assets.</li>
                  <li>A business ecosystem.</li>
                </ul>
              </Box>

              <center>
                <a href="#presaleBonus" style={{ textDecoration: "none" }}>
                  <Button
                    className="btn button"
                    sx={{
                      borderRadius: "39px",
                      background: "#816EC4",
                      color: "white",
                      "&:hover": {
                        background: "#F7D6BB",
                        transition: ".3s",
                        color: "black",
                      },
                    }}
                  >
                    Buy GOD
                  </Button>
                </a>
              </center>
            </Grid>

            <Grid item xs={12} sm={6} mt={5}>
              {" "}
              <center>
                <img src={SpaceShip} alt={SpaceShip} width="90%" />
              </center>{" "}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Box
          p={2}
          width={{ xs: "100%", md: "60%" }}
          margin="auto"
          color="white"
          // mb={1}
          fontSize={{ xs: "20px", md: "26px" }}
        >
          Transparency
        </Box>
        <Box
          p={2}
          fontSize={{ xs: "12px", md: "16px" }}
          width={{ xs: "100%", md: "60%" }}
          margin="auto"
          color="white"
          // mb={1}
        >
          UNIVERSAL GOD COIN will increase transparency in transactions by
          providing detailed and real-time logs of all transactions. We will be
          as transparent as possible while remaining competitive.
        </Box>

        <Box
          p={2}
          width={{ xs: "100%", md: "60%" }}
          margin="auto"
          color="white"
          // mb={1}
          fontSize={{ xs: "20px", md: "26px" }}
        >
          Low transaction fees
        </Box>
        <Box
          p={2}
          fontSize={{ xs: "12px", md: "16px" }}
          width={{ xs: "100%", md: "60%" }}
          margin="auto"
          color="white"
          // mb={1}
        >
          Binance Chain's low transaction fees make transactions simple for
          everyone.
        </Box>
        <Box
          p={2}
          width={{ xs: "100%", md: "60%" }}
          margin="auto"
          color="white"
          // mb={1}
          fontSize={{ xs: "20px", md: "26px" }}
        >
          Stake profit
        </Box>
        <Box
          p={2}
          fontSize={{ xs: "12px", md: "16px" }}
          width={{ xs: "100%", md: "60%" }}
          margin="auto"
          color="white"
          // mb={1}
        >
          The profit (dividends) are accrued to your account on a daily basis
          and in real-time.
          <br />
          In order to use the service, you simply deposit your UGC
          Coins. After depositing, you will earn rewards on staking Pool amount
          Staking essentially means depositing UGC Coins within
          the protocol Safety Module. The purpose of staking is stakers will
          receive UGC as rewards.
        </Box>
      </Box>

      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          mb={5}
          mt={7}
        >
          <Grid item xs={12} md={5} mb={3} style={mycard}>
            <Box
              p={2}
              // width={{ xs: "100%", md: "60%" }}
              color="white"
              // mb={3}
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(207 54 90) 0px, rgb(255 165 182) 100%)",
              }}
              fontSize={{ xs: "20px", md: "26px" }}
            >
              First Phase
            </Box>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
                flexDirection: "row",
                background: "#10002b96" 
              }}
            >
              <li style={myli}>
                <h2 style={myh2}>Duration</h2>
                <p style={myp}>15 Days</p>
              </li>
              <li style={myli}>
                <h2 style={myh2}>Price</h2>
                <p style={myp}>$0.3</p>
              </li>
              <li style={myli}>
                <h2 style={myh2}>No. of Coins Sale</h2>
                <p style={myp}>45 Lakh</p>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} mb={3} md={1}></Grid>

          <Grid item xs={12} mb={3} md={5} style={mycard}>
            <Box
              p={2}
              // width={{ xs: "100%", md: "60%" }}
              color="white"
              // mb={3}
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(207 54 90) 0px, rgb(255 165 182) 100%)",
              }}
              fontSize={{ xs: "20px", md: "26px" }}
            >
              Second Phase
            </Box>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
                flexDirection: "row",
                backgroundColor: "#10002b96"              }}
            >
              <li style={myli}>
                <h2 style={myh2}>Duration</h2>
                <p style={myp}>15 Days</p>
              </li>
              <li style={myli}>
                <h2 style={myh2}>Price</h2>
                <p style={myp}>$0.5</p>
              </li>
              <li style={myli}>
                <h2 style={myh2}>No. of Coins Sale</h2>
                <p style={myp}>1.00 CR</p>
              </li>
            </ul>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" alignItems="center" mb={5}>
          <Grid item xs={12} md={5} mb={3} style={mycard}>
            <Box
              p={2}
              // width={{ xs: "100%", md: "60%" }}
              color="white"
              // mb={3}
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(207 54 90) 0px, rgb(255 165 182) 100%)",
              }}
              fontSize={{ xs: "20px", md: "26px" }}
            >
              Third Phase
            </Box>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
                flexDirection: "row",
                backgroundColor : "#10002b96"              }}
            >
              <li style={myli}>
                <h2 style={myh2}>Duration</h2>
                <p style={myp}>15 Days</p>
              </li>
              <li style={myli}>
                <h2 style={myh2}>Price</h2>
                <p style={myp}>$0.7</p>
              </li>
              <li style={myli}>
                <h2 style={myh2}>No. of Coins Sale</h2>
                <p style={myp}>1.50 CR</p>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={1} mb={3}></Grid>

          <Grid item xs={12} md={5} mb={3} style={mycard}>
            <Box
              p={2}
              // width={{ xs: "100%", md: "60%" }}
              color="white"
              // mb={3}
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgb(207 54 90) 0px, rgb(255 165 182) 100%)",
              }}
              fontSize={{ xs: "20px", md: "26px" }}
            >
              Fourth Phase
            </Box>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
                flexDirection: "row",
                backgroundColor: "#10002b96"              }}
            >
              <li style={myli}>
                <h2 style={myh2}>Duration</h2>
                <p style={myp}>15 Days</p>
              </li>
              <li style={myli}>
                <h2 style={myh2}>Price</h2>
                <p style={myp}>$0.9</p>
              </li>
              <li style={myli}>
                <h2 style={myh2}>No. of Coins Sale</h2>
                <p style={myp}>2.00 CR</p>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
