import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

// All fields required
// email: valid email format

const initialValues = {
  name: "vimu",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form Data:", values);
};

const validate = (values) => {
  // values.name | values.email | values.channel
  // errors.name | errors.email | errors.channel
  // errors.name = 'This field is required'
  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email Format").required("Required!"),
  channel: Yup.string().required("Required!"),
});

const OldYoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });

  //   console.log("Form Vaules:", formik.values);
  //   console.log("Form Errors:", formik.errors);
  console.log("Form Touched:", formik.touched);

  return (
    <Box
      sx={{
        p: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Stack
          spacing={3}
          sx={{
            p: 5,
            maxWidth: "30rem",
            boxShadow: 3,
            borderRadius: 3,
          }}
        >
          <TextField
            label="Name"
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            {...(formik.errors.name &&
              formik.touched.name && {
                error: true,
                helperText: formik.errors.name,
              })}
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            {...(formik.errors.email &&
              formik.touched.email && {
                error: true,
                helperText: formik.errors.email,
              })}
          />
          <TextField
            label="Channel"
            type="text"
            name="channel"
            id="channel"
            value={formik.values.channel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            {...(formik.errors.channel &&
              formik.touched.channel && {
                error: true,
                helperText: formik.errors.channel,
              })}
          />

          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default OldYoutubeForm;
