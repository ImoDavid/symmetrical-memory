import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HERO from "../../assets/banner.webp";
import { colors } from "../../styles/globals";
import {
  Banner,
  GalleryHeader,
  GalleryImages,
  Investments,
  Testimonials,
} from "../../components/home-page";
import CallToAction from "../../components/home-page/callToAction";

const Homepage = () => {
  return (
    <>
      <Box height={["40vh", "55vh"]}>
        <Box
          component={"img"}
          src={HERO}
          height={"100%"}
          width={"100%"}
          sx={{ objectFit: "cover" }}
        />
      </Box>
      <Banner backgroundColor={colors.BROWN}/>
      <GalleryHeader />
      <GalleryImages />
      <Testimonials />
      <Investments />
      <CallToAction />
      <Banner backgroundColor={colors.GREY}/>
    </>
  );
};

export default Homepage;
