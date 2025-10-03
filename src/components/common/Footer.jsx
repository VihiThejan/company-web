'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube'; // Assuming this is the 'in' icon from your image

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const footerSections = [
    {
      title: 'Capabilities',
      links: [
        { name: 'Services', href: '/services' },
        { name: 'Marketing', href: '/marketing' },
        { name: 'Technology', href: '/technology' }, // Assuming this is part of capabilities
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

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#282828', // Dark grey background for footer
        color: '#fff',
        padding: '40px 100px', // Adjust padding
        [theme.breakpoints.down('md')]: {
          padding: '40px 20px',
        },
      }}
    >
      <Grid container spacing={isMobile ? 3 : 6}>
        {footerSections.map((section, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 600, color: '#fff' }}
            >
              {section.title}
            </Typography>
            {section.links.map((link, linkIndex) => (
              <Typography // Now Typography is the outer element
                key={linkIndex}
                component={Link} // Pass the Next.js Link component here
                href={link.href} // Pass the href directly to Typography (which forwards it to Link)
                variant="body2"
                sx={{
                  display: 'block',
                  color: '#ccc', // Lighter text color for links
                  textDecoration: 'none',
                  mb: '8px',
                  '&:hover': {
                    color: '#FFD700', // Gold/yellow on hover
                  },
                }}
              >
                {link.name}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4, borderColor: '#444' }} />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end', // Align social icons to the right
          alignItems: 'center',
          gap: '10px',
          [theme.breakpoints.down('sm')]: {
            justifyContent: 'center', // Center on mobile
          },
        }}
      >
        <IconButton
          aria-label="Facebook"
          color="inherit"
          href="https://facebook.com"
          target="_blank"
          sx={{ color: '#fff' }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          aria-label="LinkedIn"
          color="inherit"
          href="https://linkedin.com"
          target="_blank"
          sx={{ color: '#fff' }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-label="Instagram"
          color="inherit"
          href="https://instagram.com"
          target="_blank"
          sx={{ color: '#fff' }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          aria-label="YouTube" // Assuming this is YouTube
          color="inherit"
          href="https://youtube.com"
          target="_blank"
          sx={{ color: '#fff' }}
        >
          <YouTubeIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
