import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
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
  height: "10rem",
  width: "100%",
  backgroundColor: colors.WHITE,
  top: "4.9rem",
  left: 0,
});

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <StyledContainer paddingY={".5rem"} paddingX={["1rem", "3rem"]}>
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
          justifyContent={["space-between", "flex-start"]}
          paddingX={["1rem", "3rem"]}
          position={"relatve"}
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
              sx={{ width: [30, 56], height: [30, 56] }}
            />
          </Box>
          <Box>
            <Box display={["none", "block"]}>
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
            >
              <RxHamburgerMenu />
            </Box>
            {navbarOpen && (
              <StyledMobileContainer>
                <Stack direction={"column"}>
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
              </StyledMobileContainer>
            )}
          </Box>
        </Stack>
      </Box>
    </StyledContainer>
  );
};

export default Navbar;
