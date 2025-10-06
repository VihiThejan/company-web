'use client';

import React, { useState, useEffect, useRef } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { usePathname } from 'next/navigation';
import customTheme from '@/theme/theme';

function HideOnScroll({ children, isMobile }) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10 || currentScrollY < lastScrollY) setShow(true);
      else setShow(false);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
        initial={{ y: 0 }}
        animate={show ? { y: 0 } : { y: '-140%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
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
  const containerRef = useRef(null);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const handleNavClick = () => setMobileOpen(false);

  const navItems = [
    { name: 'Products', href: '/design' },
    { name: 'Marketing', href: '/marketing' },
    { name: 'Technology', href: '/technology' },
    { name: 'Careers', href: '/careers' },
    { name: 'Expertise', href: '/expertise' },
  ];

  // ===== CURVED CIRCLE REVEAL ANIMATION =====
  const sidebarVariants = {
    open: {
      clipPath: 'circle(150% at 84.5% 6.5%)',
      transition: {
        type: 'spring',
        stiffness: 25,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: 'circle(0px at 84.5% 6.5%)',
      transition: {
        delay: 0.1,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const drawerContent = (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        color: '#000',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top logo + close */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <IconButton
          component={Link}
          href="/"
          color="inherit"
          sx={{ p: 0 }}
          onClick={handleNavClick}
        >
          <Image
            src="/images/logo-symbol.jpeg"
            alt="Company Logo"
            width={80}
            height={80}
          />
        </IconButton>

        <IconButton onClick={handleDrawerToggle}>
          <CloseRoundedIcon
            sx={{
              fontSize: 32,
              border: `1px solid ${customTheme.palette.secondary.main}`,
              padding: 1.5,
              width: 50,
              height: 50,
              borderRadius: '60px',
              color: customTheme.palette.secondary.main,
            }}
          />
        </IconButton>
      </Box>

      {/* Navigation links */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              onClick={handleNavClick}
              sx={{
                textAlign: 'left',
                py: 1.2,
                color:
                  pathname === item.href
                    ? customTheme.palette.secondary.main
                    : '#1d1d1dff',
                fontWeight: pathname === item.href ? 700 : 500,
                gap: 1,
              }}
            >
              {pathname === item.href && (
                <FiberManualRecordIcon
                  sx={{
                    fontSize: 10,
                    color: customTheme.palette.primary.main,
                  }}
                />
              )}
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{ fontSize: '1.2rem' }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Contact Us below links */}
      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          component={Link}
          href="/contactus"
          onClick={handleNavClick}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: '#1E1E1E',
            borderRadius: '50px',
            padding: '10px 25px',
            fontWeight: 500,
            width: '100%',
            '&:hover': { backgroundColor: '#F5A40ECF' },
          }}
        >
          Contact Us
        </Button>
      </Box>
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
        }}
      >
        <Toolbar
          sx={{
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
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
              <IconButton component={Link} href="/" sx={{ p: 0 }}>
                <Image
                  src="/images/logo-symbol.jpeg"
                  alt="Logo"
                  width={55}
                  height={55}
                />
              </IconButton>

              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  color: customTheme.palette.secondary.main,
                  padding: 1.5,
                  width: 50,
                  height: 50,
                  borderRadius: '60px',
                  border: `1px solid ${customTheme.palette.secondary.main}`,
                }}
              >
                {mobileOpen ? (
                  <CloseRoundedIcon sx={{ fontSize: 30 }} />
                ) : (
                  <MenuRoundedIcon sx={{ fontSize: 32 }} />
                )}
              </IconButton>
            </Box>
          ) : (
            // Desktop layout (untouched)
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <IconButton component={Link} href="/" sx={{ p: 0 }}>
                <Image
                  src="/images/logo-symbol.jpeg"
                  alt="Logo"
                  width={40}
                  height={45}
                />
              </IconButton>

              <Box sx={{ display: 'flex', gap: 1.2, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <Box key={item.name} sx={{ position: 'relative', px: 1 }}>
                    <Typography
                      component={Link}
                      href={item.href}
                      variant="body1"
                      sx={{
                        color: customTheme.palette.secondary.main,
                        textDecoration: 'none',
                        fontWeight: pathname === item.href ? 500 : 300,
                        fontSize: '1rem',
                      }}
                    >
                      {item.name}
                    </Typography>
                    <AnimatePresence>
                      {pathname === item.href && (
                        <motion.span
                          layoutId="nav-dot"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 50,
                          }}
                          style={{
                            position: 'absolute',
                            left: '45%',
                            transform: 'translateX(-50%)',
                            bottom: -16,
                          }}
                        >
                          <FiberManualRecordIcon
                            sx={{
                              fontSize: 10,
                              color: customTheme.palette.primary.main,
                            }}
                          />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Box>
                ))}
              </Box>

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
                  '&:hover': { backgroundColor: '#eebf05ff' },
                }}
              >
                Contact Us
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer with Circular ClipPath Animation */}
      <AnimatePresence>
        {mobileOpen && (
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                width: '100vw',
                height: '100vh',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                overflow: 'hidden',
              },
            }}
          >
            <motion.div
              key="drawer-curve"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#fff',
                position: 'absolute',
                top: 0,
                right: 0,
                overflow: 'hidden',
              }}
            >
              {drawerContent}
            </motion.div>
          </Drawer>
        )}
      </AnimatePresence>
    </HideOnScroll>
  );
};

export default Header;
