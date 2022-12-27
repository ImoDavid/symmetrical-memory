import React from 'react';
import {Box, styled, Typography} from '@mui/material'
import {Swiper} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {Autoplay, EffectFade} from "swiper";

const StyledTickingNotificationContainer = styled(Box)({
    position: 'fixed',
    bottom: '3%',
    left: '15px',
    width: '435px',
    height: '150px',
    zIndex: '300'
})

const StyledSlider = styled(Box)({})

const TickingNotification = ({data}) => {
    const filtered_data = data.filter(x => x.image !== null)
    return (
        <StyledTickingNotificationContainer>
            <Swiper
                effect={"fade"}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                speed={2000}
                modules={[Autoplay, EffectFade]}
            >
                {
                    filtered_data.map((item, index) => (
                        <StyledSlider key={index}>
                            <Typography variant="h6" sx={{
                                color: '#000',
                            }}
                                        fontWeight={700}
                                        fontSize={16}
                                        mb={2}
                                        ml={2}
                                        mr={2}
                                        mt={2}
                                        textAlign={'center'}
                                        lineHeight={1.5}
                            >
                                {item.title}
                            </Typography>
                        </StyledSlider>
                    ))
                }
            </Swiper>
        </StyledTickingNotificationContainer>
    );
};

export default TickingNotification;
