import React from 'react';
import {Box, Container, styled, Typography} from '@mui/material'
import {colors} from "../../styles/globals";

const GridContainer = styled(Box)({
    display: "grid",
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: "22px"
})

const StyledGridElements = styled(Box)({
    height: '350px',
    width: '100%',

    position: 'relative',

})

const StyledOverlay = styled(Box)({
    position: 'absolute',
    backgroundColor: 'rgba(70,70,70,0.64)',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    opacity: 0,
    transition: '0.3s ease-in',
    '&:hover': {
        opacity: 1,
        boxShadow: "-8px 2px 52px 8px rgba(0,0,0,0.10)"
    }
})



const GalleryImages = ({data}) => {
    return (
        <Box marginTop={[6, 5]} marginBottom={[6, 8]}>
            <Container maxWidth={'lg'}>
                <GridContainer>

                    {data.map((ele)=> (<StyledGridElements key={ele.img}>
                        <Box component={'img'} src={ele.image}
                             height={'100%'}
                             width={'100%'} sx={{objectFit: 'cover'}}
                        />
                        <StyledOverlay >
                           <Typography color={colors.ORANGE} textTransform={'uppercase'} fontSize={['1.2rem', '1.4rem']} fontWeight={700}> {ele.first_name}{" "}{ele.last_name}</Typography>
                        </StyledOverlay>
                    </StyledGridElements>))}
                </GridContainer>
            </Container>
        </Box>
    );
};

export default GalleryImages;
