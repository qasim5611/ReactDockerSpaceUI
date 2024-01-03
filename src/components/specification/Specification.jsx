import { Box } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import BG from "./background.png";

export default () => {
  return (
    <>
      <Box
        width={{ xs: "90%", md: "820px" }}
        margin="auto"
        pt={8}
        pb={8}
        position="relative"
      >
        <TableContainer
          sx={{
            border: " 1px solid #FF4365",
            padding: "5% 10%",
            width: "100%",
            backgroundImage: `url(${BG})`,
            backgroundSize: "110% 120%",
            backgroundPosition: "center center",
          }}
        >
          <Table
            sx={{ background: "rgba(255, 67, 101, 0.3)," }}
            size="small"
            aria-label="a dense table"
            width="80%"
          >
            <TableBody>
              {[
                {
                  label: "NAME",
                  text: "UNIVERSAL GOD COIN",
                },
                {
                  label: "SYMBOL",
                  text: "  GOD",
                },
                {
                  label: "LAUNCH DATE",
                  text: "  August 2022",
                },
                {
                  label: "NETWORK",
                  text: "Binance Smart Chain",
                }
              ].map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell
                    align="left"
                    sx={{
                      paddingLeft: "0px",
                      width: "50%",
                      borderBottom: "1px solid #C03156",
                    }}
                    borderBottom="1px solid #C03156"
                  >
                    <Typography
                      fontSize={{ xs: "14px", md: "18px" }}
                      color="white"
                    >
                      {" "}
                      {row.label}{" "}
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ borderBottom: "1px solid #C03156" }}
                  >
                    <Typography
                      fontSize={{ xs: "14px", md: "18px" }}
                      color="white"
                    >
                      {" "}
                      {row.text}{" "}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
