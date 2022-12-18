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
  MenuItem,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Input, Select } from "../commons";
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

const StyledBox = styled(Box)({
  marginBottom: ["1rem", "1.4rem"],
});
const StyledButton = styled(Button)({
  backgroundColor: colors.BLACK,
  "&:hover": {
    backgroundColor: colors.ORANGE,
  },
});

const HowToApplyForm = ({}) => {
  const validate = Yup.object({
    firstname: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Item Name is Required"),
    surname: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Item Name is Required"),
    address: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Item Name is Required"),
    mobileNumber: Yup.number()
      .min(1, "Item Name must contain atleast a character")
      .required("Item Name is Required"),
    Email: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Item Name is Required"),

    maritalStatus: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Item Name is Required"),

    age: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Item Name is Required"),
    gender: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Item Name is Required"),
    paymentType: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Item Name is Required"),
    occupation: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Item Name is Required"),
    occupation: Yup.string()
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
            <StyledBox>
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
            </StyledBox>
            <StyledBox>
              <StyledLabel>
                {" "}
                address <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Input name="address" type="text" />
            </StyledBox>
            <StyledBox>
              <StyledLabel>
                {" "}
                cell phone <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Input
                name="mobileNumber"
                type="text"
                placeholder="Enter Mobile Number"
              />
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
                marital status
                <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Select
                name="maritalStatus"
                option={[
                  {
                    value: "single",
                    title: "Single",
                  },
                  {
                    value: "engaged",
                    title: "Engaged",
                  },
                  {
                    value: "married",
                    title: "Married",
                  },
                ]}
              />
            </StyledBox>
            <StyledBox>
              <StyledLabel>
                {" "}
                age <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Input name="age" type="text" />
            </StyledBox>
            <StyledBox>
              <StyledLabel>
                {" "}
                gender <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Select
                name="gender"
                option={[
                  {
                    value: "male",
                    title: "Male",
                  },
                  {
                    value: "female",
                    title: "Female",
                  },
                ]}
              />
            </StyledBox>
            <StyledBox>
              <StyledLabel>
                {" "}
                do you want to recieve cash or check{" "}
                <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>

              <Select
                name="paymentType"
                option={[
                  {
                    value: "cash",
                    title: "Cash",
                  },
                  {
                    value: "check",
                    title: "Check",
                  },
                ]}
              />
            </StyledBox>
            <StyledBox>
              <StyledLabel>
                {" "}
                occupation <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Input name="occupation" type="text" />
            </StyledBox>
            <StyledBox>
              <StyledLabel>
                {" "}
                monthly income <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Input name="income" type="text" />
            </StyledBox>
            <StyledBox>
              <StyledLabel>
                {" "}
                retired <StyledAsterisk>*</StyledAsterisk>
              </StyledLabel>
              <Select
                name="retired"
                option={[
                  {
                    value: "retired",
                    title: "Retired",
                  },
                  {
                    value: "working",
                    title: "I am Working",
                  },
                ]}
              />
            </StyledBox>
            <StyledBox>
              <StyledButton type="submit" variant="contained">
                SUBMIT
              </StyledButton>
            </StyledBox>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default HowToApplyForm;
