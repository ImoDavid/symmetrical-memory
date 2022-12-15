import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { colors } from "../../styles/globals";
import { Headline } from "../typography";

const Investments = () => {
  return (
    <Box paddingTop={[10, 8]} paddingBottom={[8, 6]}>
      <Container maxWidth={"lg"}>
        <Stack
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Headline title={"PCH INVESTMENT AREAS"} />
          <Box width={["100%", "60%"]}>
            <Typography
              textAlign={"center"}
              lineHeight={2}
              color={colors.NAV_TEXT}
            >
              PCH continues to invest in innovative products and services that
              provide value to our consumers and partners. From digital
              entertainment to new marketing technologies, our platform is
              growing through acquisition, investments and strategic
              partnerships.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Investments;
