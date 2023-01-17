import React from "react";
import { Helmet } from "react-helmet";
import { Box, Container, styled, Typography, } from "@mui/material";
import { colors } from "../../styles/globals";
import { HowToApplyForm } from "../../components/form/";

const StyledBox = styled(Box)({
  background: `url(https://res.cloudinary.com/doexbijh7/images/v1620999167/how-to-apply/how-to-apply.webp?_i=AA.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
});

const HowToApply = () => {
  return (
    <>
      <Helmet>
        <title>How to Apply | Pch Officials</title>
      </Helmet>
      <StyledBox height={["40vh", "55vh"]} />;
      <Box paddingY={6}>
        <Container maxWidth={"md"}>
          <Box paddingY={6}>
            <Typography
              variant={"h2"}
              fontSize={["1.4rem", "2rem"]}
              color={colors.TITLE}
              textTransform={"capitalise"}
              fontWeight={600}
              letterSpacing={"2px"}
              textAlign={"center"}
            >
              Fill Out the Delivery Form
            </Typography>
          </Box>
          <Container maxWidth={"sm"}>
            <Box paddingX={1}>
              <HowToApplyForm />{" "}
              <Typography variant="body2" color={colors.NAV_TEXT} my={8}>
                <Box component="span" color="red">NOTE: </Box>We advise you to abide with
                the Terms and Conditions so that we can proceed.
              </Typography>
            </Box>
          </Container>
        </Container>
      </Box>
    </>
  );
};

export default HowToApply;
