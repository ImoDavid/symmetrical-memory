import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, styled, Avatar, Stack, Link, Typography } from "@mui/material";
import { colors } from "../../styles/globals";
import LOGO from "../../assets/logo.jpg";

const navLinks = [
  { page: "home", url: "/home" },
  { page: "about", url: "/about" },
  { page: "how to apply", url: "/apply" },
  { page: "claim requirement", url: "/claim" },
  { page: "shipment tracking", url: "/shipment" },
  { page: "beneficiary", url: "/beneficiary" },
  { page: "winners list", url: "/winners" },
  { page: "contact", url: "/contact" },
];
export { navLinks };

const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
});

const StyledContainer = styled(Box)({
  backgroundColor: colors.PRIMARY,
  position: "sticky",
  // width: '100%',
  top: 0,
  zIndex: 100,
});

const StyledNavLink = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "capitalize",
  fontWeight: "700",
  fontSize: ["1rem", "0.8rem"],
  cursor: "pointer",
  marginRight: "1.8rem",
  marginBottom: ["0rem", "0.5rem"],
});

const StyledLink = styled(NavLink)({
  textDecoration: "none",
  color: colors.NAV_TEXT,
  "&:hover": {
    color: colors.ORANGE,
  },
});

const StyledMobileContainer = styled(Box)({
  position: "absolute",
  height: "12rem",
  width: "100%",
  backgroundColor: colors.WHITE,
  top: "4.9rem",
  left: 0,
  padding: "1rem 0 ",
});

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer paddingY={".5rem"} paddingX={["1rem", "0rem"]}>
        <Box
          bgcolor={colors.WHITE}
          width={["90%", "80%"]}
          marginX={"auto"}
          padding={"1rem"}
          borderRadius={"50px"}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            paddingX={["1rem", "0rem"]}
            position={"relatve"}
            sx={{
              justifyContent: {
                xs: "space-between",
                sm: "space-between",
                md: "space-between",
                lg: "flex-start",
                xl: "flex-start",
              },
            }}
          >
            <Box
              width={["auto", "16.779%"]}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Avatar
                src={LOGO}
                alt={"logo"}
                sx={{ width: ["5rem", 20], height: ["5rem", 20] }}
              />
            </Box>
            <Box>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "none",
                    lg: "block",
                    xl: "block",
                  },
                }}
              >
                <Stack direction={"row"}>
                  {navLinks.map((ele) => (
                    <StyledNavLink key={ele.url}>
                      <StyledLink
                        to={ele.url}
                        underline="none"
                        color={colors.NAV_TEXT}
                      >
                        {ele.page}
                      </StyledLink>
                    </StyledNavLink>
                  ))}
                </Stack>
              </Box>
              <Box
                display={["block", "none"]}
                fontSize={"1.5rem"}
                onClick={() => {
                  setNavbarOpen(!navbarOpen);
                }}
                sx={{
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "block",
                    lg: "none",
                    xl: "none",
                  },
                }}
              >
                <RxHamburgerMenu />
              </Box>
              {navbarOpen && (
                <StyledMobileContainer>
                  <Stack direction={"column"}>
                    {navLinks.map((ele) => (
                      <StyledNavLink
                        key={ele.url}
                        onClick={() => {
                          setNavbarOpen(!navbarOpen);
                        }}
                      >
                        <StyledLink
                          to={ele.url}
                          underline="none"
                          color={colors.NAV_TEXT}
                        >
                          {ele.page}
                        </StyledLink>
                      </StyledNavLink>
                    ))}
                  </Stack>
                </StyledMobileContainer>
              )}
            </Box>
          </Stack>
        </Box>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default Navbar;
