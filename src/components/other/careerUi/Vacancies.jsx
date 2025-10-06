'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  InputAdornment,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion, AnimatePresence } from 'framer-motion';
import { jobVacancies } from '@/lib/jobVacancies'; // adjust path as needed
import theme from '@/theme/theme';
import SearchIcon from '@mui/icons-material/Search';

export default function Vacancies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openJob, setOpenJob] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const collapseTimeout = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const filteredJobs = jobVacancies.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const expandVariants = {
    closed: { height: 0, opacity: 0, overflow: 'hidden' },
    open: {
      height: 'auto',
      opacity: 1,
      overflow: 'visible',
      transition: { duration: 0.34, ease: 'easeInOut' },
    },
  };

  const handleHover = (id) => {
    if (isMobile) return;
    if (collapseTimeout.current) clearTimeout(collapseTimeout.current);
    setOpenJob(id);
  };

  const handleLeave = (id) => {
    if (isMobile) return;
    collapseTimeout.current = setTimeout(() => {
      if (openJob === id) setOpenJob(null);
    }, 300);
  };

  const handleClickMobile = (id) => {
    if (!isMobile) return;
    setOpenJob(openJob === id ? null : id);
  };

  return (
    <Box sx={{ py: 0, px: { xs: 2, md: 4 }, bgcolor: '#fff', width: '100%' }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.9rem', md: '2.6rem' },
            color: '#111',
          }}
        >
          Our Current Opening Positions
        </Typography>
      </Box>

      {/* Search */}
      <Box sx={{ mb: 2, maxWidth: 600, mx: 'auto', width: '100%' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search job vacancies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '50px',
              backgroundColor: '#e7e7e7ff',
              '& fieldset': { border: 'none' },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'text.secondary' }} />
              </InputAdornment>
            ),
          }}
        />
        {searchTerm && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 1, display: 'block', textAlign: 'center' }}
          >
            Showing {filteredJobs.length} of {jobVacancies.length} vacancies
          </Typography>
        )}
      </Box>

      {/* Job List */}
      <Box sx={{ width: '100%', px: { sx: 0, md: 6 } }}>
        {filteredJobs.map((job) => {
          const isOpen = openJob === job.id;

          return (
            <motion.div
              key={job.id}
              onMouseEnter={() => handleHover(job.id)}
              onMouseLeave={() => handleLeave(job.id)}
              onClick={() => handleClickMobile(job.id)}
              style={{
                width: '100%',
                cursor: isMobile ? 'pointer' : 'default',
              }}
            >
              <Card
                sx={{
                  mb: 0,
                  boxShadow: 'none',
                  borderRadius: 0,
                  borderBottom: `1px solid ${theme.palette.secondary.main}`,
                  bgcolor: '#fff',
                  width: '100%',
                  py: 3,
                }}
              >
                {/* Job Summary */}
                <CardContent
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: { xs: 1, sm: 3 },
                    py: 3,
                  }}
                >
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.secondary.main,
                        mr: 3,
                        minWidth: 35,
                        fontWeight: 500,
                      }}
                    >
                      {job.number}
                    </Typography>

                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 500,
                          color: '#111',
                          fontSize: { xs: '1.3rem', md: '1.5rem' },
                        }}
                      >
                        {job.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                      >
                        {job.location} | {job.positions} Positions
                      </Typography>
                    </Box>
                  </Box>

                  {/* Chevron Button */}
                  <motion.div
                    initial={false}
                    animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      border: `1px solid ${
                        isOpen
                          ? theme.palette.primary.main
                          : theme.palette.secondary.main
                      }`,
                      backgroundColor: isOpen
                        ? theme.palette.primary.main
                        : 'transparent',
                      transition: 'all 0.12s ease',
                    }}
                  >
                    <ExpandMoreIcon
                      sx={{
                        fontSize: '1.2rem',
                        color: isOpen
                          ? theme.palette.secondary.main
                          : theme.palette.secondary.main,
                      }}
                    />
                  </motion.div>
                </CardContent>

                {/* Expandable Details */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={expandVariants}
                    >
                      <Divider />
                      <CardContent
                        sx={{ px: { xs: 2, md: 3 }, py: 3, bgcolor: '#fafafa' }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ mb: 3, lineHeight: 1.7, color: '#444' }}
                        >
                          {job.intro}
                        </Typography>

                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, mb: 2, color: '#222' }}
                          >
                            Key Responsibilities
                          </Typography>
                          <List dense>
                            {job.responsibilities.map((resp, i) => (
                              <ListItem key={i} sx={{ py: 0.3 }}>
                                <ListItemText
                                  primary={resp}
                                  sx={{
                                    '& .MuiListItemText-primary': {
                                      fontSize: '0.9rem',
                                      color: '#555',
                                    },
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Box>

                        <Box>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, mb: 2, color: '#222' }}
                          >
                            Benefits - Why Join Us
                          </Typography>
                          <List dense>
                            {job.benefits.map((benefit, i) => (
                              <ListItem key={i} sx={{ py: 0.3 }}>
                                <ListItemText
                                  primary={benefit}
                                  sx={{
                                    '& .MuiListItemText-primary': {
                                      fontSize: '0.9rem',
                                      color: '#555',
                                    },
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </Box>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          );
        })}
      </Box>

      {/* No Results */}
      {filteredJobs.length === 0 && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h6" color="text.secondary">
            No jobs found matching “{searchTerm}”
          </Typography>
        </Box>
      )}
    </Box>
  );
}
