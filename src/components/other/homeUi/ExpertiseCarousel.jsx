import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import theme from '@/theme/theme';

const expertise = [
  {
    label: 'Tourism',
    desc: `We build engaging and user-friendly digital solutions that elevate the travel and tourism experience. Our services help tourism businesses attract, engage, and retain customers.`,
    image: '/images/home-img/home-tourism.webp',
  },
  {
    label: 'Government',
    desc: `We provide scalable and secure digital solutions that support efficient and transparent government operations. Our services align with regulatory standards and public sector requirements.`,
    image: '/images/home-img/home-govenment.webp',
  },
  {
    label: 'Finance',
    desc: `We deliver secure, reliable, and compliant digital solutions tailored for the financial sector. Our services help financial institutions enhance operational efficiency while protecting sensitive data.`,
    image: '/images/home-img/home-finance.webp',
  },
];

// Duplicate first item at the end for seamless looping
const expertiseLoop = [...expertise, expertise[0]];
const cardHeight = 380; // px

const ExpertiseCarousel = () => {
  const controls = useAnimation();
  const intervalRef = useRef();
  const indexRef = useRef(0);

  useEffect(() => {
    controls.start({ y: 0 });
    intervalRef.current = setInterval(() => {
      indexRef.current += 1;
      if (indexRef.current === expertiseLoop.length) {
        // Instantly reset to first item (no animation)
        controls.start({ y: 0, transition: { duration: 0 } });
        indexRef.current = 1;
        // Animate to second item (first real item)
        setTimeout(() => {
          controls.start({
            y: -cardHeight * indexRef.current,
            transition: { duration: 0.8, ease: 'easeInOut' },
          });
        }, 50);
      } else {
        controls.start({
          y: -cardHeight * indexRef.current,
          transition: { duration: 0.8, ease: 'easeInOut' },
        });
      }
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [controls]);

  // ...existing code...
  return (
    <Box
      className="hover-lift-shadow"
      sx={{
        width: '100%',
        height: `${cardHeight}px`,
        overflow: 'hidden',
        borderRadius: 3,
        boxShadow: 3,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <motion.div
        animate={controls}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {expertiseLoop.map((item, idx) => (
          <Box
            key={idx}
            className="hover-image-container"
            sx={{
              position: 'relative',
              minHeight: `${cardHeight}px`,
              height: `${cardHeight}px`,
              width: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              overflow: 'hidden',
              // borderRadius: 3,
            }}
          >
            <Box
              component="img"
              className="hover-image"
              src={item.image}
              alt={item.label}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(0, 0, 0, 0.6) 60%, rgba(0, 0, 0, 0.6) 100%)',
                zIndex: 2,
              }}
            />
            <Box
              sx={{
                position: 'relative',
                zIndex: 3,
                py: 3,
                px: { xs: 3, md: 5, lg: 10 },
                width: { xs: '100%', md: '75%' },
                height: '100%',
                color: theme.palette.secondary.light,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  color: theme.palette.secondary.light,
                  borderRadius: 50,
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  display: 'inline-block',
                  width: 'fit-content',
                }}
              >
                {item.label}
              </Box>
              <Typography
                variant="body3"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: '1rem', md: '1.05rem' },
                  lineHeight: 1.5,
                  color: theme.palette.secondary.light
                }}
              >
                {item.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </motion.div>
    </Box>
  );
};

export default ExpertiseCarousel;
