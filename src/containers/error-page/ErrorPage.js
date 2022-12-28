import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Box, Container, styled, Typography, Button } from "@mui/material";
import { colors } from "../../styles/globals";

const StyledButton = styled(Button)({
  backgroundColor: colors.PRIMARY,
  marginTop: "1rem",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: colors.BLACK,
  },
});

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Error | Pch Officials</title>
      </Helmet>
      <Container maxWidth={"lg"}>
        <Box
          paddingY={9}
          paddingX={[2, 0]}
          textAlign={"center"}
          height={"50vh"}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            fontSize={["120px", "150px"]}
            fontWeight={900}
            color={colors.PRIMARY}
          >
            404 !
          </Typography>
          <Typography
            variant="h6"
            textTransform={"uppercase"}
            fontWeight={"700"}
          >
            sorry, page not found
          </Typography>
          <StyledButton variant="contained" href="/">
            back to Home
          </StyledButton>
        </Box>
      </Container>
    </>
  );
};

export default ErrorPage;
