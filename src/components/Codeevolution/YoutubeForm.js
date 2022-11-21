import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";

// All fields required
// email: valid email format

const initialValues = {
  name: "vimu",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const savedValues = {
  name: "vimu",
  email: "vimu@gmail.com",
  channel: "wov",
  comments: "welcome to frmik",
  address: "123 main st",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values, onSubmitProps) => {
  console.log("Form Data:", values);
  console.log("Submit Props", onSubmitProps);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email Format").required("Required!"),
  channel: Yup.string().required("Required!"),
  //   comments: Yup.string().required("Required"),
});

const ValidateComments = (value) => {
  let error;
  if (!value) {
    error = "Requires";
  }
  return error;
};

const YoutubeForm = () => {
  const [formValues, setFormValues] = useState(null);

  //   console.log("Form Vaules:", formik.values);
  //   console.log("Form Errors:", formik.errors);
  //   console.log("Form Touched:", formik.touched);

  return (
    <Box
      sx={{
        p: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Formik
        initialValues={formValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
        // validateOnChange={false}
        // validateOnBlur={false}
        // validateOnMount
      >
        {(formik) => {
          console.log("formikProps", formik);
          return (
            <Form>
              <Stack
                spacing={3}
                sx={{
                  p: 5,
                  maxWidth: "30rem",
                  boxShadow: 3,
                  borderRadius: 3,
                }}
              >
                <Box width={1}>
                  <Field
                    label="Name"
                    type="text"
                    name="name"
                    id="name"
                    style={{ width: "100%" }}
                  />
                  <ErrorMessage name="name" component={"div"} />
                </Box>
                <Field label="Email" type="email" name="email" id="email" />
                <ErrorMessage name="email" />
                <Field
                  label="Channel"
                  type="text"
                  name="channel"
                  id="channel"
                  placeholder="CodeEvolution"
                />
                <ErrorMessage name="channel" />

                <Field
                  as="textarea"
                  //   component="textarea"
                  label="Comments"
                  type="text"
                  name="comments"
                  id="comments"
                  placeholder="Add Comments"
                  validate={ValidateComments}
                />
                <ErrorMessage name="comments" />

                {/* FAST FIELD */}
                <FastField label="Address" name="address">
                  {(props) => {
                    const { field, form, meta } = props;
                    // console.log("renderProps", props);
                    return (
                      <TextField
                        label={"Address"}
                        id="address"
                        {...field}
                        {...(meta.error &&
                          meta.touched && {
                            error: true,
                            helperText: meta.error,
                          })}
                      />
                    );
                  }}
                </FastField>
                <ErrorMessage name="address" />

                <Field
                  type="text"
                  id="facebook"
                  placeholder="facebook"
                  name="social.facebook"
                />
                <ErrorMessage name="social.facebook" />

                <Field
                  type="text"
                  id="twitter"
                  placeholder="twitter"
                  name="social.twitter"
                />
                <ErrorMessage name="social.twitter" />
                {/* ------------------------------------------- */}
                <Field
                  type="text"
                  id="primaryPh"
                  placeholder="phone1"
                  name="phoneNumbers[0]"
                />

                <Field
                  type="text"
                  id="secondaryPh"
                  placeholder="phone2"
                  name="phoneNumbers[1]"
                />
                {/* ------------------------------------------- */}
                <FieldArray name="phNumbers">
                  {(fieldArrayProps) => {
                    // console.log("fieldArrayProps", fieldArrayProps);
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;
                    console.log("Form Errors:", form.errors);
                    return (
                      <>
                        {phNumbers.map((phNumber, index) => (
                          <div key={index}>
                            <Field name={`phNumbers[${index}]`} />
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                -
                              </button>
                            )}

                            <button type="button" onClick={() => push("")}>
                              +
                            </button>
                          </div>
                        ))}
                      </>
                    );
                  }}
                </FieldArray>
                {/* 
                <Button
                  type="button"
                  onClick={() => formik.validateField("comments")}
                >
                  validate comments
                </Button>
                <Button type="button" onClick={() => formik.validateForm()}>
                  validate all
                </Button>
                <Button
                  type="button"
                  onClick={() => formik.setFieldTouched("comments")}
                >
                  Visit Comments
                </Button>
                <Button
                  type="button"
                  onClick={() =>
                    formik.setTouched({
                      name: true,
                      email: true,
                      channel: true,
                      comments: true,
                    })
                  }
                >
                  Visit Fields
                </Button> */}
                {/* <Button
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid)}
                >
                  Submit
                </Button> */}
                <Button
                  type="button"
                  onClick={() => setFormValues(savedValues)}
                >
                  Load Saved Data
                </Button>
                <Button type="reset">Reset</Button>
                <Button
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Submit
                </Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default YoutubeForm;
