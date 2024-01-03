import { Grid, TableHead, Typography } from "@mui/material";
import { Box } from "@mui/system"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import BG from './background.png';
import APX from './alogo.png';
import Tron from './tlogo.png';
import SPACECRAFT from './SPACECRAFT.png';
import SAPCECRAFT2 from './SAPCECRAFT2.png';
import SpaceStation from './SpaceStation.png';

export default () => {


    return <>
        <Box maxWidth='xl' margin='auto' sx={{ backgroundImage: `url(${BG})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', margin: 'auto', position: 'relative' }} paddingBottom={{ xs: '0px', md: '300px' }} >

            <Box sx={{ position: 'absolute', top: '-200px', right: 0, textAlign: 'right' }}><img src={SPACECRAFT} alt={SPACECRAFT} width="60%" /></Box>

            <Box width={{ xs: '85%', md: '60%' }} margin='0px auto 100px auto' pt={25} >
                <Typography fontSize={{ xs: '30px', md: '50px' }} color='white' mb={5}>PRESALE TOKEN PRICE</Typography>

                <TableContainer width="90%" sx={{ padding: '5% 2%', background: 'rgba(255, 67, 101, 0.1)', boxShadow: 'inset 0px 0px 25px #FF4365' }} >
                    <Table sx={{ background: 'rgba(255, 67, 101, 0.3),', backdropFilter: 'blur(10px)' }} size="small" aria-label="a dense table" width="80%">
                        <TableHead>
                            <TableRow >
                                <TableCell align="center" sx={{ borderBottom: '1px solid #FF4365' }}>
                                    <Typography fontSize={{ xs: '8px', sm: '12px', md: '14px' }} color='white'> OFFER </Typography>
                                </TableCell>
                                <TableCell align="left" sx={{ borderBottom: '1px solid #FF4365' }}>
                                    <Typography fontSize={{ xs: '8px', sm: '12px', md: '14px' }} color='white'> AMOUNT </Typography>
                                </TableCell>
                                <TableCell align="left" sx={{ borderBottom: '1px solid #FF4365' }}>
                                    <Typography fontSize={{ xs: '8px', sm: '12px', md: '14px' }} color='white'> PRICE </Typography>
                                </TableCell>
                                <TableCell align="center" sx={{ borderBottom: '1px solid #FF4365' }}>
                                    <Typography fontSize={{ xs: '8px', sm: '12px', md: '14px' }} color='white'> BUY WITH BONUS </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[{
                                offer: 'OFFER-1',
                                amount: ' 100,000',
                                price: ' 0.01',
                                bonus: '110,000 APX',
                            }, {
                                offer: 'OFFER-2',
                                amount: ' 1000,000',
                                price: ' 0.10',
                                bonus: ' 1,200,000  APX',
                            }, {
                                offer: 'OFFER-3',
                                amount: ' 10,000,000',
                                price: ' 1.00',
                                bonus: ' 13,000,000  APX',
                            }, {
                                offer: 'OFFER-4',
                                amount: ' 100,000,000',
                                price: ' 10',
                                bonus: ' 140,00,000  APX',
                            }, {
                                offer: 'OFFER-5',
                                amount: ' 1,000,000,000',
                                price: ' 100',
                                bonus: ' 1,500,000,000  APX',
                            },
                            ].map((row, indx) => (
                                <TableRow key={row.name} >
                                    <TableCell align="center" sx={{ borderBottom: '0px' }}>
                                        <Typography fontSize={{ xs: '8px', sm: '12px', md: '14px' }} color='white'> {row.offer} </Typography>
                                    </TableCell>
                                    <TableCell align="left" sx={{ borderBottom: '0px' }}>
                                        <Typography fontSize={{ xs: '8px', sm: '12px', md: '14px' }} color='white'> {row.amount} </Typography>
                                    </TableCell>
                                    <TableCell align="left" sx={{ borderBottom: '0px' }}>
                                        <Typography fontSize={{ xs: '8px', sm: '12px', md: '14px' }} color='white'> {row.price} </Typography>
                                    </TableCell>
                                    <TableCell align="center" sx={{ borderBottom: '0px' }}>
                                        <Typography fontSize={{ xs: '8px', sm: '12px', md: '14px' }} color='white'>
                                            BUY WITH{indx + 1}0% BONUS <br /> Get {row.bonus} </Typography>
                                    </TableCell> <br /><br /><br /><br />
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>




            <Box textAlign='left' width={{ xs: '90%', md: '70%' }} marginTop={{ xs: '-130px', md: '-170px' }} marginBottom={{ xs: '-30px', md: '-100px' }}><img src={SAPCECRAFT2} alt={SAPCECRAFT2} width="40%" /></Box>
            <Grid container justifyContent='center' alignItems='center' sx={{ background: 'rgba(255, 67, 101, 0.1)', boxShadow: 'inset 0px 0px 25px #FF4365', flexGrow: '1', textAlign: 'center' }} >
                <Grid item xs={8} sm={3}> <img src={APX} width="100%" /> </Grid>
                <Grid item xs={8} sm={2}> <center><Typography fontSize={{ xs: '25px', md: '40px' }} color='white'> BY </Typography></center> </Grid>
                <Grid item xs={8} sm={3} mt={2} mb={2}> <img src={Tron} width="70%" /> </Grid>
            </Grid>

            <Box textAlign='center' width={{ xs: '90%', md: '70%' }} marginTop={{ xs: '130px', md: '170px' }} marginBottom='-510px' marginRight='auto' marginLeft='auto' background='red'><img src={SpaceStation} alt={SpaceStation} width="70%" /></Box>

        </Box>


    </>
}
