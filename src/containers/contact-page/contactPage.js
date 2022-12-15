import React from 'react';

import { Box, Stack, Container, styled, Typography } from '@mui/material';
import { colors } from '../../styles/globals';

const StyledBox = styled(Box)({
  background: `url(https://pchofficials.com/wp-content/uploads/2021/03/chen-mizrach-1NTOQHBRegA-unsplash-scaled.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: '-20%',
});

const ContactPage = () => {
  return (
    <>
      <StyledBox height={['40vh', '55vh']}>
        <Typography
          variant='h4'
          color={colors.WHITE}
          fontWeight={700}
          letterSpacing={'.3rem'}
          textAlign={'center'}
          verticalAlign={'middle'}
          lineHeight={['40vh', '55vh']}
        >
          Contact Us
        </Typography>
      </StyledBox>
    </>
  );
};

export default ContactPage;
