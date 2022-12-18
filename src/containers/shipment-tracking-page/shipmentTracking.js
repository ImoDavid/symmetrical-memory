import React from 'react';

import { Box, Container, styled, Typography } from '@mui/material';
import { colors } from '../../styles/globals';
import { CallToAction } from '../../components/home-page';

const StyledBox = styled(Box)({
  background: `url(https://pchofficials.com/wp-content/uploads/2021/04/pch-van.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
});

const ShipmentTracking = () => {
  return (
    <>
      <StyledBox height={['40vh', '55vh']} />;
      <Box paddingY={6}>
        <CallToAction
          title={'Track your Shipment'}
          label={'Enter Tracking No'}
          backgroundColor={colors.WHITE}
          buttonColor={colors.BLACK}
          buttonColorHover={colors.ORANGE}
          buttonText={'TRACK RESULT'}
        />
      </Box>
    </>
  );
};

export default ShipmentTracking;
