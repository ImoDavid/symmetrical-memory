import React from 'react';


import { Box, Container, styled, Typography } from '@mui/material';
import { colors } from '../../styles/globals';


const StyledBox = styled(Box)({
  background: `url(https://res.cloudinary.com/doexbijh7/images/v1635451723/images/images.webp?_i=AA)`,
  backgroundSize: 'cover',
  backgroundPosition: 'Top center',
});


const WinnersPage = () => {
    return (  
        <>
            <StyledBox height={['40vh', '55vh']} />;
            </>
    );
}
 
export default WinnersPage;