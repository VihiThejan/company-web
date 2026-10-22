'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
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
import { brand } from '@/theme/theme';
import BrandLogo from '@/components/common/BrandLogo';

// Phones and small tablets get the compact bar with a menu button; wider
// screens get the full link bar. Both are in the server-rendered HTML (so
// search engines see the navigation) and CSS decides which one shows.
const DESKTOP = 'mdll';
const showOnMobile = { xs: 'flex', [DESKTOP]: 'none' };
const showOnDesktop = { xs: 'none', [DESKTOP]: 'flex' };

function HideOnScroll({ children }) {
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
      <Box
        component={motion.header}
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
        sx={{
          zIndex: 1100,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: { xs: 'calc(100% - 32px)', [DESKTOP]: 'auto' },
          pointerEvents: 'auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

const Header = (props) => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const handleNavClick = () => setMobileOpen(false);

  const navItems = [
    { name: 'Technology', href: '/technology' },
    { name: 'Marketing', href: '/marketing' },
    { name: 'Design', href: '/design' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Careers', href: '/careers' },
    { name: 'Industries', href: '/industries' },
    { name: 'QA Services', href: '/qa-services' },
  ];

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
    <HideOnScroll {...props}>
      {/* Navigation Section */}
      <Box
        sx={{
          backgroundColor: brand.paper,
          border: `1px solid ${brand.line}`,
          boxShadow: '0 10px 30px -18px rgba(0,0,0,0.45)',
          borderRadius: mobileOpen ? '24px' : '999px',
          padding: { xs: '0px 8px 0 16px', [DESKTOP]: '4px 6px 4px 22px' },
          transition: 'border-radius 0.3s ease',
          width: { xs: '100%', [DESKTOP]: 'auto' },
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
              padding: { xs: '8px 0', [DESKTOP]: '6px 0' },
              minHeight: 'unset !important',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            {/* Mobile: logo and menu button */}
            <Box
              sx={{
                width: '100%',
                display: showOnMobile,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {/* Logo (Mobile Only) */}
              <Box
                component={Link}
                href="/"
                aria-label="VIHI IT Solutions home"
                onClick={() => setMobileOpen(false)}
                sx={{ color: brand.ink, display: 'flex' }}
              >
                <BrandLogo height={28} />
              </Box>

              {/* Toggle Button */}
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  color: brand.paper,
                  backgroundColor: brand.ink,
                  width: 44,
                  height: 44,
                  borderRadius: '999px',
                  '&:hover': { backgroundColor: brand.inkSoft },
                }}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <CloseRoundedIcon sx={{ fontSize: 26 }} />
                ) : (
                  <MenuRoundedIcon sx={{ fontSize: 26 }} />
                )}
              </IconButton>
            </Box>

            {/* Desktop: logo, links, contact */}
            <Box
              sx={{
                width: '100%',
                display: showOnDesktop,
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: { xs: 3, xl: 5 },
              }}
            >
              <Box
                component={Link}
                href="/"
                aria-label="VIHI IT Solutions home"
                sx={{ color: brand.ink, display: 'flex', mr: { xs: 1, xl: 2 } }}
              >
                <BrandLogo height={34} />
              </Box>
              <Box sx={{ display: 'flex', gap: { xs: 2, lgll: 3.5 }, alignItems: 'center' }}>
                {navItems.map((item) => (
                  <Box key={item.name} sx={{ position: 'relative', px: 1 }}>
                    <Typography
                      component={Link}
                      href={item.href}
                      variant="body1"
                      sx={{
                        color: pathname === item.href ? brand.ink : brand.steel,
                        textDecoration: 'none',
                        fontWeight: pathname === item.href ? 650 : 500,
                        fontSize: '0.95rem',
                        whiteSpace: 'nowrap',
                        transition: 'color 0.2s ease',
                        '&:hover': { color: brand.ink },
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
                            left: 0,
                            right: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            bottom: -12,
                          }}
                        >
                          <FiberManualRecordIcon
                            sx={{
                              fontSize: 7,
                              color: brand.ink,
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
                  background: brand.ink,
                  color: brand.paper,
                  borderRadius: '999px',
                  padding: '10px 22px',
                  fontSize: '0.95rem',
                  whiteSpace: 'nowrap',
                  ml: 1,
                  '&:hover': { backgroundColor: brand.inkSoft },
                }}
              >
                Contact us
              </Button>
            </Box>
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
                  backgroundColor: brand.paper,
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    display: { xs: 'block', [DESKTOP]: 'none' },
                    pt: 1,
                    pb: 2,
                    pr: 1,
                    borderTop: `1px solid ${brand.line}`,
                  }}
                >
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
                            color: pathname === item.href ? brand.ink : brand.steel,
                            borderRadius: '12px',
                            gap: 1,
                          }}
                        >
                          {pathname === item.href && (
                            <FiberManualRecordIcon
                              sx={{
                                fontSize: 8,
                                color: brand.ink,
                              }}
                            />
                          )}
                          <ListItemText
                            primary={item.name}
                            primaryTypographyProps={{
                              fontSize: '1.1rem',
                              fontWeight: pathname === item.href ? 650 : 500,
                            }}
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
                        background: brand.ink,
                        color: brand.paper,
                        borderRadius: '999px',
                        padding: '12px 25px',
                        fontWeight: 600,
                        width: '100%',
                        '&:hover': { backgroundColor: brand.inkSoft },
                      }}
                    >
                      Contact us
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
