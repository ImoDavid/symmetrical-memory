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

const data = [
    {
        img: 'https://images.unsplash.com/photo-1670995985756-0707f0d3b006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        name: 'imoh peter'
    },
    {
        img: 'https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name: 'imoh peter'
    },
    {
        img: 'https://plus.unsplash.com/premium_photo-1665159465429-575f5e08eff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name: 'imoh peter'
    },
    {
        img: 'https://images.unsplash.com/photo-1669384056947-b6497936c8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name: 'imoh peter'
    },
    {
        img: 'https://images.unsplash.com/photo-1670979313867-1ca5b1657b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name: 'imoh peter'
    },
    {
        img: 'https://images.unsplash.com/photo-1670974893112-f0b884b328d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        name: 'imoh peter'
    },

]

const GalleryImages = () => {
    return (
        <Box marginTop={[6, 5]} marginBottom={[6, 8]}>
            <Container maxWidth={'lg'}>
                <GridContainer>

                    {data.map((ele)=> (<StyledGridElements key={ele.img}>
                        <Box component={'img'} src={ele.img}
                             height={'100%'}
                             width={'100%'} sx={{objectFit: 'cover'}}
                        />
                        <StyledOverlay >
                           <Typography color={colors.ORANGE} textTransform={'uppercase'} fontSize={['1.2rem', '1.4rem']} fontWeight={700}> {ele.name}</Typography>
                        </StyledOverlay>
                    </StyledGridElements>))}
                </GridContainer>
            </Container>
        </Box>
    );
};

export default GalleryImages;
