import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { Box, useMediaQuery } from '@mui/material';

import timeBg from './../../img/timeimg.png';

export default function TimerCountDown({ time }) {
  const matches = useMediaQuery('(max-width:700px)');

  // let interval = useRef();
  const [countTime, setCountDateTime] = useState({
    time_days: 0,
    time_Hours: 0,
    time_Minusts: 0,
    time_seconds: 0,
  });
  const startTime = async () => {
    let until = moment.unix(time).format('x');
    let interval = setInterval(() => {
      let now = moment().format('x');
      const distance = +until - +now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minuts = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setCountDateTime({
          ...countTime,
          time_days: days,
          time_Hours: hours,
          time_Minusts: minuts,
          time_seconds: seconds,
        });
      }
    }, 1000);
  };
  useEffect(() => {
    startTime();
  }, [time]);
  return (
    <>
      <Box mt={3} display="flex" alignItems="center" justifyContent="space-evenly">
        <Box mr={1} display="flex" flexDirection="column" alignItems="center">
          <Box
            sx={{
              backgroundImage: `url(${timeBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
            width={matches ? '35px' : '181px'}
            height={matches ? '35px' : '191px'}
            fontSize={matches ? '20px' : '70px'}
            fontWeight="700"
            textAlign="center"
            mb={1}
          >
            {countTime.time_days}
          </Box>
          <Box
            width={matches ? '35px' : '60px'}
            color="#a5a4a5"
            fontSize={matches ? '10px' : '14px'}
            fontWeight="400"
            textAlign="center"
          >
            Days
          </Box>
        </Box>
        <Box mr={1} display="flex" flexDirection="column" alignItems="center">
          <Box
            sx={{
              backgroundImage: `url(${timeBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
            width={matches ? '35px' : '181px'}
            height={matches ? '35px' : '191px'}
            fontSize={matches ? '20px' : '70px'}
            fontWeight="700"
            textAlign="center"
            mb={1}
          >
            {countTime.time_Hours}
          </Box>
          <Box
            width={matches ? '35px' : '60px'}
            color="#a5a4a5"
            fontSize={matches ? '10px' : '14px'}
            fontWeight="400"
            textAlign="center"
          >
            Hours
          </Box>
        </Box>
        <Box mr={1} display="flex" flexDirection="column" alignItems="center">
          <Box
            sx={{
              backgroundImage: `url(${timeBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
            width={matches ? '35px' : '181px'}
            height={matches ? '35px' : '191px'}
            fontSize={matches ? '20px' : '70px'}
            fontWeight="700"
            textAlign="center"
            mb={1}
          >
            {countTime.time_Minusts}
          </Box>
          <Box
            width={matches ? '35px' : '60px'}
            color="#a5a4a5"
            fontSize={matches ? '10px' : '14px'}
            fontWeight="400"
            textAlign="center"
          >
            Minutes
          </Box>
        </Box>
        <Box mr={1} display="flex" flexDirection="column" alignItems="center">
          <Box
            sx={{
              backgroundImage: `url(${timeBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
            width={matches ? '35px' : '181px'}
            height={matches ? '35px' : '191px'}
            fontSize={matches ? '20px' : '70px'}
            fontWeight="700"
            textAlign="center"
            mb={1}
          >
            {countTime.time_seconds}
          </Box>
          <Box
            width={matches ? '35px' : '60px'}
            color="#a5a4a5"
            fontSize={matches ? '10px' : '14px'}
            fontWeight="400"
            textAlign="center"
          >
            Seconds
          </Box>
        </Box>
      </Box>
    </>
  );
}