import React from 'react';
import {Box, Stack, Typography} from '@mui/material'
import {BsEnvelopeOpen} from 'react-icons/bs'
import HERO from '../../assets/banner.webp'
import {colors} from "../../styles/globals";
import {GalleryHeader, GalleryImages, Testimonials} from "../../components/home-page";

const Homepage = () => {
    return (
        <>
            <Box height={['40vh', '55vh']}>
                <Box component={'img'} src={HERO} height={'100%'} width={'100%'} sx={{objectFit: 'cover'}}/>
            </Box>
            <Box width={'100%'} bgcolor={colors.BROWN}>
                <Box width={'100%'} maxWidth={['90%', '60%']} marginX={'auto'} py={2}>
                    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
                        <BsEnvelopeOpen size={20} color={colors.WHITE}/>
                        <Typography ml={1} variant={'body1'} component={'span'} display={'inline-block'} fontWeight={500}
                                    color={colors.WHITE} fontSize={['1rem', '1.4rem']} textAlign={'center'}>
                            YOU STAND A CHANCE... Text only{" "}
                            <Typography variant={'body1'} component={'em'} fontWeight={600} color={colors.ORANGE}>+1(813)
                                291-0211</Typography>
                        </Typography>
                    </Stack>
                </Box>
            </Box>
            <GalleryHeader />
            <GalleryImages />
            <Testimonials />
        </>
    );
};

export default Homepage;
