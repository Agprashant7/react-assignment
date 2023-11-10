import React from "react";

import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form, useFormik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const CheckoutForm = ({ handleSubmit }) => {
  const formValidationSchema = Yup.object().shape({
    email: Yup.string().email("must valid email").required("Required"),
    firstName: Yup.string().min(4, "minimum 4 characters").required("Required"),
    lastName: Yup.string().min(2, "minimum 2 character").required("Required"),
    phone: Yup.string()
      .min(10, "less than 10 digits")
      .max(10, "more than 10 digit")
      .required("Required"),
    address1: Yup.string().min(6).required("Required"),
    address2: Yup.string().min(6).required("Required"),
    pincode: Yup.string().min(5).required("Required"),
    city: Yup.string().min(4).required("Required"),
  });
  return (
    <Box>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          phone: "",
          address1: "",
          address2: "",
          pincode: "",
          city: "",
        }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={formValidationSchema}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
            isValid,
          } = props;
          return (
            <form noValidate onSubmit={handleSubmit}>
              <Box
                mb={3}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 3,
                  flexWrap: "wrap",
                }}
              >
                <TextField
                  label="First Name"
                  name="firstName"
                  // className={classes.textField}
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.firstName && touched.firstName && errors.firstName
                  }
                  margin="normal"
                  error={errors.lastName && touched.lastName}
                />

                <TextField
                  error={errors.lastName && touched.lastName}
                  label="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.lastName && touched.lastName && errors.lastName
                  }
                  margin="normal"
                />

                <TextField
                  error={errors.email && touched.email}
                  label="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.email && touched.email && errors.email}
                  margin="normal"
                />

                <TextField
                  label="phone"
                  name="phone"
                  type="integer"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.phone && touched.phone && errors.phone}
                  margin="normal"
                  error={errors.phone && touched.phone}
                />
                <TextField
                  label="Address:Street"
                  name="address1"
                  value={values.address1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.address1 && touched.address1 && errors.address1
                  }
                  margin="normal"
                  error={errors.address1 && touched.address1}
                />
                <TextField
                  label="Address:Building Name"
                  name="address2"
                  value={values.address2}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.address2 && touched.address2 && errors.address2
                  }
                  margin="normal"
                  error={errors.address2 && touched.address2}
                />

                <TextField
                  label="Pincode"
                  name="pincode"
                  value={values.pincode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={
                    errors.address2 && touched.pincode && errors.pincode
                  }
                  error={errors.pincode && touched.pincode}
                  margin="normal"
                />
                <TextField
                  label="City"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.city && touched.city && errors.city}
                  margin="normal"
                  error={errors.city && touched.city}
                />
              </Box>
              <Button
                onClick={handleSubmit}
                disabled={!dirty || !isValid}
                variant="contained"
                color="secondary"
              >
                Add
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};
export default CheckoutForm;
