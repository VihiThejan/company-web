"use client";

import React from "react";
import Link from "next/link";
import { Box, Typography, IconButton } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import { brand } from "@/theme/theme";
import BrandLogo from "@/components/common/BrandLogo";
import { SOCIAL_PROFILES } from "@/lib/seo";

const SOCIAL_ICONS = {
  Facebook: <FacebookIcon fontSize="small" />,
  LinkedIn: <LinkedInIcon fontSize="small" />,
  Instagram: <InstagramIcon fontSize="small" />,
  YouTube: <YouTubeIcon fontSize="small" />,
  X: <XIcon fontSize="small" />,
};

const footerSections = [
  {
    title: "Capabilities",
    links: [
      { name: "Marketing", href: "/marketing" },
      { name: "Technology", href: "/technology" },
      { name: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/aboutus" },
      { name: "Industries", href: "/industries" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Contact Us", href: "/contactus" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-conditions" },
    ],
  },
];

export default function Footer() {
  // Only real company profiles are shown; the list lives in src/lib/seo.js.
  const socials = SOCIAL_PROFILES.map((profile) => ({
    label: profile.label,
    href: profile.url,
    icon: SOCIAL_ICONS[profile.label],
  }));

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: brand.ink,
        color: brand.paper,
        mt: { xs: 8, md: 12 },
        pt: { xs: 7, md: 10 },
        pb: 4,
        px: { xs: 3, md: 4, lg: 8 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gap: { xs: 6, lg: 8 },
          gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 5fr) minmax(0, 7fr)" },
        }}
      >
        {/* ================= BRAND + STORY ================= */}
        <Box>
          <Box component={Link} href="/" aria-label="VIHI IT Solutions home" sx={{ display: "inline-flex", color: brand.paper }}>
            <BrandLogo height={46} />
          </Box>
          <Typography
            sx={{
              mt: 3,
              fontSize: "0.95rem",
              color: brand.ash,
              lineHeight: 1.7,
              maxWidth: "52ch",
            }}
          >
            Started as a passionate tech initiative in Sri Lanka back in 2023, Vihi IT Solutions
            emerged with a vision to deliver high-quality, innovative software solutions tailored to
            real-world needs. From inventory management and AI-driven tourism innovations to
            full-stack web and mobile apps, we build systems that are not only powerful but also
            practical.
          </Typography>
        </Box>

        {/* ================= LINK GROUPS ================= */}
        <Box
          component="nav"
          aria-label="Footer"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
            gap: { xs: 4, md: 3 },
          }}
        >
          {footerSections.map((section) => (
            <Box key={section.title}>
              <Typography
                component="p"
                sx={{
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  fontStretch: "125%",
                  mb: 2.5,
                  color: brand.paper,
                }}
              >
                {section.title}
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.6 }}>
                {section.links.map((link) => (
                  <Typography
                    key={link.name}
                    component={Link}
                    href={link.href}
                    sx={{
                      fontSize: "0.92rem",
                      color: brand.ash,
                      width: "fit-content",
                      transition: "color 0.2s ease",
                      "&:hover": { color: brand.paper },
                    }}
                  >
                    {link.name}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ================= BOTTOM BAR ================= */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: 2,
          mt: { xs: 7, md: 10 },
          pt: 3,
          borderTop: `1px solid ${brand.lineDark}`,
        }}
      >
        <Typography sx={{ fontSize: "0.85rem", color: brand.ash }}>
          © {new Date().getFullYear()} VIHI IT Solutions. All rights reserved.
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          {socials.map((item) => (
            <IconButton
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              sx={{
                color: brand.paper,
                border: `1px solid ${brand.lineDark}`,
                width: 40,
                height: 40,
                transition: "background-color 0.2s ease, color 0.2s ease",
                "&:hover": { backgroundColor: brand.paper, color: brand.ink },
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
