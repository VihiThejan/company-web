'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Typography, IconButton, Divider, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const footerSections = [
  {
    title: 'Capabilities',
    links: [
      { name: 'Services', href: '/services' },
      { name: 'Marketing', href: '/marketing' },
      { name: 'Technology', href: '/technology' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/aboutus' },
      { name: 'Expertise', href: '/expertise' },
      { name: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Contact Us', href: '/contactus' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms-conditions' },
    ],
  },
];

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#fff',
        color: '#333',
        pt: 4,
        pb: 2,
        width: '100%',
      }}
    >
      {/* Section links */}
      {footerSections.map((section) => (
        <React.Fragment key={section.title}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              px: { xs: 2, md: 8 },
              py: 2,
              width: '100%',
              maxWidth: '1200px',
              mx: 'auto',
              gap: { xs: 1.5, sm: 0 },
            }}
          >
            {/* Section title */}
            <Typography
              variant="body2"
              sx={{
                fontWeight: 600,
                fontSize: '18px',
                mb: { xs: 1, sm: 0 },
                flex: { xs: 'unset', sm: '0 0 180px' },
              }}
            >
              {section.title}
            </Typography>

            {/* Section links */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: { xs: 'flex-start', sm: 'flex-end' },
                gap: { xs: 2, sm: 4 },
              }}
            >
              {section.links.map((link, linkIdx) => (
                <Typography
                  key={linkIdx}
                  component={Link}
                  href={link.href}
                  variant="body2"
                  sx={{
                    color: '#333',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: 400,
                    '&:hover': { color: '#000' },
                  }}
                >
                  {link.name}
                </Typography>
              ))}
            </Box>
          </Box>
          <Divider sx={{ borderColor: '#e0e0e0', my: 0 }} />
        </React.Fragment>
      ))}

      {/* Bottom Row - Copyright + Social */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 2, md: 8 },
          maxWidth: '1200px',
          mx: 'auto',
          pt: 2,
          gap: { xs: 1.5, sm: 0 },
        }}
      >
        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{
            fontSize: '14px',
            color: '#666',
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          © {new Date().getFullYear()} VIHI IT Solutions (PVT) Ltd. All rights reserved.
        </Typography>

        {/* Social Icons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-end' },
            alignItems: 'center',
            gap: 1.5,
            mt: { xs: 1, sm: 0 },
          }}
        >
          {[
            {
              icon: <FacebookIcon fontSize="small" />,
              href: 'https://facebook.com',
            },
            {
              icon: <YouTubeIcon fontSize="small" />,
              href: 'https://youtube.com',
            },
            {
              icon: <LinkedInIcon fontSize="small" />,
              href: 'https://linkedin.com',
            },
            {
              icon: <InstagramIcon fontSize="small" />,
              href: 'https://instagram.com',
            },
          ].map((item, idx) => (
            <IconButton
              key={idx}
              aria-label="social"
              color="inherit"
              href={item.href}
              target="_blank"
              sx={{ color: '#333' }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
