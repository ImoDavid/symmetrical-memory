import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Stack, Container, styled, Typography, Link } from "@mui/material";
import { IoHome, IoMail } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { ContactForm } from "../../components/form/";
import { colors } from "../../styles/globals";

const StyledBox = styled(Box)({
  background: `url(https://pchofficials.com/wp-content/uploads/2021/03/chen-mizrach-1NTOQHBRegA-unsplash-scaled.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "-20%",
});

const StyledSection = styled(Box)({
  background: `linear-gradient(
    rgba(0, 0, 0, 0.65), 
    rgba(0, 0, 0, 0.65)
  ),url(https://pchofficials.com/wp-content/uploads/2021/03/miles-burke-idhx-MOCDSk-unsplash-scaled.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center center",
});
const StyledLinkBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
  textTransform: "capitalize",
  fontSize: "0.9rem",
  fontWeight: "300",
  marginBottom: "0.7rem",
});

const ContactPage = () => {
  return (
    <>
      <StyledBox height={["40vh", "55vh"]}>
        <Typography
          variant="h4"
          color={colors.WHITE}
          fontWeight={700}
          letterSpacing={".3rem"}
          textAlign={"center"}
          verticalalign={"middle"}
          lineHeight={["40vh", "55vh"]}
        >
          Contact Us
        </Typography>
      </StyledBox>
      <StyledSection minHeight={"80vh"}>
        <Container maxWidth={"md"}>
          <Stack direction={["column", "row"]} justifyContent={"space-between"}>
            <Box paddingx={1} marginY={2}>
              <ContactForm />{" "}
            </Box>
            <Box textAlign={["left", "right"]} marginY={2}>
              <Typography
                variant="h5"
                color={colors.WHITE}
                fontWeight={700}
                gutterBottom
              >
                Contact Us
              </Typography>
              <StyledLinkBox>
                <Link href="#" underline="none" color={colors.FOOTER_TEXT}>
                  {
                    <Typography variant="span" color={colors.ORANGE} mr={2}>
                      <IoHome />
                    </Typography>
                  }
                  New York, United States
                </Link>
              </StyledLinkBox>
              <StyledLinkBox>
                <Link
                  href="mailto:support@pchofficials.com"
                  underline="none"
                  color={colors.FOOTER_TEXT}
                >
                  {
                    <Typography variant="span" color={colors.ORANGE} mr={2}>
                      <IoMail />
                    </Typography>
                  }
                  support@pchofficials.com
                </Link>
              </StyledLinkBox>
              <StyledLinkBox>
                <Link
                  href="Tel:+1(813) 291-0211"
                  underline="none"
                  color={colors.FOOTER_TEXT}
                >
                  {
                    <Typography variant="span" color={colors.ORANGE} mr={2}>
                      <BsTelephoneFill />
                    </Typography>
                  }
                  +1(813) 291-0211
                </Link>
              </StyledLinkBox>
            </Box>
          </Stack>
        </Container>
      </StyledSection>
    </>
  );
};

export default ContactPage;
