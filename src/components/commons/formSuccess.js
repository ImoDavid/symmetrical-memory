import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { colors } from "../../styles/globals";

const message =
  " Thank you! we've received your submission and we'll be in touch soon!";
  
const formSuccess = ({ text = message }) => {
  return (
    <>
      <Container maxWidth={"lg"}>
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"center"}
          sx={{
            border: "2px solid grey",
            backgroundColor: "#A4F9B5",
            color: colors.NAV_TEXT,
          }}
        >
          <Box m>
            <AiOutlineCheckCircle size={"3rem"} />
          </Box>
          <Typography fontSize="0.8rem">{text}</Typography>
        </Stack>
      </Container>
    </>
  );
};

export default formSuccess;
