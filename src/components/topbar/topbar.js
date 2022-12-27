import React from 'react';
import { NavLink } from "react-router-dom";
import { colors } from '../../styles/globals';
import { Box, styled, Stack, Typography,Link, Divider } from "@mui/material";
import { IoChevronForward, IoHome, IoMail } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";

const StyledLinkBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    textTransform: "capitalize",
    fontSize: "0.9rem",
    fontWeight: "500",
    // marginBottom: "0.7rem",
  });
  
  const StyledLink = styled(NavLink)({
    textDecoration: "none",
    color: colors.NAV_TEXT,
    '&:hover':{
      color:colors.ORANGE
    }
  });

const Topbar = () => {
    return ( 
        <Box width={"100%"} bgcolor={colors.WHITE}>
        <Box width={"100%"} maxWidth={["90%", "60%"]} marginX={"auto"} py={1}>
          <Stack
            direction={["column","row"]}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
           <StyledLinkBox display={["none","block"]}>
              <StyledLink href="/" underline="none" >
                {
                  <Typography variant="span" color={colors.ORANGE} mr={1} >
                    <IoHome />
                  </Typography>
                }
                New York, United States
              </StyledLink>
            </StyledLinkBox>
            <StyledLinkBox>
              <Link
                href="mailto:support@pchofficials.com"
                underline="none"
                color={colors.NAV_TEXT}
              >
                {
                  <Typography variant="span" color={colors.ORANGE} mr={1} >
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
                color={colors.NAV_TEXT}
              >
                {
                  <Typography variant="span" color={colors.ORANGE} mr={1} >
                    <BsTelephoneFill />
                  </Typography>
                }
                +1(813) 291-0211
              </Link>
            </StyledLinkBox>
          </Stack>
        </Box>
      </Box> 
     );
}
 
export default Topbar;