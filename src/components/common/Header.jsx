'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useScrollTrigger from '@mui/material/useScrollTrigger';

// Import motion from framer-motion
import { motion, AnimatePresence } from 'framer-motion';

// Helper component for the slide animation using Framer Motion
function HideOnScroll(props) {
  const { children, window, isMobile } = props;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const trigger = useScrollTrigger({
    target: window ? window : undefined,
    threshold: 100,
    disableHysteresis: true,
  });

  const headerVariants = {
    visible: { y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    hidden: { y: '-140%', transition: { duration: 0.8, ease: 'easeIn' } },
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        top: 20,
        left: 0,
        zIndex: 1100,
      }}
    >
      <motion.header
        initial="visible"
        animate={trigger ? 'hidden' : 'visible'}
        variants={headerVariants}
        style={{
          zIndex: 1100,
          backgroundColor: '#fff',
          boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
          borderRadius: '20px',
          width: isMobile ? '90%' : '60%',
          padding: '5px 15px',
        }}
      >
        {children}
      </motion.header>
    </Box>
  );
}

const Header = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Design', href: '/design' },
    { name: 'Products', href: '/design' },
    { name: 'Marketing', href: '/marketing' },
    { name: 'Technology', href: '/technology' },
    { name: 'Careers', href: '/careers' },
    { name: 'Expertise', href: '/expertise' },
  ];

  const drawerVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.5 } },
  };

  const drawerContent = (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#ffffffff',
        color: '#000000ff',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <IconButton
          component={Link}
          href="/"
          color="inherit"
          aria-label="home"
          sx={{ p: 0 }}
        >
          <Image
            src="/images/logo-trans.png" // Replace with your logo path
            alt="Company Logo"
            width={90}
            height={90}
            style={{ cursor: 'pointer' }}
          />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="close drawer"
          onClick={handleDrawerToggle}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              sx={{
                textAlign: 'left',
                padding: '10px 20px',
                '&:hover': {
                  color: '#ffe600ff',
                },
              }}
            >
              <ListItemText
                primary={item.name}
                sx={{ color: '#1d1d1dff', fontSize: '40px' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        component={Link}
        href="/contactus"
        sx={{
          backgroundColor: '#',
          color: '#1E1E1E',
          borderRadius: '5px',
          padding: '8px 20px',
          fontWeight: 300,
          '&:hover': {
            backgroundColor: '#F5A40ECF',
          },
        }}
      >
        Contact Us
      </Button>
    </Box>
  );

  return (
    <HideOnScroll {...props} isMobile={isMobile}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          position: 'static',
          width: '100%',
        }}
      >
        <Toolbar
          sx={{
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            [theme.breakpoints.down('md')]: {
              padding: '10px',
            },
          }}
        >
          {isMobile ? (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <IconButton
                component={Link}
                href="/"
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ color: '#000000ff', padding: 0 }}
              >
                <Image
                  src="/images/logo-trans.png" // Replace with your image path
                  alt="Menu"
                  width={60}
                  height={60}
                  style={{ cursor: 'pointer' }}
                />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: '#000000ff' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <IconButton
                component={Link}
                href="/"
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ color: '#fff', padding: 0 }}
              >
                <Image
                  src="/images/logo-trans.png" // Replace with your image path
                  alt="Menu"
                  width={80}
                  height={75}
                  style={{ cursor: 'pointer' }}
                />
              </IconButton>
              {navItems.slice(1).map((item) => (
                <Typography
                  key={item.name}
                  component={Link}
                  href={item.href}
                  variant="body1"
                  sx={{
                    color: '#1f1f1fff',
                    textDecoration: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      color: '#555554ff',
                    },
                  }}
                >
                  {item.name}
                </Typography>
              ))}
              <Button
                variant="contained"
                component={Link}
                href="/contactus"
                sx={{
                  backgroundColor: '#',
                  color: '#1E1E1E',
                  borderRadius: '5px',
                  padding: '8px 20px',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#e6b800',
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={
            typeof window !== 'undefined' ? window.document.body : undefined
          }
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '100vw',
              height: '100vh',
            },
          }}
        >
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                key="drawer"
                variants={drawerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#ffffffff',
                  color: '#ffffffff',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {drawerContent}
              </motion.div>
            )}
          </AnimatePresence>
        </Drawer>
      </nav>
    </HideOnScroll>
  );
};

export default Header;
