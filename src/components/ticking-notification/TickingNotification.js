import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { colors } from "../../styles/globals";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade } from "swiper";

const StyledTickingNotificationContainer = styled(Box)({
  position: "fixed",
  bottom: "3%",
  left: "15px",
  width: "400px",
  height: "100px",
  zIndex: "300",
});

const StyledSlider = styled(Box)({
  display: "flex",
  width: "100%",
  height: "100%",
});

const TickingNotification = ({ data }) => {
  const filtered_data = data.filter((x) => x.image !== null);
  return (
    <StyledTickingNotificationContainer>
      <Swiper
        slidesPerView={1}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={2000}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          {filtered_data.map((item, index) => (
            <StyledSlider key={index}>
              <Typography
                variant="h6"
                sx={{
                  color: colors.BLACK,
                }}
                fontWeight={700}
                fontSize={16}
                mb={2}
                ml={2}
                mr={2}
                mt={2}
                textAlign={"center"}
                lineHeight={1.5}
              >
                `{item.first_name}
                {item.last_name} just won {item.amount}`
              </Typography>
            </StyledSlider>
          ))}
        </SwiperSlide>
      </Swiper>
    </StyledTickingNotificationContainer>
  );
};

export default TickingNotification;
