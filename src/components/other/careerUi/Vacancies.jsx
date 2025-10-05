'use client';

import React, { useState, useRef } from 'react';
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
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion, AnimatePresence } from 'framer-motion';
import { jobVacancies } from '@/lib/jobVacancies'; // adjust path as needed

export default function Vacancies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredJob, setHoveredJob] = useState(null);
  const jobRefs = useRef({});

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

  const itemVariants = {
    hidden: { y: 18, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.42 } },
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
              borderRadius: 3,
              backgroundColor: '#f8f8f8',
            },
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
      <Box sx={{ width: '100%', mx: 'auto' }}>
        {filteredJobs.map((job) => {
          const isOpen = hoveredJob === job.id;

          return (
            <motion.div
              key={job.id}
              ref={(el) => (jobRefs.current[job.id] = el)}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              onMouseEnter={() => setHoveredJob(job.id)}
              onMouseLeave={() => setHoveredJob(null)}
              style={{ width: '100%' }}
            >
              <Card
                sx={{
                  mb: 0,
                  boxShadow: 'none',
                  borderRadius: 0,
                  borderBottom: '1px solid #ddd',
                  bgcolor: '#fff',
                  width: '100%',
                  py: 3
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
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#999',
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
                        sx={{ fontWeight: 600, color: '#111', fontSize: { xs: '1.3rem', md: '1.5rem' } }}
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

                  {/* Animated Arrow with MUI Icon */}
                  <motion.div
                    initial={false}
                    animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      cursor: 'pointer',
                      marginLeft: '1rem',
                      border: `1px solid ${isOpen ? '#111' : '#ccc'}`,
                      backgroundColor: isOpen ? '#111' : 'transparent',
                      transition: 'all 0.12s ease',
                    }}
                  >
                    <ArrowForwardIosIcon
                      sx={{
                        fontSize: '1rem',
                        color: isOpen ? '#fff' : '#666',
                        transition: 'color 0.2s ease',
                      }}
                    />
                  </motion.div>
                </CardContent>

                {/* Expandable Details on Hover */}
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
