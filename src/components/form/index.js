import React from "react";

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Paper,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form, useFormik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const CheckoutForm = ({handleSubmit}) => {
  
  const formValidationSchema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    address1: Yup.string().required("Required"),
    address2: Yup.string().required("Required"),
    pincode: Yup.string().required("Required"),
    city: Yup.string().required("Required"),

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
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.phone && touched.phone && errors.phone}
                  margin="normal"
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
                />
              </Box>
              <Button
                onClick={handleSubmit}
                disabled={!dirty || !isValid}
                variant="contained"
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
