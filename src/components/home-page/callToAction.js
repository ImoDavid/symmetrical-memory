import React from "react";
import { Box, Container, Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { colors } from "../../styles/globals";
import { Headline } from "../typography";

const CallToAction = () => {
  return (

    <Box
      paddingTop={[10, 10]}
      paddingBottom={[8, 8]}
      bgcolor={colors.SECONDARY}
    >
      <Container maxWidth={"lg"}>
        <Headline title={"OUR WINNERS GALLERY"} />
        <Stack
          direction={["column", "row"]}
          marginX={"auto"}
          marginY={["1rem", "3rem"]}
          width={["100%", "60%"]}
        >
          <Stack alignItems={"center"} justifyItems={"center"}>
            <TextField
              id="outlined-basic"
              label="Enter Email"
              variant="outlined"
              sx={{ width: ["20rem", "25rem"] }}
            />
          </Stack>
          <Box marginX={2} marginY={[1, 0]}>
            <Button
              sx={{
                backgroundColor: colors.ORANGE,
                height: "100%",
                width: ["99%", "10rem"],
              }}
              variant="contained"
            >
              SUBMIT
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default CallToAction;
