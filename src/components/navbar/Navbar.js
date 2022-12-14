import React from 'react';
import {Box, styled, Avatar, Stack, List, ListItem} from '@mui/material'
import {colors} from "../../styles/globals";
import LOGO from '../../assets/logo.jpg'

const navLinks = [
    {page: 'home', url: '/'},
    {page: 'about', url: '/'},
    {page: 'how to apply', url: '/'},
    {page: 'claim requirement', url: '/'},
    {page: 'shipment tracking', url: '/'},
    {page: 'beneficiary', url: '/'},
    {page: 'winners list', url: '/'},
    {page: 'contact', url: '/'},
]


const StyledContainer = styled(Box)({
backgroundColor: colors.PRIMARY,
    position: 'sticky',
    // width: '100%',
    top: 0,
    zIndex: 100
})

const Navbar = () => {
    return (
        <StyledContainer paddingY={'.5rem'}  paddingX={['1rem', '3rem']}>
          <Box bgcolor={colors.WHITE} width={['90%', '80%']} marginX={'auto'} padding={'1rem'} borderRadius={'50px'}>
              <Stack direction={'row'} alignItems={'center'} justifyContent={'flex-start'} paddingX={'3rem'}>
                  <Box width={['50%', '16.779%']} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                      <Avatar src={LOGO} alt={'logo'}  sx={{ width: 56, height: 56 }}/>
                  </Box>
                  <Box flex={1}>
                      hello
                  </Box>

              </Stack>
          </Box>
        </StyledContainer>
    );
};

export default Navbar;
