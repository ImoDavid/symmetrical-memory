import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import {Helmet} from "react-helmet";
import HERO from "../../assets/banner.webp";
import { colors } from "../../styles/globals";
import {
  Banner,
  GalleryHeader,
  GalleryImages,
  Investments,
  Testimonials,
  CallToAction,
} from "../../components/home-page";

const Homepage = () => {
  const [featuredWinners, setfeaturedWinners] = useState([]);

  useEffect(() => {
    const GetFeaturedWinners = async () => {
      const response = await axios.get(
        `https://raw.pchofficials.com/api/get-featured-winners`
      );
      
       setfeaturedWinners(response.data.featured_winners);
    };
    GetFeaturedWinners();
  }, []);
  return (
    <>
        <Helmet>
            <title>Home | Pch Officials</title>
        </Helmet>
      <Box height={["40vh", "55vh"]}>
        <Box
          component={"img"}
          src={HERO}
          height={"100%"}
          width={"100%"}
          sx={{ objectFit: "cover" }}
        />
      </Box>
      <Banner backgroundColor={colors.BROWN} />
      <GalleryHeader />
      <GalleryImages data={featuredWinners} />
      <Testimonials />
      <Investments />
      <CallToAction
        title={"OUR WINNERS GALLERY"}
        label={"Enter Email"}
        backgroundColor={colors.SECONDARY}
        buttonColor={colors.BLACK}
        buttonColorHover={colors.ORANGE}
        buttonText={`SUBMIT`}
      />
      <Banner backgroundColor={colors.GREY} />
    </>
  );
};

export default Homepage;
