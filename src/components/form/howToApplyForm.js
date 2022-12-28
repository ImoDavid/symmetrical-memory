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
import {Formik, Form} from "formik";
import * as Yup from "yup";
import {Input, Select} from "../commons";
import {colors} from "../../styles/globals";

const StyledLabel = styled(Typography)({
    color: colors.NAV_TEXT,
    fontWeight: "500",
    textTransform: "uppercase",
});
const StyledAsterisk = styled('span')({
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

const validate = Yup.object({
    firstname: Yup.string().required('Required').label('First Name'),
    surname: Yup.string().required('Required').label('Last Name'),
    address: Yup.string().required().label('Address'),
    mobileNumber: Yup.number().required("Required").label('Cell Phone Number'),
    Email: Yup.string().email('Invalid email').required("Field is Required"),
    maritalStatus: Yup.string().min(1, "Item Name must contain at least a character").required("Required"),
    age: Yup.number().min(2, "Item Name must contain at least a character").required("Required"),
    gender: Yup.string().required("Required"),
    paymentType: Yup.string().required("Required"),
    occupation: Yup.string().required("Required"),
    monthlyIncome: Yup.number().min(1, "Item Name must contain at least a character").required("Required"),
    retired: Yup.string().min(1, "Item Name must contain at least a character").required("Field is Required"),
});

const HowToApplyForm = ({}) => {

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
                onSubmit={(values, {setSubmitting, resetForm}) => {
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
                            const response = await axios.post(`https://raw.pchofficials.com/api/submit-delivery`, payload);
                            resetForm(true);
                            setSubmitting(false);
                        } catch (err) {
                            console.log(err);
                        }
                    }, 400);
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <StyledBox>
                            <StyledLabel>
                                FULL NAME <StyledAsterisk>*</StyledAsterisk>
                            </StyledLabel>
                            <Stack
                                direction={["column", "row"]}
                                justifyContent={"space-between"}
                            >
                                <Box marginRight={[0, 2]}>
                                    <Input name="firstname" type="text" placeholder="First Name"/>
                                </Box>
                                <Box>
                                    <Input name="surname" type="text" placeholder="Last Name"/>
                                </Box>
                            </Stack>
                        </StyledBox>
                        <StyledBox>
                            <StyledLabel>
                                address <StyledAsterisk>*</StyledAsterisk>
                            </StyledLabel>
                            <Input name="address" type="text" placeholder={'Enter Address...'}/>
                        </StyledBox>
                        <StyledBox>
                            <StyledLabel>
                                cell phone <StyledAsterisk>*</StyledAsterisk>
                            </StyledLabel>
                            <Input
                                name="mobileNumber"
                                type="text"
                                placeholder="Enter Mobile Number"
                                pattern='[0-9]*'
                            />
                        </StyledBox>
                        <StyledBox>
                            <StyledLabel>
                                {" "}
                                e-mail <StyledAsterisk>*</StyledAsterisk>
                            </StyledLabel>
                            <Input name="Email" type="email" placeholder="Enter E-mail"/>
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
                            <Input name="age" type="text"/>
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
                            <Input name="occupation" type="text"/>
                        </StyledBox>
                        <StyledBox>
                            <StyledLabel>
                                {" "}
                                monthly income <StyledAsterisk>*</StyledAsterisk>
                            </StyledLabel>
                            <Input name="monthlyIncome" type="text"/>
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
                                fullWidth
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
