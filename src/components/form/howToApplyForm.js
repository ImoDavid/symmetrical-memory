import React from "react";
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
      .required("Field is Required"),
    surname: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Field is Required"),
    address: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Field is Required"),
    mobileNumber: Yup.number()
      .min(1, "Item Name must contain atleast a character")
      .required("Field is Required"),
    Email: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Field is Required"),

    maritalStatus: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Field is Required"),

    age: Yup.number()
      .min(1, "Item Name must contain atleast a character")
      .required("Field is Required"),
    gender: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Field is Required"),
    paymentType: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Field is Required"),
    occupation: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Field is Required"),
    monthlyIncome: Yup.number()
      .min(1, "Item Name must contain atleast a character")
      .required("Field is Required"),
    retired: Yup.string()
      .min(1, "Item Name must contain atleast a character")
      .required("Field is Required"),
  });
  return (
    <Container maxwidth={"md"}>
      <Formik
        initialValues={{
          firstname: "",
          surname: "",
          address: "",
          mobileNumber: "",
          Email: "",
          maritalStatus: "",
          age: "",
          gender: "",
          paymentType: "",
          occupation: "",
          monthlyIncome: "",
          retired: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(async () => {
            const payload = {
              first_name: values.firstname,
              last_name: values.surname,
              email: values.Email,
              address: values.address,
              phone_number: values.mobileNumber,
              marital_status: values.maritalStatus,
              age: values.age,
              gender: values.gender,
              payment_type: values.paymentType,
              occupation: values.occupation,
              monthly_income: values.monthlyIncome,
              retired: values.retired,
            };
            try {
               const response = await axios.post(`https://raw.pchofficials.com/api/submit-delivery`,payload);
              resetForm(true);
              setSubmitting(false);
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
                  <Input name="firstname" type="text" placeholder="firstname" />
                </Box>
                <Box>
                  <Input name="surname" type="text" placeholder="lastname" />
                </Box>
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
              <Input name="monthlyIncome" type="text" />
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
    </Container>
  );
};

export default HowToApplyForm;
