import React from "react";
import {Box, Avatar, styled, Typography, Stack} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { colors } from "../../styles/globals";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade } from "swiper";
import formatCurrency from "../../utils/formatCurrency";

const StyledTickingNotificationContainer = styled(Box)({
  position: "fixed",
  bottom: "3%",
  left: "10px",
  height: "100px",
  zIndex: "1000",

    '@media screen and (max-width: 1200px)': {
     left: "4px",
        bottom: '1%'
    }
});

const StyledSlider = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
});
const StyledBox = styled(Box)({
  padding: "1rem",
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
    borderTopRightRadius: '22px',
    borderBottomRightRadius: '0px',
    clipPath: `polygon(75% 0%, 90% 52%, 75% 100%, 0% 100%, 4% 53%, 0% 0%)`,
    width: "100%",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
});

const TickingNotification = ({ data }) => {
  const filtered_data = data.filter((x) => x.image !== null);
  return (
    <StyledTickingNotificationContainer width={["310px", "400px"]}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        // effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Autoplay]}
      >
        {filtered_data.map((item, index) => (
          <SwiperSlide key={index}>
            <StyledSlider>
              <Box mr padding={1.3} borderRadius={'50%'} bgcolor={colors.WHITE} boxShadow={2}>
                <Avatar
                  src={item.image}
                  alt={"testimonial"}
                  sx={{ width: 56, height: 56}}
                />
              </Box>
              <StyledBox bgcolor={colors.WHITE} boxShadow={3}>
                  <Box width={'80%'} display="flex" alignItems="center" justifyContent="space-between">
                      <Typography
                          color={colors.BLACK}
                          fontWeight={600}
                          textAlign={"left"}
                          textTransform={'capitalize'}
                          variant={'body1'}
                          component={'span'}
                          fontSize={[12, 14, 14]}
                          display={'inline-block'}
                      >
                          {item.first_name + " " + item.last_name}{" "}
                          <Typography
                            color={'purple'}
                              fontSize={14}
                              textAlign={"left"}
                              variant={'body1'}
                              component={'span'}
                              display={'inline'}
                            fontWeight={600}
                            textTransform={'none'}
                          >received winning of {formatCurrency(item.amount)}
                          </Typography>
                      </Typography>
                  </Box>
              </StyledBox>
            </StyledSlider>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledTickingNotificationContainer>
  );
};

export default TickingNotification;
