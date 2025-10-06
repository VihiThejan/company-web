'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  useTheme,
} from '@mui/material';

export default function ContactUs() {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    companyWebsite: '',
    contactNumber: '',
    agree: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('✅ Your message has been sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: '',
          companyWebsite: '',
          contactNumber: '',
          agree: false,
        });
      } else {
        alert('⚠️ Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Error sending message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#fff',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          textAlign: 'center',
          maxWidth: 800,
          mt: { xs: 6, md: 10 },
          mb: { xs: 2, md: 4 },
          px: 2,
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.8rem', sm: '2.4rem', md: '3rem' },
            mb: 1,
          }}
        >
          Contact us
        </Typography>
        <Typography color="text.secondary">
          Interested in working with us? Let us know your expectations and specific needs.
          Reach out today, and let’s explore how we can collaborate effectively.
        </Typography>
      </Box>

      {/* Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 900,
          width: '100%',
          mx: 'auto',
          p: { xs: 2, sm: 4, md: 6 },
          borderRadius: 3,
          border: '1px solid #e0e0e0',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          backgroundColor: '#fff',
        }}
      >
        <Grid container spacing={3}>
          {/* Name */}
          <Grid item xs={12} md={6}>
            <TextField
              label="First Name"
              name="firstName"
              fullWidth
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Last Name"
              name="lastName"
              fullWidth
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>

          {/* Company Website */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Company Website"
              name="companyWebsite"
              fullWidth
              value={formData.companyWebsite}
              onChange={handleChange}
            />
          </Grid>

          {/* Contact Number */}
          <Grid item xs={12} md={6}>
            <TextField
              label="Contact Number"
              name="contactNumber"
              fullWidth
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </Grid>

          {/* Message */}
          <Grid item xs={12}>
            <TextField
              label="Tell us a little bit about what you need"
              name="message"
              fullWidth
              multiline
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>

          {/* Checkbox */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.agree}
                  onChange={handleChange}
                  name="agree"
                  color="primary"
                />
              }
              label="Please note that your email may be used for marketing purposes. You can opt out anytime."
            />
          </Grid>

          {/* Submit */}
          <Grid item xs={12}>
            <Button
              type="submit"
              disabled={loading}
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: '#000',
                fontWeight: 600,
                borderRadius: '30px',
                px: 4,
                py: 1.5,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: theme.palette.primary.light,
                },
              }}
            >
              {loading ? 'Sending...' : 'Submit'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
