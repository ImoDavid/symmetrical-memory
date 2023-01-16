import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  styled,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Input, TextArea, FormSuccess } from "../commons";
import { colors } from "../../styles/globals";

const StyledLabel = styled(Typography)({
  color: colors.NAV_TEXT,
  fontWeight: "500",
  textTransform: "uppercase",
});
const StyledAsterisk = styled("span")({
  color: "red",
  display: "inline-block",
});

const StyledBox = styled(Box)({
  marginBottom: ["1rem", "1.4rem"],
});
const StyledButton = styled(Button)({
  backgroundColor: colors.BLACK,
  width: "100%",
  "&:hover": {
    backgroundColor: colors.ORANGE,
  },
});

const validate = Yup.object({
  firstname: Yup.string().min(1, "Item Name must contain at least a character"),
  surname: Yup.string().min(1, "Item Name must contain at least a character"),
  email: Yup.string().min(1, "Item Name must contain at least a character"),
  message: Yup.string().min(1, "Item Name must contain at least a character"),
});
const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <Box padding={1} backgroundColor={colors.TRANS_BLACK}>
      <Container maxwidth={"lg"}>
        <Formik
          initialValues={{
            firstname: "",
            surname: "",
            Email: "",
            mobileNumber: "",
          }}
          validationSchema={validate}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(async () => {
              const payload = {
                firstname: values.firstname,
                lastname: values.surname,
                Email: values.Email,
                message: values.message,
              };
              try {
                const response = await axios.post(
                  `https://raw.pchofficials.com/api/contact-form`,
                  payload
                );
                resetForm(true);
                setSubmitting(false);
                setFormSubmitted(true);
              } catch (err) {
                console.log(err);
              }
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <StyledBox>
                <StyledLabel>
                  {" "}
                  FULLNAME <StyledAsterisk>*</StyledAsterisk>
                </StyledLabel>
                <Stack
                  direction={["column", "row"]}
                  justifyContent={"space-between"}
                >
                  <Box marginRight={[0, 2]}>
                    <Input
                      name="firstname"
                      type="text"
                      placeholder="firstname"
                    />
                  </Box>
                  <Box>
                    <Input name="surname" type="text" placeholder="lastname" />
                  </Box>
                </Stack>
              </StyledBox>
              <StyledBox>
                <StyledLabel>
                  {" "}
                  e-mail <StyledAsterisk>*</StyledAsterisk>
                </StyledLabel>
                <Input name="Email" type="email" placeholder="Enter E-mail" />
              </StyledBox>
              <StyledBox>
                <StyledLabel>
                  {" "}
                  message <StyledAsterisk>*</StyledAsterisk>
                </StyledLabel>
                <TextArea
                  name="message"
                  type="text"
                  placeholder="Enter message"
                />
              </StyledBox>

              <StyledBox>
                <StyledButton
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Please Wait" : "SUBMIT"}
                </StyledButton>
              </StyledBox>
            </Form>
          )}
        </Formik>
        {formSubmitted && (
          <FormSuccess text="Thank you! we've received your message and we'll be in touch soon!" />
        )}
      </Container>
    </Box>
  );
};

export default ContactForm;
