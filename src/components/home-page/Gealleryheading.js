import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { colors } from "../../styles/globals";
import { Headline } from "../typography";

const GalleryHeader = () => {
  return (
    <Box paddingTop={[10, 8]} paddingBottom={[8, 6]}>
      <Container maxWidth={"lg"}>
       
          <Headline title={"our winners gallery"} />
          <Box width={["100%", "60%"]} marginX={"auto"}>
            <Typography
              textAlign={"center"}
              lineHeight={2}
              color={colors.NAV_TEXT}
            >
              The Publishers Clearing House is working to foster global monetary
              cooperation, secure financial stability, facilitate international
              trade, promote high employment and sustainable economic growth,
              and reduce poverty around the world
            </Typography>
          </Box>
        
      </Container>
    </Box>
  );
};

export default GalleryHeader;
