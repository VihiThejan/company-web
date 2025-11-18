"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Image from "next/image";

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
      { name: "Blog", href: "/blog" },
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
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        py: 6,
        flexGrow: 1,
        mx: { xs: 2, md: 4 },
      }}
    >
      {/* ================= OUTER GRID ================= */}
      <Box
        sx={{
          maxWidth: "100%",
          mx: "auto",
          display: "grid",
          gap: 4,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "1fr",
            lg: "repeat(5, 1fr)", // 5 columns + social icons column
          },
        }}
      >
        {/* ================= LOGO & CONTENT ================= */}
        <Box
          sx={{
            gridColumn: {
              xs: "1 / -1",
              sm: "1 / -1",
              md: "1 / -1", // tablet: full width at top
              lg: "span 2", // desktop: 2 column width for logo section
            },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Image
            src="/images/logo-new.png"
            alt="VIHI IT Solutions Logo"
            width={220}
            height={60}
            style={{ objectFit: "contain", marginBottom: 12 }}
          />

          <Typography
            sx={{
              fontSize: "14px",
              color: "#555",
              lineHeight: 1.6,
              maxWidth: { lg: "90%" },
              mx: { xs: "auto", lg: 0 },
              textAlign: "justify",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            consequatur tempora, laboriosam voluptatum mollitia provident optio
            expedita qui quisquam fugit dicta? Repellat cupiditate cumque
            commodi numquam natus laudantium nostrum molestiae soluta omnis
            beatae eaque molestias quas dignissimos explicabo, aliquam dolor
            asperiores ratione et vero quia voluptas! Assumenda deserunt ea
            necessitatibus!
          </Typography>
        </Box>

        {/* ================= LINK GROUPS (TABLET + DESKTOP) ================= */}
        <Box
          sx={{
            display: { xs: "grid", sm: "grid" },
            gridTemplateColumns: {
              sm: "1fr 1fr",
              md: "1fr 1fr",
              lgl: "repeat(4, 1fr)",
            },
            gridColumn: {
              sm: "1 / -2",
              lg: "span 3",
            },
            gap: 4,
          }}
        >
          {footerSections.map((section) => (
            <Box key={section.title}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "15px",
                  mb: 1.5,
                  color: "#303030",
                }}
              >
                {section.title}
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  display: { xs: "flex" },
                  flexDirection: { xs: "row", mdll: "column" },
                  gap: 3,
                }}
              >
                {section.links.map((link) => (
                  <Typography
                    key={link.name}
                    component={Link}
                    href={link.href}
                    sx={{
                      textDecoration: "none",
                      fontSize: "14px",
                      color: "#555",
                      "&:hover": { color: "#000" },
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

      <Box
        sx={{
          width: "100%",
          display: { xs: "block", lg: "flex" },
          justifyContent: "center",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
          borderTop: "2px solid #c3c3c3",
          pt: 4,
        }}
      >
        {/* ================= COPYRIGHT ================= */}
        <Typography
          sx={{
            fontSize: "14px",
            color: "#828282",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} VIHI IT Solutions. All rights reserved.
        </Typography>
        {/* ================= SOCIAL ICONS ================= */}
        <Box
          sx={{
            gridColumn: {
              xs: "1 / -1",
              sm: "1 / -1",
              lg: "auto", // desktop: right side column
            },
            textAlign: { xs: "center", lg: "right" },
            mt: { xs: 2, lg: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-end" },
              gap: 1.5,
            }}
          >
            {[
              {
                icon: <FacebookIcon fontSize="medium" />,
                href: "https://www.facebook.com",
              },
              {
                icon: <YouTubeIcon fontSize="medium" />,
                href: "https://youtube.com",
              },
              {
                icon: <LinkedInIcon fontSize="medium" />,
                href: "https://www.linkedin.com/company/vihi-it-solutions/",
              },
              {
                icon: <InstagramIcon fontSize="medium" />,
                href: "https://instagram.com",
              },
            ].map((item, i) => (
              <IconButton
                key={i}
                href={item.href}
                target="_blank"
                sx={{
                  color: "#333",
                  p: 0.7,
                  "&:hover": { color: "#ffc720" },
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
