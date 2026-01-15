"use client";

import React from "react";
import { Box, Typography, IconButton, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { teamMembers, founder, leaders } from "@/lib/teamData";
import theme from "@/theme/theme";

export default function TeamList() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        px: { xs: 4, md: 4 },
        width: "100%",
        bgcolor: "#fff",
      }}
    >
      {/* === Founder Section === */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 4, md: 6 },
          mb: { xs: 8, md: 10 },
        }}
      >
        {/* Founder Image with Aspect Ratio */}
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", md: "40%" },
            maxWidth: 420,
            position: "relative",
            aspectRatio: "4 / 5",
            overflow: "hidden",
            borderRadius: 4,
            boxShadow: 4,
            backgroundColor: "#f5f5f5",
          }}
        >
          <Box
            component="img"
            src={founder.image}
            alt={founder.name}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              transition: "transform 0.4s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          />
        </Box>

        {/* Founder Text */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: "#222",
              fontSize: { xs: "1.8rem", md: "2.2rem" },
            }}
          >
            {founder.name}
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              mb: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: theme.palette.secondary.main,
                fontSize: { xs: "1rem", md: "1.2rem" },
              }}
            >
              {founder.role}
            </Typography>
            {founder.linkedin && (
              <IconButton
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.primary.option,
                  "&:hover": { color: theme.palette.secondary.main },
                }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            )}
          </Box>

          <Typography
            variant="body1"
            sx={{
              color: "#555",
              lineHeight: 1.7,
              mb: 3,
              textAlign: "justify",
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          >
            {founder.description}
          </Typography>
        </Box>
      </Box>

      {/* === Team Members Section === */}
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 700,
          mb: { xs: 2 },
          fontSize: { xs: "1.8rem", md: "2.5rem" },
        }}
      >
        Our Team
      </Typography>

      <Grid container spacing={{ xs: 3, md: 3 }} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2.4 }} key={index}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 3,
                bgcolor: "#fafafa",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  aspectRatio: "3 / 3",
                  overflow: "hidden",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <Box
                  component="img"
                  src={member.image}
                  alt={member.name}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    transition: "transform 0.4s ease",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                />
              </Box>

              {/* Text + LinkedIn */}
              <Box sx={{ px: 1.5, py: 1.5, flexGrow: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                    flexWrap: "wrap",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: "#222",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: "theme.palette.text.secondary",
                        fontSize: { xs: "0.75rem", md: "0.8rem" },
                      }}
                    >
                      {member.role}
                    </Typography>
                  </Box>
                  {member.linkedin && (
                    <IconButton
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: theme.palette.primary.option,
                        p: 0.5,
                        "&:hover": { color: theme.palette.secondary.main },
                      }}
                    >
                      <LinkedInIcon fontSize="medium" />
                    </IconButton>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
