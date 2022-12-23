import React from "react";

import { Stack, Box, Container, styled, Typography } from "@mui/material";
import { colors } from "../../styles/globals";
import { BeneficiaryGallery } from "../../components/beneficiary-page";

const StyledBox = styled(Box)({
  background: `url(https://pchofficials.com/wp-content/uploads/2021/03/2119297840.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
});

const data = [
  {
    img: "https://images.unsplash.com/photo-1670995985756-0707f0d3b006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1665159465429-575f5e08eff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1669384056947-b6497936c8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1670979313867-1ca5b1657b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1670974893112-f0b884b328d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1670995985756-0707f0d3b006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1665686374221-1901faa9f3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1665159465429-575f5e08eff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1669384056947-b6497936c8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1670979313867-1ca5b1657b35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  {
    img: "https://images.unsplash.com/photo-1670974893112-f0b884b328d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "imoh peter",
  },
  
];


const Beneficiary = () => {
  return (
    <>
      <StyledBox height={["40vh", "55vh"]}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            variant="h4"
            color={colors.WHITE}
            fontWeight={700}
            letterSpacing={".3rem"}
            textAlign={"center"}
            verticalAlign={"middle"}
            lineHeight={["40vh", "55vh"]}
          >
            BENEFICIARIES
          </Typography>
        </Stack>
      </StyledBox>
      <Box margin={"0 auto"}>
        <BeneficiaryGallery data={data} bgColor={colors.WHITE}/>
      </Box>
    </>
  );
};

export default Beneficiary;
