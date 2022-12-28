import React, {useState} from "react";
import {Link as RRLink, NavLink} from "react-router-dom";
import {RxHamburgerMenu} from "react-icons/rx";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Box, Stack, styled} from "@mui/material";
import {colors} from "../../styles/globals";
import LOGO from "../../assets/logo.jpg";

const navLinks = [
    {page: "home", url: "/"},
    {page: "about", url: "/about"},
    {page: "how to apply", url: "/apply"},
    {page: "claim requirement", url: "/claim"},
    {page: "shipment tracking", url: "/shipment"},
    {page: "beneficiary", url: "/beneficiary"},
    {page: "winners list", url: "/winners"},
    {page: "contact", url: "/contact"},
];
export {navLinks};

const theme = createTheme({
    breakpoints: {
        values: {
            xxs: 0,
            xs: 300,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
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
    // marginBottom: ["0rem", "0.5rem"],
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
    height: "auto",
    width: "100%",
    backgroundColor: '#f3f3f3',
    top: "4rem",
    left: 0,
    padding: "1rem 0 ",
});

const MobileLink = styled(NavLink)({
    textDecoration: "none",
    color: colors.NAV_TEXT,
    marginBottom: "1rem",
    textTransform: "capitalize",
    fontWeight: 700,
    fontSize: '14px',

    '&:last-child': {
        marginBottom: 0,
    },
    "&:hover": {
        color: colors.ORANGE,
        textDecoration: "underline",
    }
})

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <StyledContainer paddingY={".5rem"} paddingX={["1rem", "0rem"]}>
                <Box
                    bgcolor={colors.WHITE}
                    width={["90%", "90%"]}
                    marginX={"auto"}
                    padding={['0', "1rem"]}
                    borderRadius={"50px"}
                >
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        paddingX={["1rem", "0rem"]}
                        position={"relative"}
                        sx={{
                            justifyContent: {
                                xs: "space-between",
                                sm: "space-between",
                                md: "space-between",
                                lg: "flex-start",
                                xl: "flex-start",
                            },
                        }}
                        width={'100%'}
                        maxWidth={["100%", "100%", "100%", "1200px"]}
                        marginX={'auto'}
                    >
                        <Box
                            width={["auto", "16.779%"]}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            flex={1}
                            ml={[0, '20px']}
                        >
                            <Box>
                                <RRLink to={'/'}>
                                    <Box
                                        component={'img'}
                                        src={LOGO}
                                        alt={"logo"}
                                        height={[30, 50]}
                                        width={[30, 50]}
                                    />
                                </RRLink>
                            </Box>
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
                                <RxHamburgerMenu/>
                            </Box>
                            {navbarOpen && (
                                <StyledMobileContainer boxShadow={2}>
                                    <Stack direction={"column"} alignItems={'center'} justifyContent={'center'}>
                                        {navLinks.map((ele) => (
                                                <MobileLink
                                                    to={ele.url}
                                                    key={ele.url}
                                                    underline="none"
                                                    color={colors.NAV_TEXT}
                                                    onClick={() => {
                                                        setNavbarOpen(!navbarOpen);
                                                    }}
                                                >
                                                    {ele.page}
                                                </MobileLink>
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
