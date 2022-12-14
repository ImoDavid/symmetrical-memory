import React from 'react';
import {Avatar, Box, Stack, Typography} from '@mui/material'
import {Swiper, SwiperSlide} from 'swiper/react';
import {colors} from "../../styles/globals";
import {Headline} from "../typography";
import 'swiper/css';
import "swiper/css/pagination";
import './swiper.css'

import {Pagination, Autoplay, Navigation} from "swiper";

const data = [
    {
        quote: 'I JUST WANTED TO SAY AWESOME! I NEVER KNEW SUCH A SERVICE EXISTED UNTIL I FOUND YOUR SITE. FIRST CLASS SERVICE !',
        author: 'paula Sullivan',
        img: 'https://res.cloudinary.com/doexbijh7/images/f_webp,q_auto/v1616105247/9/9.jpg?_i=AA'
    },
    {
        quote: 'I\'VE TRYING TO WON THIS MONEY FOR SEVERAL YEARS AND REALLY APPREIATE THIS SITE. ALL OF MY WINS DELIVER TO MY DOORSTEP. THANKS TO DELIVERY TEAM AT THE PCH FUNDS',
        author: 'Niel Kroll',
        img: 'https://res.cloudinary.com/doexbijh7/image/upload/c_scale,w_75,h_75,dpr_2/f_webp,q_auto/v1616105304/reward-1-75x75-1.jpg?_i=AA'
    },
    {
        quote: 'I JUST WANT TO THANK YOU! I CANNOT SAY ENOUGH GOOD THINGS ABOUT PCH . I APPRECIATE YOUR REWARD. WHOOOOOOOOOOOOOOOOOOOOOOOOOOOOO I WON $1 MILLIONS I LOVE THE PCH',
        author: 'Rosemary Cella',
        img: 'https://res.cloudinary.com/doexbijh7/image/upload/c_scale,w_75,h_75,dpr_2/f_webp,q_auto/v1616105303/Million-1-75x75-1.png?_i=AA'
    },
    {
        quote: 'I JUST WANTED TO SAY AWESOME! I NEVER KNEW SUCH A SERVICE EXISTED UNTIL I FOUND YOUR SITE. FIRST CLASS SERVICE !',
        author: 'Joseph Scherer',
        img: 'https://res.cloudinary.com/doexbijh7/image/upload/c_scale,w_75,h_75,dpr_2/f_webp,q_auto/v1616105303/rewards-3-75x75-1.jpg?_i=AA'
    },
]

const Testimonials = () => {
    return (
        <Box paddingY={10} bgcolor={colors.SECONDARY}>
            <Headline title={'winners testimonials'} textColor={colors.WHITE}/>
            <Box marginTop={5} width={['95%', '70%']} mx={'auto'}>
                <Swiper
                    slidesPerView={1}
                    pagination={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {data.map((x, index) => (
                        <SwiperSlide key={index}>
                            <Box>
                                <Typography variant={'body1'} marginBottom={4} display={'inline-block'}
                                            color={colors.WHITE} fontWeight={700} letterSpacing={2}
                                            fontSize={['.7rem', '1.4rem']} lineHeight={1.9}
                                            component={'q'}>{x.quote}</Typography>

                                <Stack alignItems={'center'} justifyContent={'center'}>
                                    <Avatar src={x.img} alt={'testimonial'} sx={{width: 56, height: 56, mb: 1}}/>
                                    <Typography textTransform={'capitalize'} fontSize={['.7rem', '1rem']} fontWeight={600}
                                                color={colors.WHITE}>{x.author}</Typography>
                                </Stack>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default Testimonials;
