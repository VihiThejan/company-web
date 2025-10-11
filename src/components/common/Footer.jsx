'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Typography, IconButton, Divider, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from 'next/image';

const footerSections = [
  {
    title: 'Capabilities',
    links: [
      { name: 'Marketing', href: '/marketing' },
      { name: 'Technology', href: '/technology' },
      { name: 'Portfolio', href: '/portfolio' },
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
];

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#fff',
        color: '#000',
        mt: {xs: 1, md:6},
        py: {xs:0, md: 6},
        width: '100%',
      }}
    >
      {/* ===== TOP SECTION ===== */}
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 3, sm: 4 },
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: '2fr 1fr 1fr 1fr',
          },
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Company Info */}
        <Box>
          <Box sx={{ mb: 1 }}>
            <Image
              src="/images/logo-new.png"
              alt="VIHI IT Solutions Logo"
              width={200}
              height={50}
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: '#555',
              lineHeight: 1.7,
              maxWidth: {xs: '100%', md: 280},
              textAlign: 'justify',
            }}
          >
            We deliver innovative technology solutions that help your business
            grow and adapt in a fast-changing digital world.
          </Typography>
        </Box>

        {/* Section Links */}
        {footerSections.map((section) => (
          <Box key={section.title}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                fontSize: '16px',
                mb: 1.5,
                color: '#303030ff'
              }}
            >
              {section.title}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: {xs: 'row', md:'column'}, gap: 2 }}>
              {section.links.map((link) => (
                <Typography
                  key={link.name}
                  component={Link}
                  href={link.href}
                  sx={{
                    textDecoration: 'none',
                    color: '#555',
                    fontSize: '14px',
                    '&:hover': { color: '#000' },
                  }}
                >
                  {link.name}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: 4, mx: {xs: 2, sm: 4}, borderColor: '#858585ff' }} />

      {/* ===== BOTTOM SECTION ===== */}
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 3, sm: 4 },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: { xs: 2, sm: 0 },
        }}
      >
        {/* Inline Policy Links */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 3,
          }}
        >
          {[
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: 'Terms & Conditions', href: '/terms-conditions' },
          ].map((item, idx) => (
            <Typography
              key={idx}
              component={Link}
              href={item.href}
              sx={{
                textDecoration: 'none',
                color: '#555',
                fontSize: '14px',
                '&:hover': { color: '#000' },
              }}
            >
              {item.name}
            </Typography>
          ))}
        </Box>

        {/* Social Media Icons */}
        <Box sx={{ display: 'flex', gap: 1.5 }}>
          {[
            {
              icon: <FacebookIcon fontSize="medium" />,
              href: 'https://www.facebook.com/share/17bbcRZ76e/',
            },
            {
              icon: <YouTubeIcon fontSize="medium" />,
              href: 'https://youtube.com',
            },
            {
              icon: <LinkedInIcon fontSize="medium" />,
              href: 'https://www.linkedin.com/company/vihi-it-solutions/',
            },
            {
              icon: <InstagramIcon fontSize="medium" />,
              href: 'https://instagram.com',
            },
          ].map((item, i) => (
            <IconButton
              key={i}
              href={item.href}
              target="_blank"
              sx={{
                color: '#333',
                p: 0.8,
                '&:hover': { color: '#ffc720' },
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>
      </Box>

      {/* Copyright */}
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          color: '#888',
          fontSize: '13px',
          mt: 3,
        }}
      >
        © {new Date().getFullYear()} VIHI IT Solutions. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
