import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import {Helmet} from "react-helmet";
import { HowToApplyForm } from "../../components/form/";
import { colors } from "../../styles/globals";

const StyledBox = styled(Box)({
  background: `url(https://res.cloudinary.com/dywofwzdx/image/upload/v1672407754/movers_parallax_1_c1lfgf.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
});

const ClaimRequirement = () => {
  return (
    <>
      <Helmet>
        <title>Claim Requirement | Pch Officials</title>
      </Helmet>
      <StyledBox height={["40vh", "55vh"]} />;
      <Container maxWidth={"md"}>
        <Box paddingY={6}>
          <Typography
            variant={"h2"}
            fontSize={["1.4rem", "2rem"]}
            color={colors.TITLE}
            textTransform={"capitalise"}
            fontWeight={600}
            //   letterSpacing={'2px'}
            textAlign={"center"}
          >
            You have to fill the following delivery information in order to
            continue your winning and make your delivery
          </Typography>
        </Box>
        <Container maxWidth={"sm"}>
          <Box paddingX={1} paddingTop={['', 2]} paddingBottom={[5,8]}>
            <HowToApplyForm />{" "}
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default ClaimRequirement;
