import React from 'react';
import { Box, styled, Stack, Container } from '@mui/material';
import { colors } from '../../styles/globals';
import { Headline } from '../typography';

const Footer = () => {
  return (
    <>
      <Box bgcolor={colors.BLACK} paddingY={7}>
        <Container maxWidth={'lg'}>
          <Stack direction={['column', 'row']}>
            <Box>
              <Headline
                title={'About us'}
                width={['30%', '105%']}
                textColor={colors.WHITE}
                fontSize={['1rem', '1.2rem']}
                alignItems={['flex-start', 'center']}
              />
            </Box>
            <Box>
              <Headline
                title={'Main Menu'}
                width={['30%', '105%']}
                textColor={colors.WHITE}
                fontSize={['1rem', '1.2rem']}
                alignItems={['flex-start', 'center']}
              />
            </Box>
            <Box>
              <Headline
                title={'Contact Info'}
                width={['30%', '105%']}
                textColor={colors.WHITE}
                fontSize={['1rem', '1.2rem']}
                alignItems={['flex-start', 'center']}
              />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
