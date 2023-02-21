import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { colors } from "../../styles/globals";

const message =
  " Thank you! we've received your submission and we'll be in touch soon!";
   
const formSuccess = ({ text = message, bgcolor="#A4F9B5", error = false, color =colors.NAV_TEXT }) => {
  const Error = error
  return (
    <>
      <Container maxWidth={"lg"}>
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent={"center"}
          sx={{
            border: "2px solid grey",
            backgroundColor: bgcolor,
            color: color,
          }}
        >
          <Box m>
            {Error ? <BiError size={"3rem"} /> : <AiOutlineCheckCircle size={"3rem"} /> } 
          </Box>
          <Typography fontSize="0.8rem">{text}</Typography>
        </Stack>
      </Container>
    </>
  );
};

export default formSuccess;
