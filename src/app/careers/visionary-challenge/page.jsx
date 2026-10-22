'use client';

import React from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Paper,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    IconButton,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import WorkIcon from '@mui/icons-material/Work';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import theme from '@/theme/theme';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function VisionaryChallengePage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const timelineSteps = [
        { date: 'January 16', label: 'Applications Open', icon: <RocketLaunchIcon sx={{ fontSize: '1.5rem' }} /> },
        { date: 'January 30', label: 'Applications Close (Submission Deadline)', icon: <DateRangeIcon sx={{ fontSize: '1.5rem' }} /> },
        { date: 'February 09', label: 'Top 10 Finalists Announced', icon: <CheckCircleOutlineIcon sx={{ fontSize: '1.5rem' }} /> },
        { date: 'February (Date TBD)', label: 'The Pitch Day Event (Finalist Presentations)', icon: <LightbulbIcon sx={{ fontSize: '1.5rem' }} /> },
        { date: 'Post-Event', label: 'Internship Offers & Project Kick-off', icon: <WorkIcon sx={{ fontSize: '1.5rem' }} /> },
    ];

    const tracks = [
        {
            category: 'Technology & Development',
            roles: ['Software Engineering', 'AI & Machine Learning (AI/ML)']
        },
        {
            category: 'Creative & Marketing',
            roles: ['Social Media Marketing', 'Content Creation', 'Video Editing', 'Graphic Design']
        }
    ];

    return (
        <Box sx={{ bgcolor: '#fff', color: '#111', pt: { xs: 8, md: 12 }, pb: 8 }}>
            <Container maxWidth="xl" sx={{ px: { xs: 2, md: 6 } }}>
                {/* Back Button */}
                <Box sx={{ mb: 4 }}>
                    <Button
                        component={Link}
                        href="/careers"
                        startIcon={<ArrowBackIcon />}
                        sx={{
                            color: '#666',
                            textTransform: 'none',
                            fontWeight: 600,
                            '&:hover': { color: theme.palette.primary.main, bgcolor: 'transparent' }
                        }}
                    >
                        Back to Careers
                    </Button>
                </Box>

                {/* Hero Section */}
                <motion.div {...fadeInUp}>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography
                            variant="overline"
                            sx={{ color: '#5E5E5E', fontWeight: 600, letterSpacing: 0, fontSize: '1rem' }}
                        >
                            Internship Program 2026
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                fontWeight: 800,
                                mb: 2,
                                color: '#111',
                            }}
                        >
                            The Vihi Visionary Challenge
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 4, fontWeight: 500, color: '#555' }}>
                            Don’t Just Intern. Innovate.
                        </Typography>
                        <Box
                            sx={{
                                display: 'inline-block',
                                bgcolor: '#f0f0f0',
                                px: 3,
                                py: 1,
                                borderRadius: '50px',
                                border: `2px solid ${theme.palette.primary.main}`,
                            }}
                        >
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                Status: <span style={{ color: 'green' }}>Open</span> | Application Period: Jan 16 – Jan 30, 2026
                            </Typography>
                        </Box>
                    </Box>
                </motion.div>

                {/* About the Program */}
                <motion.div {...fadeInUp}>
                    <Paper elevation={0} sx={{ p: { xs: 3, md: 6 }, bgcolor: '#F1F1EF', borderRadius: 4, mb: 8 }}>
                        <Typography component="h2" variant="h4" sx={{ mb: 3, fontWeight: 700 }}>About the Program</Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#444' }}>
                            Welcome to The Vihi Visionary Challenge—an internship program unlike any other. At Vihi IT
                            Solutions, we believe the best way to learn is by building.
                            <br /><br />
                            We are looking for the next generation of tech leaders, creative thinkers, and problem solvers.
                            Instead of a standard interview, we are asking you to pitch us an idea. If selected, you won’t
                            just work for us; you will work with our industry experts to turn your proposed project into a
                            real-world product during your internship.
                        </Typography>
                    </Paper>
                </motion.div>

                {/* Tracks & Timeline Combined Section */}
                <Grid container spacing={6} sx={{ mb: 15, justifyContent: 'space-between' }}>
                    {/* Left Side: Internship Tracks */}
                    <Grid item xs={12} lg={8}>
                        <Typography component="h2" variant="h4" sx={{ mb: 4, fontWeight: 800, color: '#000' }}>
                            Internship Tracks
                        </Typography>
                        <Grid container spacing={3}>
                            {tracks.map((track, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <motion.div {...fadeInUp} transition={{ delay: index * 0.1 }}>
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 4,
                                                borderRadius: 4,
                                                bgcolor: '#fff',
                                                border: `2px solid ${theme.palette.primary.main}22`,
                                                transition: 'all 0.4s ease',
                                                height: '100%',
                                                '&:hover': {
                                                    borderColor: theme.palette.primary.main,
                                                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
                                                    transform: 'translateY(-8px)'
                                                }
                                            }}
                                        >
                                            <Typography component="h3" variant="h5" sx={{ mb: 2, fontWeight: 700, color: theme.palette.primary.main }}>
                                                {track.category}
                                            </Typography>
                                            <List dense>
                                                {track.roles.map((role, i) => (
                                                    <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                                                        <ListItemIcon sx={{ minWidth: 32 }}>
                                                            <CheckCircleOutlineIcon sx={{ color: theme.palette.primary.main, fontSize: '1.2rem' }} />
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={role}
                                                            primaryTypographyProps={{ fontWeight: 600, color: '#444', variant: 'body2' }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Paper>
                                    </motion.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* Right Side: Advanced Timeline */}
                    <Grid item xs={12} lg={4}>
                        <Typography component="h2" variant="h4" sx={{ mb: 6, fontWeight: 800, color: '#000' }}>
                            The Timeline
                        </Typography>
                        <Box sx={{ position: 'relative', pl: 2 }}>
                            {/* Main vertical line with gradient effect */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: 45,
                                    top: 10,
                                    bottom: 10,
                                    width: 4,
                                    background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.primary.main}22)`,
                                    borderRadius: 2,
                                    zIndex: 0
                                }}
                            />

                            {timelineSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    {...fadeInUp}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            mb: 4,
                                            position: 'relative',
                                            zIndex: 1,
                                            alignItems: 'center'
                                        }}
                                    >
                                        {/* Node Icon */}
                                        <Box
                                            sx={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: '20px',
                                                bgcolor: '#fff',
                                                color: theme.palette.primary.main,
                                                border: `2px solid ${theme.palette.primary.main}`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mr: 4,
                                                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
                                                bgcolor: '#fff',
                                                transition: '0.3s',
                                                '&:hover': {
                                                    transform: 'scale(1.1) rotate(5deg)',
                                                    bgcolor: theme.palette.primary.main,
                                                    color: '#fff'
                                                }
                                            }}
                                        >
                                            {React.cloneElement(step.icon, { sx: { fontSize: '1.8rem' } })}
                                        </Box>

                                        {/* Content Box */}
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 3,
                                                borderRadius: 3,
                                                bgcolor: '#fcfcfc',
                                                border: '1px solid #eee',
                                                flexGrow: 1,
                                                transition: '0.3s',
                                                '&:hover': {
                                                    bgcolor: '#fff',
                                                    borderColor: theme.palette.primary.main,
                                                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                                                }
                                            }}
                                        >
                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    fontWeight: 700,
                                                    color: '#5E5E5E',
                                                    display: 'block',
                                                    mb: 0.5
                                                }}
                                            >
                                                {step.date}
                                            </Typography>
                                            <Typography variant="body1" sx={{ fontWeight: 700, color: '#111', fontSize: '1.05rem' }}>
                                                {step.label}
                                            </Typography>
                                        </Paper>
                                    </Box>
                                </motion.div>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                {/* How to Enter */}
                <Box sx={{ mb: 10 }}>
                    <Typography component="h2" variant="h4" sx={{ mb: 8, fontWeight: 800, textAlign: 'center', color: '#000' }}>
                        How to Enter (Step-by-Step)
                    </Typography>
                    <Grid container spacing={4}>
                        {/* Step 1 */}
                        <Grid item xs={12} md={6}>
                            <motion.div {...fadeInUp} style={{ height: '100%' }}>
                                <Paper sx={{ p: 4, borderRadius: 4, height: '100%', bgcolor: '#fff', border: `2px solid ${theme.palette.primary.main}33`, transition: '0.3s', '&:hover': { borderColor: theme.palette.primary.main, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' } }} elevation={0}>
                                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 700, color: theme.palette.primary.main }}>Step 1</Typography>
                                    <Typography component="h3" variant="h5" sx={{ mb: 1, fontWeight: 700 }}>The Brand Ambassador Task</Typography>
                                    <Typography variant="caption" sx={{ display: 'block', mb: 2, color: '#000', fontWeight: 700 }}>Mandatory</Typography>
                                    <Typography variant="body2" sx={{ mb: 2, color: '#666' }}>Before you apply, show us your engagement:</Typography>
                                    <List dense sx={{ mb: 3 }}>
                                        {[
                                            "Follow Vihi IT Solutions on LinkedIn and Facebook.",
                                            "Like our official competition post.",
                                            "Share the competition post on your timeline.",
                                            'Comment "Challenge Accepted" on the post.'
                                        ].map((text, i) => (
                                            <ListItem key={i} sx={{ px: 0 }}>
                                                <ListItemIcon sx={{ minWidth: 28 }}><CheckCircleOutlineIcon sx={{ fontSize: '1rem', color: theme.palette.primary.main }} /></ListItemIcon>
                                                <ListItemText primary={text} primaryTypographyProps={{ variant: 'body2', color: '#444' }} />
                                            </ListItem>
                                        ))}
                                    </List>
                                    <Box sx={{ mt: 'auto', display: 'flex', gap: 2 }}>
                                        <Button variant="outlined" startIcon={<LinkedInIcon />} href="https://linkedin.com/company/vihi-it-solutions" target="_blank" sx={{ textTransform: 'none', borderColor: theme.palette.primary.main, color: '#000', '&:hover': { bgcolor: theme.palette.primary.main } }}>LinkedIn</Button>
                                        <Button variant="outlined" startIcon={<FacebookIcon />} href="https://facebook.com/vihiitsolutions" target="_blank" sx={{ textTransform: 'none', borderColor: theme.palette.primary.main, color: '#000', '&:hover': { bgcolor: theme.palette.primary.main } }}>Facebook</Button>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>

                        {/* Step 2 */}
                        <Grid item xs={10} md={6}>
                            <motion.div {...fadeInUp} transition={{ delay: 0.1 }} style={{ height: '100%' }}>
                                <Paper sx={{ p: 4, borderRadius: 4, height: '100%', bgcolor: '#fff', border: `2px solid ${theme.palette.primary.main}33`, transition: '0.3s', '&:hover': { borderColor: theme.palette.primary.main, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' } }} elevation={0}>
                                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 700, color: theme.palette.primary.main }}>Step 2</Typography>
                                    <Typography component="h3" variant="h5" sx={{ mb: 1, fontWeight: 700 }}>Prepare Your Proposal</Typography>
                                    <Typography variant="body2" sx={{ mb: 2, color: '#444' }}>
                                        Create a Project Plan for an innovative business idea or IT product that you believe Vihi IT Solutions<br></br>  should build.
                                    </Typography>
                                    <Box sx={{ p: 2, bgcolor: '#F1F1EF', borderRadius: 2, mb: 2 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#111' }}>Format: PDF or Word Document</Typography>
                                    </Box>
                                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 700, color: '#111' }}>What to include:</Typography>
                                    <List dense>
                                        {['Project Title', 'The Problem', 'The Solution', 'Implementation (Tools/Tech Stack)'].map((item) => (
                                            <ListItem key={item} sx={{ px: 0 }}>
                                                <ListItemIcon sx={{ minWidth: 28 }}><CheckCircleOutlineIcon sx={{ fontSize: '1rem', color: theme.palette.primary.main }} /></ListItemIcon>
                                                <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', color: '#444' }} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Paper>
                            </motion.div>
                        </Grid>

                        {/* Step 3 */}
                        <Grid item xs={12} md={6}>
                            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} style={{ height: '100%' }}>
                                <Paper sx={{ p: 4, borderRadius: 4, height: '100%', bgcolor: '#fff', border: `2px solid ${theme.palette.primary.main}33`, transition: '0.3s', '&:hover': { borderColor: theme.palette.primary.main, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' } }} elevation={0}>
                                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 700, color: theme.palette.primary.main }}>Step 3</Typography>
                                    <Typography component="h3" variant="h5" sx={{ mb: 1, fontWeight: 700 }}>The "Visionary" Bonus</Typography>
                                    <Typography variant="caption" sx={{ display: 'block', mb: 2, color: '#5E5E5E', fontWeight: 700 }}>Optional</Typography>
                                    <Typography variant="body2" sx={{ mb: 3, color: '#444' }}>
                                        Record a short video (1–2 minutes) introducing yourself and explaining your idea.
                                    </Typography>
                                    <Box sx={{ p: 2, bgcolor: '#F1F1EF', borderRadius: 2, border: '1px dashed #A3A3A3' }}>
                                        <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#5E5E5E' }}>
                                            Note: This is not mandatory, but it significantly increases your chances of making the Top 10.
                                        </Typography>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>

                        {/* Step 4 */}
                        <Grid item xs={12} md={6}>
                            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} style={{ height: '100%' }}>
                                <Paper sx={{ p: 4, borderRadius: 4, height: '100%', bgcolor: '#fff', border: `2px solid ${theme.palette.primary.main}33`, transition: '0.3s', '&:hover': { borderColor: theme.palette.primary.main, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' } }} elevation={0}>
                                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 700, color: theme.palette.primary.main }}>Step 4</Typography>
                                    <Typography component="h3" variant="h5" sx={{ mb: 1, fontWeight: 700 }}>Submit Your Application</Typography>
                                    <Typography variant="body2" sx={{ mb: 2, color: '#444' }}>
                                        Email your entry to <strong>careers@vihiitsolutions.com</strong>
                                    </Typography>
                                    <Box sx={{ mb: 3 }}>
                                        <Typography variant="caption" sx={{ fontWeight: 700, color: '#888', mb: 0.5, display: 'block' }}>Subject line</Typography>
                                        <Typography variant="body2" sx={{ bgcolor: '#f0f0f0', p: 1.5, borderRadius: 1.5, fontFamily: 'monospace', fontSize: '0.85rem', color: '#111', border: '1px solid #ddd' }}>
                                            [Internship Application] - Your Name - Your Track
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>Attach:</Typography>
                                    <Grid container spacing={1}>
                                        {['CV / Resume', 'Project Plan', 'Video (Optional)'].map((item) => (
                                            <Grid item key={item}>
                                                <Box sx={{ px: 2, py: 0.5, bgcolor: '#f0f0f0', borderRadius: 5, fontSize: '0.75rem', fontWeight: 600 }}>{item}</Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Paper>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Box>

                {/* Selection Process */}
                <motion.div {...fadeInUp}>
                    <Box sx={{ mt: 8, mb: 12, textAlign: 'center' }}>
                        <Typography component="h2" variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Selection Process: The Pitch Day</Typography>
                        <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto', color: '#555', lineHeight: 1.8 }}>
                            After reviewing all entries, we will select the Top 10 Project Ideas. These finalists will be invited
                            to an exclusive event—The Pitch Day—where they will present their concepts to the Vihi IT Solutions
                            leadership team. The winners will be offered an internship position to bring their vision to life.
                        </Typography>
                    </Box>
                </motion.div>

                {/* Final CTA */}
                <motion.div {...fadeInUp}>
                    <Box
                        sx={{
                            textAlign: 'center',
                            p: { xs: 4, md: 8 },
                            borderRadius: 6,
                            bgcolor: '#fff',
                            color: '#111',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
                            border: `2px solid ${theme.palette.primary.main}`,
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Subtke bg accent */}
                        <Box sx={{ position: 'absolute', top: -100, right: -100, width: 300, height: 300, borderRadius: '50%', bgcolor: `${theme.palette.primary.main}11`, zIndex: 0 }} />

                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                            <Typography component="h2" variant="h3" sx={{ mb: 2, fontWeight: 800, fontSize: { xs: '2rem', md: '3rem' }, color: '#000' }}>Ready to build your future?</Typography>
                            <Typography variant="body1" sx={{ mb: 4, color: '#444', maxWidth: '600px', mx: 'auto' }}>
                                Take the first step towards becoming a tech visionary. Join the challenge today.
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<SendIcon />}
                                href="mailto:careers@vihiitsolutions.com"
                                sx={{
                                    bgcolor: theme.palette.primary.main,
                                    color: '#fff',
                                    fontWeight: 700,
                                    px: 6,
                                    py: 2,
                                    borderRadius: '50px',
                                    fontSize: '1.2rem',
                                    textTransform: 'none',
                                    boxShadow: 'none',
                                    '&:hover': { bgcolor: theme.palette.primary.option }
                                }}
                            >
                                Apply Now
                            </Button>
                        </Box>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}
