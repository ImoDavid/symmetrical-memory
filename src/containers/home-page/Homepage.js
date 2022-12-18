import React from "react";
import { Box, } from "@mui/material";
import HERO from "../../assets/banner.webp";
import { colors } from "../../styles/globals";
import { IoChevronForward } from "react-icons/io5";
import {
  Banner,
  GalleryHeader,
  GalleryImages,
  Investments,
  Testimonials,
  CallToAction,
} from '../../components/home-page';

const Homepage = () => {
  return (
    <>
      <Box height={['40vh', '55vh']}>
        <Box
          component={'img'}
          src={HERO}
          height={'100%'}
          width={'100%'}
          sx={{ objectFit: 'cover' }}
        />
      </Box>
      <Banner backgroundColor={colors.BROWN} />
      <GalleryHeader />
      <GalleryImages />
      <Testimonials />
      <Investments />
      <CallToAction
        title={'OUR WINNERS GALLERY'}
        label={'Enter Email'}
        backgroundColor={colors.SECONDARY}
        buttonColor={colors.BLACK}
         buttonColorHover={colors.ORANGE }
        buttonText={`SUBMIT`}
      />
      <Banner backgroundColor={colors.GREY} />
    </>
  );
};

export default Homepage;
