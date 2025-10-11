'use client';

import React from 'react';
import Link from 'next/link';
import {
  Box,
  Typography,
  Divider,
  IconButton,
  useTheme,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const footerSections = [
  {
    title: 'How-Tos',
    links: ['Galaxy S7 | S7 edge', 'Gear 360', 'Galaxy S6 edge+', 'Galaxy Note5', 'Gear S2'],
  },
  {
    title: 'Gallery',
    links: [
      'Galaxy S7 | S7 edge Gallery',
      'Gear 360 VR Gallery',
      'Galaxy Moments',
      'Galaxy S6 edge+ Gallery',
      'Galaxy Note5 Gallery',
      'Galaxy S6 | S6 edge Gallery',
    ],
  },
  {
    title: 'Events',
    links: [
      'Olympic Games',
      'Injustice Edition',
      'Galaxy at E3',
      'Unpacked 2016',
      'S Carpet',
      'Samsung - Surf',
      'Samsung & Avengers',
      'Galaxy S6 World Tour',
    ],
  },
  {
    title: 'Apps',
    links: [
      'Theme Service',
      'Soundcamp',
      'Kids Mode',
      'S Health',
      'Galaxy Apps',
      'Smart Call',
      'Find My Mobile',
      'Samsung Pay',
      'S Note',
      'PENUP',
      'Smart Switch',
      'Samsung Members',
    ],
  },
  {
    title: 'Galaxy Story',
    links: ['Galaxy Story'],
  },
];

const socialLinks = [
  {
    icon: <FacebookIcon fontSize="small" />,
    href: 'https://www.facebook.com/share/17bbcRZ76e/',
    label: 'Facebook',
  },
  {
    icon: <YouTubeIcon fontSize="small" />,
    href: 'https://youtube.com',
    label: 'YouTube',
  },
  {
    icon: <LinkedInIcon fontSize="small" />,
    href: 'https://www.linkedin.com/company/vihi-it-solutions/',
    label: 'LinkedIn',
  },
  {
    icon: <InstagramIcon fontSize="small" />,
    href: 'https://instagram.com',
    label: 'Instagram',
  },
];

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#fff',
        color: '#000',
        pt: 6,
        pb: 4,
        width: '100%',
      }}
    >
      {/* Main sections */}
      {footerSections.map((section, idx) => (
        <Box
          key={section.title}
          sx={{
            maxWidth: '1200px',
            mx: 'auto',
            px: { xs: 2, sm: 4 },
            py: 3,
          }}
        >
          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: '18px',
              mb: 1,
            }}
          >
            {section.title}
          </Typography>

          {/* Divider directly under title */}
          <Divider sx={{ borderColor: '#e0e0e0', mb: 2 }} />

          {/* Links row (wraps responsively) */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 1.5, sm: 3, md: 4 },
            }}
          >
            {section.links.map((linkText, i) => (
              <Typography
                key={i}
                component={Link}
                href="#"
                variant="body2"
                sx={{
                  textDecoration: 'none',
                  color: '#333',
                  fontSize: '15px',
                  fontWeight: 400,
                  '&:hover': { color: '#000' },
                }}
              >
                {linkText}
              </Typography>
            ))}
          </Box>
        </Box>
      ))}

      {/* Bottom row: copyright + social */}
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 2, sm: 4 },
          pt: 3,
          mt: 2,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: { xs: 1, sm: 0 },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: '#666',
            fontSize: '14px',
            textAlign: { xs: 'center', sm: 'left' },
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          © {new Date().getFullYear()} VIHI IT Solutions. All rights reserved.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 1.25,
            justifyContent: { xs: 'center', sm: 'flex-end' },
            mt: { xs: 1.5, sm: 0 },
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          {socialLinks.map((s, i) => (
            <IconButton
              key={i}
              component="a"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              sx={{ color: '#333' }}
              size="small"
            >
              {s.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
