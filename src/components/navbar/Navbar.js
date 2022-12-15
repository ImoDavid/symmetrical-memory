import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, styled, Avatar, Stack, List, ListItem } from '@mui/material';
import { colors } from '../../styles/globals';
import LOGO from '../../assets/logo.jpg';

const navLinks = [
  { page: 'home', url: '/home' },
  { page: 'about', url: '/about' },
  { page: 'how to apply', url: '/apply' },
  { page: 'claim requirement', url: '/claim' },
  { page: 'shipment tracking', url: '/shipment' },
  { page: 'beneficiary', url: '/beneficiary' },
  { page: 'winners list', url: '/winners' },
  { page: 'contact', url: '/contact' },
];

const StyledContainer = styled(Box)({
  backgroundColor: colors.PRIMARY,
  position: 'sticky',
  // width: '100%',
  top: 0,
  zIndex: 100,
});
const StyledNavLink = styled(Box)({
  textDecoration: 'none',
  fontSize: '1.4rem',
    cursor: 'pointer',
   marginLeft:'125rem'
});

const Navbar = () => {
  return (
    <StyledContainer paddingY={'.5rem'} paddingX={['1rem', '3rem']}>
      <Box
        bgcolor={colors.WHITE}
        width={['90%', '80%']}
        marginX={'auto'}
        padding={'1rem'}
        borderRadius={'50px'}
      >
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'flex-start'}
          paddingX={'3rem'}
        >
          <Box
            width={['50%', '16.779%']}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Avatar src={LOGO} alt={'logo'} sx={{ width: 56, height: 56 }} />
          </Box>
          <Box flex={1}>
                      <Stack direction={'row'}>
                          
              <StyledNavLink>
                <NavLink to='/home'>Home</NavLink>
              </StyledNavLink>
              <StyledNavLink>
                <NavLink to='/about'>About</NavLink>
              </StyledNavLink>
              <StyledNavLink>
                <NavLink to='/apply'>How To Apply</NavLink>
              </StyledNavLink>
              <StyledNavLink>
                <NavLink to='/claim'>claim</NavLink>
              </StyledNavLink>
              <StyledNavLink>
                <NavLink to='/contact'>contact</NavLink>
              </StyledNavLink>
              <StyledNavLink>
                <NavLink to='/contact'>contact</NavLink>
              </StyledNavLink>
              <StyledNavLink>
                <NavLink to='/contact'>contact</NavLink>
              </StyledNavLink>
              <StyledNavLink>
                <NavLink to='/contact'>contact</NavLink>
              </StyledNavLink>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </StyledContainer>
  );
};

export default Navbar;
