import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';
import banner from '../assets/images/tall-stylish-shirtless-bodybuilder-dressed-sports-shorts-doing-exercise-bicep-with-barbell-standing-studio-isolated-dark-background.jpg'

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
   <img
    src={banner}
    alt="hero-banner"
    style={{
      width: '100%',
      maxWidth: '900px',
      height: '700px',
      position: 'absolute',
      right: '-90px',
      top: '-150px', // moved up by 100px
      zIndex: 0,
      opacity: 0.9,
      borderRadius: '20px',
    }}
/>

  </Box>
);

export default HeroBanner;