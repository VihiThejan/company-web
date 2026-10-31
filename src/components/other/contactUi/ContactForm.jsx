'use client';

import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CustomTheme from '@/theme/theme';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info } from 'lucide-react';
import theme from '@/theme/theme';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyWebsite: '',
    contactNumber: '',
    message: '',
    agree: false,
  });

  const [popup, setPopup] = useState(null);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Validate Form
  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/; // Basic phone validation

    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact Number is required';
    } else if (!phoneRegex.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Invalid contact number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle Input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // ✅ Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showPopup('error', 'Please fix the errors in the form.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'c99a68a6-bb14-41d1-8f21-59d1abb6227f',
          from_name: `${formData.firstName} ${formData.lastName}`,
          subject: 'New Contact Form Submission - VihiIT',
          email: formData.email,
          companyWebsite: formData.companyWebsite,
          contactNumber: formData.contactNumber,
          message: formData.message,
        }),
      });

      if (response.ok) {
        showPopup(
          'success',
          'Thank you! Your message has been sent successfully.'
        );
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          companyWebsite: '',
          contactNumber: '',
          message: '',
          agree: false,
        });
        setErrors({});
      } else throw new Error();
    } catch {
      showPopup(
        'error',
        'Something went wrong. Please try again later or contact us at info@vihiit.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Show Popup with Type
  const showPopup = (type, message) => {
    setPopup({ type, message });
    setTimeout(() => setPopup(null), 4500);
  };

  return (
    <>
      {/* ✅ Animated Popup */}
      <AnimatePresence>
        {popup && (
          <AnimatedPopup
            key="popup"
            type={popup.type}
            message={popup.message}
            duration={4000}
          />
        )}
      </AnimatePresence>

      {/* ✅ Contact Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          maxWidth: '900px',
          mx: 'auto',
          p: { xs: 3, md: 5 },
          borderRadius: 3,
          border: '1px solid #e0e0e0',
          boxShadow: 'none',
          outline: '1px solid #DADAD7',
          outlineOffset: '-1px',
          backgroundColor: '#fff',
        }}
      >
        <Grid container spacing={4}>
          {[
            { label: 'First Name', name: 'firstName', md: 6 },
            { label: 'Last Name', name: 'lastName', md: 6 },
            { label: 'Email', name: 'email', type: 'email', md: 6 },
            { label: 'Contact Number', name: 'contactNumber', md: 6 },
            { label: 'Company Website', name: 'companyWebsite', md: 12 },
          ].map((field, i) => (
            <Grid size={{ xs: 12, md: field.md }} key={i}>
              <TextField
                variant="standard"
                label={field.label}
                name={field.name}
                type={field.type || 'text'}
                fullWidth
                required={field.name !== 'companyWebsite'}
                value={formData[field.name]}
                onChange={handleChange}
                error={!!errors[field.name]}
                helperText={errors[field.name]}
                InputProps={{ style: { color: 'black' } }}
                InputLabelProps={{
                  sx: {
                    color: 'rgba(0,0,0,0.7)',
                    '&.Mui-focused': { color: 'black' },
                  },
                }}
                sx={{
                  '& .MuiInputBase-root:before': {
                    borderBottom: '1px solid rgba(0,0,0,0.4)',
                  },
                  '& .MuiInputBase-root:after': {
                    borderBottom: '2px solid black',
                  },
                }}
              />
            </Grid>
          ))}

          {/* Message */}
          <Grid size={{ xs: 12, md: 12 }}>
            <TextField
              variant="standard"
              label="Tell us a little bit about what you need"
              name="message"
              fullWidth
              multiline
              minRows={1}
              maxRows={6}
              required
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              InputProps={{ style: { color: 'black' } }}
              InputLabelProps={{
                sx: {
                  color: 'rgba(0,0,0,0.7)',
                  '&.Mui-focused': { color: 'black' },
                },
              }}
              sx={{
                '& .MuiInputBase-root:before': {
                  borderBottom: '1px solid rgba(0,0,0,0.4)',
                },
                '& .MuiInputBase-root:after': {
                  borderBottom: '2px solid black',
                },
              }}
            />
          </Grid>

          {/* Checkbox */}
          <Grid size={{ xs: 12, md: 12 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.agree}
                  onChange={handleChange}
                  name="agree"
                  color="default"
                  sx={{
                    color: 'black',
                    '&.Mui-checked': { color: 'black' },
                  }}
                />
              }
              label="Subscribe to our newsletter to receive updates, insights, and special offers."
              sx={{ color: 'black' }}
            />
          </Grid>

          {/* Submit */}
          <Grid size={{ xs: 12, md: 12 }}>
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: '#fff',
                borderRadius: '999px',
                '&:hover': { backgroundColor: theme.palette.primary.option },
                '&.Mui-disabled': { backgroundColor: '#bdbdbd', color: '#fff' },
                px: 4,
                py: 1.5,
                textTransform: 'none',
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

// ✅ Animated Popup Component
function AnimatedPopup({ message, type = 'info', duration = 4000 }) {
  const [progress, setProgress] = useState(100);

  React.useEffect(() => {
    const interval = 50;
    const decrement = (interval / duration) * 100;
    const timer = setInterval(() => {
      setProgress((prev) => Math.max(prev - decrement, 0));
    }, interval);
    return () => clearInterval(timer);
  }, [duration]);

  const typeStyles = {
    success: {
      bg: '#ffffffff',
      color: '#000000',
      icon: (
        <CheckCircle size={28} color='#000000' />
      ),
      bar: '#000000',
    },
    error: {
      bg: '#ffffffff',
      color: '#C62828',
      icon: <XCircle size={28} color="#C62828" />,
      bar: '#E53935',
    },
    info: {
      bg: '#ffffffff',
      color: '#000000',
      icon: <Info size={28} color="#000000" />,
      bar: '#000000',
    },
  };

  const style = typeStyles[type] || typeStyles.info;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        bottom: 30,
        right: 20,
        background: style.bg,
        border: `1px solid ${style.border}`,
        color: style.color,
        borderRadius: 16,
        padding: '16px 20px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        width: '90%',
        maxWidth: 400,
        zIndex: 10000,
      }}
    >
      <Box display="flex" alignItems="center" gap={1}>
        {style.icon}
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {message}
        </Typography>
      </Box>

      {/* Loading Bar */}
      <Box
        sx={{
          width: '100%',
          height: 6,
          backgroundColor: '#e0e0e0',
          borderRadius: 10,
          overflow: 'hidden',
          mt: 1.5,
        }}
      >
        <motion.div
          style={{
            height: '100%',
            backgroundColor: style.bar,
            width: `${progress}%`,
          }}
          transition={{ duration: 0.1 }}
        />
      </Box>
    </motion.div>
  );
}
