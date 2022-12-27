import React, { useState, useEffect } from "react";
import {Helmet} from "react-helmet";
import axios from "axios";
import { Stack, Box, styled, Typography } from "@mui/material";
import { colors } from "../../styles/globals";
import { BeneficiaryGallery } from "../../components/beneficiary-page";

const StyledBox = styled(Box)({
  background: `url(https://res.cloudinary.com/dywofwzdx/image/upload/v1671989092/2119297840_wncfax.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
});

const Beneficiary = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    const GetBeneficiaries = async () => {
      const response = await axios.get(
        `https://raw.pchofficials.com/api/get-beneficiary`
      );
      setBeneficiaries(response.data.beneficiary);
    };
    GetBeneficiaries();
  }, []);
  return (
    <>
      <Helmet>
        <title>Beneficiary | Pch Officials</title>
      </Helmet>
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
            lineHeight={["40vh", "55vh"]}
            sx={{verticalAlign: 'middle'}}
          >
            BENEFICIARIES
          </Typography>
        </Stack>
      </StyledBox>
      <Box margin={"0 auto"}>
        <BeneficiaryGallery data={beneficiaries} bgColor={colors.WHITE} />
      </Box>
    </>
  );
};

export default Beneficiary;
