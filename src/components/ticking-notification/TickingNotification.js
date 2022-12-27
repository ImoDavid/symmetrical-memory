import React from "react";
import { Box, Avatar, styled, Typography } from "@mui/material";
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

  height: "100px",
  zIndex: "1000",
});

const StyledSlider = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
});
const StyledBox = styled(Box)({
  borderRadius: "15px",
  padding: "1rem",
});

const TickingNotification = ({ data }) => {
  const filtered_data = data.filter((x) => x.image !== null);
  return (
    <StyledTickingNotificationContainer width={["320px", "400px"]}>
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
              <Box mr>
                <Avatar
                  src={item.image}
                  alt={"testimonial"}
                  sx={{ width: 56, height: 56, ml: 2 }}
                />
              </Box>
              <StyledBox bgcolor={colors.WHITE}>
                <Typography
                  sx={{
                    color: colors.BLACK,
                  }}
                  fontWeight={700}
                  fontSize={16}
                  lineHeight={1.5}
                  textAlign={"center"}
                >
                  {`${
                    item.first_name + " " + item.last_name
                  } received winning of $${item.amount} `}
                </Typography>
              </StyledBox>
            </StyledSlider>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledTickingNotificationContainer>
  );
};

export default TickingNotification;
