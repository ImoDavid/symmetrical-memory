import React from "react";
import { NavLink } from "react-router-dom";
import { Box, styled, Stack, Typography,Link, Divider } from "@mui/material";
import { IoChevronForward, IoHome, IoMail } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { colors } from "../../styles/globals";
import { Headline } from "../typography";
import { navLinks } from "../navbar/Navbar";

const StyledFooterBox = styled(Box)({
    width: ["33.333%", "100%"],
    paddingRight: ["0rem", "2rem"],
    marginBottom: ["0", "2rem"],
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

const StyledLink = styled(NavLink)({
    textDecoration: "none",
    color: colors.FOOTER_TEXT,
    '&:hover':{
        color:colors.ORANGE
    }
});
const footerLinks = navLinks.slice(0, navLinks.length - 1);

const Footer = () => {
    return (
        <>
            <Box bgcolor={colors.BLACK} padding={[3, 7]}>
                <Stack direction={["column", "row"]}>
                    <StyledFooterBox>
                        <Headline
                            title={"About us"}
                            width={"40%"}
                            textColor={colors.WHITE}
                            fontSize={["1rem", "1.2rem"]}
                            alignItems={"flex-start"}
                            textAlign={"left"}
                        />
                        <Typography
                            fontSize={"0.8rem"}
                            fontWeight={500}
                            color={colors.NAV_TEXT}
                            lineHeight={2}
                            letterSpacing={1.2}
                        >
                            Publishers Clearing House is a leading direct-to-consumer company
                            offering a unique blend of curated multi-channel shopping and
                            free-to-play, chance to win digital-more at the about us page.
                        </Typography>
                    </StyledFooterBox>
                    <StyledFooterBox>
                        <Headline
                            title={"Main Menu"}
                            width={"40%"}
                            textColor={colors.WHITE}
                            fontSize={["1rem", "1.2rem"]}
                            alignItems={"flex-start"}
                        />
                        {footerLinks.map((ele) => (
                            <StyledLinkBox key={ele.url}>
                                <StyledLink
                                    to={ele.url}
                                    underline="none"
                                    color={colors.FOOTER_TEXT}
                                >
                                    {
                                        <Typography variant="span" color={colors.ORANGE} mr={2}>
                                            <IoChevronForward />
                                        </Typography>
                                    }
                                    {ele.page}
                                </StyledLink>
                            </StyledLinkBox>
                        ))}
                    </StyledFooterBox>
                    <StyledFooterBox>
                        <Headline
                            title={"Contact Info"}
                            width={"40%"}
                            textColor={colors.WHITE}
                            fontSize={["1rem", "1.2rem"]}
                            alignItems={"flex-start"}
                        />
                        <StyledLinkBox>
                            <StyledLink href="/" underline="none" color={colors.FOOTER_TEXT}>
                                {
                                    <Typography variant="span" color={colors.ORANGE} mr={2}>
                                        <IoHome />
                                    </Typography>
                                }
                                New York, United States
                            </StyledLink>
                        </StyledLinkBox>
                        <StyledLinkBox sx={{textTransform: 'none'}}>
                            <Link
                                href="mailto:support@pchofficials.net"
                                underline="none"
                                color={colors.FOOTER_TEXT}
                            >
                                {
                                    <Typography variant="span" color={colors.ORANGE} mr={2}>
                                        <IoMail />
                                    </Typography>
                                }
                                support@pchofficials.net
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
                    </StyledFooterBox>
                </Stack>
                <Divider color={colors.GREY} />
                <Typography color={colors.FOOTER_TEXT} fontSize="0.8rem">
                    &#169; Copyrights 2021. All rights reserved.
                </Typography>
            </Box>
        </>
    );
};

export default Footer;
