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
        pointerEvents: 'none',
      }}
    >
      <motion.header
        initial={{ y: 0 }}
        animate={
          show
            ? {
              y: 0,
              transition: { duration: 0.5, ease: 'easeInOut' },
            }
            : { y: '-140%' }
        }
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{
          zIndex: 1100,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: isMobile ? '0' : '15px',
          width: isMobile ? '90%' : 'auto',
          pointerEvents: 'auto',
        }}
      >
        {children}
      </motion.header>
    </Box>
  );
}

const Header = (props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('mdll'), { noSsr: true });
  const [hydrated, setHydrated] = useState(false);
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const handleNavClick = () => setMobileOpen(false);

  const navItems = [
    { name: 'Technology', href: '/technology' },
    { name: 'QA Services', href: '/qa-services' },
    { name: 'Marketing', href: '/marketing' },
    { name: 'Design', href: '/design' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Careers', href: '/careers' },
    { name: 'Industries', href: '/industries' },
  ];

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  // Smooth expand animation (box size only matches content height)
  const boxVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
  };

  return (
    <HideOnScroll {...props} isMobile={isMobile}>
      {/* Desktop: Separate Logo Section */}
      {!isMobile && (
        <Box
          sx={{
            backgroundColor: '#fff',
            boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
            borderRadius: '50px',
            padding: '15px 25px',
            display: 'flex',
            alignItems: 'center',
            height: 'fit-content',
          }}
        >
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/images/logo-new.png"
              alt="Logo"
              width={135}
              height={40}
              style={{ objectFit: 'contain' }}
            />
          </Link>
        </Box>
      )}

      {/* Navigation Section */}
      <Box
        sx={{
          backgroundColor: '#fff',
          boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
          borderRadius: mobileOpen ? '20px' : '50px',
          padding: isMobile ? '0px 15px' : '5px 15px',
          transition: 'border-radius 0.3s ease',
          width: isMobile ? '100%' : 'auto',
        }}
      >
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
                {/* Logo (Mobile Only) */}
                <IconButton
                  component={Link}
                  href="/"
                  sx={{ p: 0 }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Image
                    src="/images/logo-new.png"
                    alt="Logo"
                    width={135}
                    height={40}
                  />
                </IconButton>

                {/* Toggle Button */}
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{
                    color: customTheme.palette.secondary.main,
                    padding: 2,
                    width: 45,
                    height: 45,
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
              // Desktop layout (No Logo here)
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: { xs: 3, xl: 5 },
                }}
              >
                <Box sx={{ display: 'flex', gap: { xs: 3, xl: 5 }, alignItems: 'center' }}>
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
                    background: '#ffc720',
                    color: customTheme.palette.secondary.main,
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

          {/* Mobile Expanding Box Navigation */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                key="mobile-box"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={boxVariants}
                style={{
                  backgroundColor: '#fff',
                  overflow: 'hidden',
                }}
              >
                <Box sx={{ py: 3 }}>
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
                            primaryTypographyProps={{ fontSize: '1.1rem' }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>

                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      component={Link}
                      href="/contactus"
                      onClick={handleNavClick}
                      sx={{
                        background: '#ffc720',
                        color: customTheme.palette.secondary.main,
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
              </motion.div>
            )}
          </AnimatePresence>
        </AppBar>
      </Box>
    </HideOnScroll>
  );
};

export default Header;
