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
import { motion } from 'framer-motion';

// Helper component for the slide animation using Framer Motion
function HideOnScroll(props) {
  const { children, window } = props;

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
    hidden: { y: '-120%', transition: { duration: 0.2, ease: 'easeIn' } },
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <motion.header
      initial="visible"
      animate={trigger ? 'hidden' : 'visible'}
      variants={headerVariants}
      style={{
        position: 'fixed',
        top: 10,
        left: '20%',
        transform: 'translateX(-50%)',
        zIndex: 1100,
        backgroundColor: '#fff',
        boxShadow: '0px 3px 3px #3f3f3f8e',
        width: 'auto', // let content define width
        borderRadius: '20px',
      }}
    >
      {children}
    </motion.header>
  );
}

const Header = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Vihi IT Solutions', href: '/' },
    { name: 'Design', href: '/design' },
    { name: 'Marketing', href: '/marketing' },
    { name: 'Technology', href: '/technology' },
    { name: 'Careers', href: '/careers' },
    { name: 'Expertise', href: '/expertise' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton color="inherit" aria-label="close drawer">
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <HideOnScroll {...props}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          position: 'static',
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
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#fff' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Typography
                component={Link}
                href="/"
                variant="body1"
                sx={{
                  color: '#000',
                  textDecoration: 'none',
                  fontWeight: 500,
                  backgroundColor: '#fff',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  '&:hover': {
                    color: '#ffcc00',
                  },
                }}
              >
                Vihi IT Solutions
              </Typography>
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
                  backgroundColor: '#ffcc00',
                  color: '#1E1E1E',
                  borderRadius: '20px',
                  padding: '8px 20px',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#e6b800',
                  },
                }}
              >
                Contact Us
              </Button>
            </>
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
              width: 240,
              backgroundColor: '#1E1E1E',
              color: '#fff',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </HideOnScroll>
  );
};

export default Header;
