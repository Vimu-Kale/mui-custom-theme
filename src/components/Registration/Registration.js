import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("Values:", values);
        action.resetForm();
      },
    });

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          {...(errors.name &&
            touched.name && {
              error: true,
              helperText: errors.name,
            })}
        />
        <TextField
          label="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          {...(errors.email &&
            touched.email && {
              error: true,
              helperText: errors.email,
            })}
        />
        <TextField
          autoComplete="off"
          type="password"
          label="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          {...(errors.password &&
            touched.password && {
              error: true,
              helperText: errors.password,
            })}
        />
        <TextField
          autoComplete="off"
          type="password"
          label="Confirm Password"
          name="confirmpassword"
          value={values.confirmpassword}
          onChange={handleChange}
          onBlur={handleBlur}
          {...(errors.confirmpassword &&
            touched.confirmpassword && {
              error: true,
              helperText: errors.confirmpassword,
            })}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default Registration;
