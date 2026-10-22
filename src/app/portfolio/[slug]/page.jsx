'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Typography,
  Button,
  Divider,
  Breadcrumbs,
  Link as MUILink,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { projectData } from '@/lib/projectData';
import theme from '@/theme/theme';


export default function ProjectDetails({ params }) {
  const cusTheme = useTheme();
  const isMobile = useMediaQuery(cusTheme.breakpoints.down('sm'));
  const router = useRouter();

  // ✅ Unwrap the Promise-based params
  const unwrappedParams = React.use(params);
  const { slug } = unwrappedParams;

  const project = projectData[slug];

  if (!project) {
    return (
      <Box sx={{ textAlign: 'center', py: 10 }}>
        <Typography variant="h5">Project not found.</Typography>
        <Button onClick={() => router.push('/portfolio')} sx={{ mt: 2 }}>
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        background: '#fff',
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          // mt: { xs: 5, md: 5 },
          height: {
            xs: '28vh',
            xss: '20vh',
            sm: '50vh',
            md: '25vh',
            mdl: '15vh',
            mdll: '35vh',
            lg: '15vh',
            lgl: '25vh',
          },
          display: 'flex',
          alignItems: 'end',
          justifyContent: 'flex-start',
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        {isMobile ? (
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => router.back()}
              sx={{
                my: 3,
                color: '#333',
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': { color: '#000' },
              }}
            >
              Portfolio
            </Button>
          </Box>
        ) : (
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            sx={{ textAlign: 'left' }}
          >
            <MUILink
              underline="hover"
              color="inherit"
              onClick={() => router.push('/portfolio')}
              sx={{ cursor: 'pointer', fontWeight: 500 }}
            >
              Portfolio
            </MUILink>
            <Typography color="text.primary" sx={{ fontWeight: 600 }}>
              {project.title}
            </Typography>
          </Breadcrumbs>
        )}
      </Box>

      {/* Header */}
      <Box sx={{ textAlign: 'left', mb: { xs: 5, md: 5 } }}>
        {project.companyLogo && (
          <Box>
            <Box
              component="img"
              src={project.companyLogo}
              alt={project.title}
              sx={{
                width: '150px',
                height: '150px',
                objectFit: 'cover',
              }}
            />
          </Box>
        )}
        <Typography
          component="h1"
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 1.5,
            color: '#222',
            fontSize: { xs: '1.8rem', lg: '2.4rem' },
          }}
        >
          {project.title}
        </Typography>

        <Typography sx={{ color: '#2c2c2cff', mb: 2 }}>
          <strong>Industry:</strong> {project.industry}
        </Typography>

        <Typography
          sx={{ fontSize: '1rem', color: '#555', textAlign: 'justify' }}
        >
          {project.shortDescription}
        </Typography>
      </Box>
      {/* Project Image */}
      <Box
        component="img"
        src={project.image}
        alt={project.title}
        sx={{
          width: '100%',
          height: { xs: 240, sm: 360, md: 420 },
          objectFit: 'cover',
          borderRadius: 3,
          boxShadow: 'none',
          mb: 5,
        }}
      />

      {/* Project Sections */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {[
          { title: 'Introduction', content: project.introduction },
          { title: 'Problem Statement', content: project.problem },
          { title: 'Objectives', content: project.objectives },
          { title: 'Our Solution', content: project.solution },
          project.keyComponents && {
            title: 'Key Supporting Components',
            content: project.keyComponents,
          },
        ]
          .filter(Boolean)
          .map((section, i) => (
            <Section key={i} title={section.title} content={section.content} />
          ))}
      </Box>
    </Box>
  );
}

function Section({ title, content }) {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          color: theme.palette.secondary.main,
          mb: 1,
          fontSize: { xs: '1.1rem', md: '1.25rem' },
        }}
      >
        {title}
      </Typography>
      <Divider sx={{ borderBottomWidth: 1, borderColor: '#0000002f', mb: 2 }} />
      <Typography
        sx={{
          fontSize: { xs: '0.95rem', md: '1rem' },
          color: '#555',
          lineHeight: 1.7,
          textAlign: 'justify',
          whiteSpace: 'pre-line',
        }}
      >
        {content}
      </Typography>
    </Box>
  );
}
