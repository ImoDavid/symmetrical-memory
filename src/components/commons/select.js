import React from "react";
import { ErrorMessage, useField, Field } from "formik";
import { Box, Typography, styled, } from "@mui/material";
import {colors} from "../../styles/globals";

const StyledFormGroup = styled(Box)({
  display: "flex",
  flex: " 0 0 auto",
  flexFlow: "row wrap",
  alignItems: "center",
  marginBottom: 0,
});
const StyledInput = styled(Field)({
  "&.is-invalid": {
    border: "red",
  },

  "&.form-control": {
    display: " block",
    width: "100%",
    // height: ,
    padding: ".5rem",
    fontSize: "1rem",
    // lineHeight: "",
     color:colors.NAV_TEXT ,
    backgroundColor: "white",
    // backgroundClip: "padding-box",
    border: "1px solid grey",
  },
  "&.form-control > option": {},
});

const Select = ({ label, touched, option, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <StyledFormGroup>
      <Typography htmlFor={field.name} gutterBottom>
        {label}
      </Typography>
      <StyledInput
        {...field}
        {...props}
        as="select"
        className={`form-control  ${
          meta.touched && meta.error && `is-invalid`
        }`}
      >
        <option>Please Select</option>

        {option.map((ele) => (
          <option key={ele.value} value={ele.value}>
            {ele.title}
          </option>
        ))}
      </StyledInput>

      <ErrorMessage component="div" className="error" name={field.name} />
    </StyledFormGroup>
  );
};

export default Select;
