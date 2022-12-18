import React from "react";
import { Box, Container, Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { colors } from "../../styles/globals";
import { Headline } from "../typography";

const CallToAction = ({
  title,
  label,
  backgroundColor,
  buttonColor,
  buttonText,
  buttonColorHover,
}) => {
  return (
    <Box paddingTop={[10, 10]} paddingBottom={[8, 8]} bgcolor={backgroundColor}>
      <Container maxWidth={"lg"}>
        <Headline title={title} />
        <Stack
          direction={["column", "row"]}
          marginX={"auto"}
          marginY={["1rem", "3rem"]}
          width={["100%", "60%"]}
        >
          <Stack alignItems={"center"} justifyItems={"center"}>
            <TextField
              id="outlined-basic"
              label={label}
              variant="outlined"
              sx={{ width: ["21rem", "25rem"] }}
            />
          </Stack>
          <Box marginX={2} marginY={[1, 0]}>
            <Button
              sx={{
                backgroundColor: buttonColor,
                height: "100%",
                width: ["99%", "10rem"],
                "&:hover": {
                  backgroundColor: buttonColorHover,
                },
              }}
              variant="contained"
            >
              {buttonText}
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default CallToAction;
