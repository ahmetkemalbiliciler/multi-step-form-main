import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { useForm } from '../context/FormContext';
import { useNavigate } from 'react-router-dom';

import {
  FormContainer,
  FormSection,
  StyledTextField,
  FlexEndContainer,
  pageTitleStyle,
  pageSubtitleStyle,
  fieldLabelStyle,
} from '../styles';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number')
    .required('Phone number is required'),
});

function InfoPage() {
  const { user, setUser } = useForm();
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    email: '',
    phone: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setUser(prev => ({ ...prev, ...values }));
    setSubmitting(false);
    navigate('/plan');
  };

  return (
    <FormContainer>
      <Box>
        <Typography variant="h4" sx={pageTitleStyle}>
          Personal Info
        </Typography>
        <Typography variant="body1" sx={pageSubtitleStyle}>
          Please provide your name, email address, and phone number
        </Typography>
      </Box>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
          <Form>
            <FormSection>
              <Box>
                <Typography variant="body2" sx={fieldLabelStyle}>
                  Name
                </Typography>
                <StyledTextField
                  fullWidth
                  name="name"
                  placeholder="e.g. Stephen King"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  variant="outlined"
                />
              </Box>

              <Box>
                <Typography variant="body2" sx={fieldLabelStyle}>
                  Email Address
                </Typography>
                <StyledTextField
                  fullWidth
                  name="email"
                  type="email"
                  placeholder="e.g. stephenking@lorem.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  variant="outlined"
                />
              </Box>

              <Box>
                <Typography variant="body2" sx={fieldLabelStyle}>
                  Phone Number
                </Typography>
                <StyledTextField
                  fullWidth
                  name="phone"
                  placeholder="e.g. +1 234 567 8900"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                  variant="outlined"
                />
              </Box>
            </FormSection>

            <FlexEndContainer sx={{ mt: 3 }}>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  px: 3,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 'medium',
                }}
              >
                Next Step
              </Button>
            </FlexEndContainer>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export default InfoPage;