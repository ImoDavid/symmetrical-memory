import React from "react";
import {
  Box,
  Container,
  styled,
  Typography,
  Button,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Input } from "../../components/commons";
import { colors } from "../../styles/globals";

const StyledLabel = styled(Typography)({
  color: colors.NAV_TEXT,
  fontWeight: "500",
  textTransform: "uppercase",
});
const StyledAsterisk = styled(Typography)({
  color: "red",
  display: "inline-block",
});
const StyledButton = styled(Button)({
  backgroundColor: colors.NAV_TEXT,
  "&:hover": {
    backgroundColor: colors.BLACK,
  },
});

const NewForm = ({}) => {
  const validate = Yup.object({
    name: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Item Name is Required"),
    description: Yup.string(),
    quatity: Yup.number(),
    category: Yup.string(),
  });
  return (
    <Container maxwidth={"md"}>
      <Formik
        initialValues={{
          name: "",
          description: "",
          quantity: 1,
          category: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            const payload = {
              title: values.name,
              des: values.description,
              isChecked: false,
              category: values.category,
              quantity: values.quantity.toString(),
            };
            resetForm(true);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, resetForm }) => (
          <Form>
            {/* {isSubmitting && <div>Loading...</div>} */}
            <Box m>
              <StyledLabel>
                {" "}
                FULLNAME <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Stack
                direction={["column", "row"]}
                justifyContent={"space-between"}
              >
                <Input name="firstname" type="text" placeholder="firstname" />
                <Input name="surname" type="text" placeholder="lastname" />
              </Stack>
            </Box>
            <Box m>
              <StyledLabel>
                {" "}
                address <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Input name="address" type="text" />
            </Box>
            <Box m>
              <StyledLabel>
                {" "}
                cell phone <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Input
                name="cell phone"
                type="text"
                placeholder="Enter Mobile Number"
              />
            </Box>
            <Box m>
              <StyledLabel>
                {" "}
                e-mail <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Input name="e-mail" type="email" placeholder="Enter E-mail" />
            </Box>
            <Box m>
              <StyledLabel>
                marital status
                <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Input name="marital status" type="text" />
            </Box>
            <Box m>
              <StyledLabel>
                {" "}
                age <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Input name="age" type="text" />
            </Box>
            <Box m>
              <StyledLabel>
                {" "}
                gender <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Input name="gender" type="text" />
            </Box>
            <Box m>
              <StyledLabel>
                {" "}
                do you want to recieve cash or check{" "}
                <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Input name="payment type" type="text" />
            </Box>
            <Box m>
              <StyledLabel>
                {" "}
                occupation <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Input name="occupation" type="text" />
            </Box>
            <Box m>
              <StyledLabel>
                {" "}
                monthly income <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Input name="income" type="text" />
            </Box>
            <Box m>
              <StyledLabel>
                {" "}
                retired <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="YES" />
                <FormControlLabel control={<Checkbox />} label="NO" />
              </FormGroup>
            </Box>
            <StyledButton type="submit" variant="contained">
              SUBMIT
            </StyledButton>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default NewForm;
