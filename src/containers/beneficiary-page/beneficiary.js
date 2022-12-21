import React from "react";

import { Stack, Box, Container, styled, Typography } from "@mui/material";
import { colors } from "../../styles/globals";
import { BeneficiaryGallery } from "../../components/beneficiary-page";

const StyledBox = styled(Box)({
  background: `url(https://pchofficials.com/wp-content/uploads/2021/03/2119297840.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
});



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
        <BeneficiaryGallery />
      </Box>
    </>
  );
};

export default Beneficiary;
