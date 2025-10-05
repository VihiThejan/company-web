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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import customTheme from '@/theme/theme';

// Helper component for the slide animation using Framer Motion
function HideOnScroll({ children, isMobile }) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setShow(true);
      } else if (currentScrollY < lastScrollY) {
        setShow(true);
      } else {
        setShow(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const headerVariants = {
    visible: { y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    hidden: { y: '-140%', transition: { duration: 0.8, ease: 'easeIn' } },
  };

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
        animate={show ? 'visible' : 'hidden'}
        variants={headerVariants}
        style={{
          zIndex: 1100,
          backgroundColor: '#fff',
          boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
          borderRadius: '50px',
          width: isMobile ? '90%' : '70%',
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
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
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
            src="/images/logo-symbol.jpeg"
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
                color: pathname === item.href ? customTheme.palette.secondary.main : '#1d1d1dff',
                fontWeight: pathname === item.href ? 700 : 500,
                background: 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                position: 'relative',
              }}
            >
              <AnimatePresence>
                {pathname === item.href && (
                  <motion.span
                    layoutId="drawer-dot"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 4,
                    }}
                  >
                    <FiberManualRecordIcon
                      sx={{
                        fontSize: 12,
                        color: customTheme.palette.secondary.main,
                        mt: 0,
                      }}
                    />
                  </motion.span>
                )}
              </AnimatePresence>
              <ListItemText primary={item.name} sx={{ fontSize: '40px' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        component={Link}
        href="/contactus"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: '#1E1E1E',
          borderRadius: '50px',
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
                  src="/images/logo-symbol.jpeg"
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
              {/* Logo */}
              <IconButton
                component={Link}
                href="/"
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ color: '#fff', padding: 0 }}
              >
                <Image
                  src="/images/logo-symbol.jpeg"
                  alt="Menu"
                  width={40}
                  height={45}
                  style={{ cursor: 'pointer' }}
                />
              </IconButton>
              {/* Navigation Links */}
              <Box
                sx={{
                  display: 'flex',
                  gap: 1.2,
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                {navItems.map((item) => (
                  <Box
                    key={item.name}
                    sx={{
                      position: 'relative',
                      px: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      component={Link}
                      href={item.href}
                      variant="body1"
                      sx={{
                        color: customTheme.palette.secondary.main,
                        textDecoration: 'none',
                        fontWeight: pathname === item.href ? 500 : 200,
                        background: 'transparent',
                        fontSize: '1rem',
                        transition: 'color 0.2s',
                        pb: 0.5,
                      }}
                    >
                      {item.name}
                    </Typography>
                    {/* Animated dot below active link */}
                    <AnimatePresence>
                      {pathname === item.href && (
                        <motion.span
                          layoutId="nav-dot"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 30,
                          }}
                          style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            bottom: -8,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <FiberManualRecordIcon
                            sx={{
                              fontSize: 10,
                              color: customTheme.palette.secondary.main,
                              mt: 0,
                            }}
                          />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Box>
                ))}
              </Box>
              {/* Contact Us Button */}
              <Button
                variant="contained"
                component={Link}
                href="/contactus"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: '#1E1E1E',
                  borderRadius: '50px',
                  padding: '8px 20px',
                  fontSize: '1rem',
                  ml: 2,
                  '&:hover': {
                    backgroundColor: '#eebf05ff',
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