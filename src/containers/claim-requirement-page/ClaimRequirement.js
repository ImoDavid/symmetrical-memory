import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import { HowToApplyForm } from "../../components/form/";
import { colors } from "../../styles/globals";

const StyledBox = styled(Box)({
  background: `url(https://pchofficials.com/wp-content/uploads/2022/01/Screenshot_20220107-084411_Gallery.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
});

const ClaimRequirement = () => {
  return (
    <>
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
            You have to fill the following delivery information in others to
            continue your winning and make your delivery
          </Typography>
        </Box>
        <Container maxWidth={"sm"}>
          <Box paddingX={1}>
            <HowToApplyForm />{" "}
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default ClaimRequirement;
