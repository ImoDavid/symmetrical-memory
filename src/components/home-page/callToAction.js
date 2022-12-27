import React from "react";
import {Box, Button, Container, Stack} from "@mui/material";
import TextField from "@mui/material/TextField";
import {Headline} from "../typography";

const CallToAction = ({
                          title,
                          label,
                          backgroundColor,
                          buttonColor,
                          buttonText,
                          buttonColorHover,
                          onClick,
                          value,
                          onChange,
                      }) => {
    return (
        <Box paddingTop={[10, 10]} paddingBottom={[8, 8]} bgcolor={backgroundColor}>
            <Container maxWidth={"lg"}>
                <Headline title={title}/>
                    <Stack
                        direction={["column", "row"]}
                        marginX={"auto"}
                        marginY={["1rem", "3rem"]}
                        width={["100%", "60%"]}
                    >
                        <TextField
                            id="outlined-basic"
                            label={label}
                            variant="outlined"
                            onChange={onChange}
                            value={value}
                            name={'tracking'}
                            autoComplete={'off'}
                            sx={{width: ["100%", "25rem"], flex: 1}}/>
                        <Box marginLeft={[0, 2]} marginY={[1, 0]}>
                            <Button
                                sx={{
                                    backgroundColor: buttonColor,
                                    height: "100%",
                                    width: ["100%", "10rem"],
                                    "&:hover": {
                                        backgroundColor: buttonColorHover,
                                    },
                                }}

                                variant="contained"
                                onClick={onClick}
                                type={'submit'}
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
