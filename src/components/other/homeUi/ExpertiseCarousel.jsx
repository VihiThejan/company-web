import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import theme from '@/theme/theme';

const expertise = [
  {
    label: 'Tourism',
    desc: `Unlock your business growth potential. With over five years of experience in the education industry, we built digital strategies that connected that connect with student, parents and agents from around the world.`,
    image: '/images/home-img/education.jpg',
  },
  {
    label: 'Government',
    desc: `We support government and agencies with redesigning product services and digital engagement to deliver solutions that drive positive change across the economy.`,
    image: '/images/home-img/government.jpg',
  },
  {
    label: 'Finance',
    desc: `We support government and agencies with redesigning product services and digital engagement to deliver solutions that drive positive change across the economy.`,
    image: '/images/home-img/finance.jpg',
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
            sx={{
              position: 'relative',
              minHeight: `${cardHeight}px`,
              height: `${cardHeight}px`,
              width: '100%',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              overflow: 'hidden',
              // borderRadius: 3,
            }}
          >
            <Box
              component="img"
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
                  'linear-gradient(180deg, rgba(0, 0, 0, 0.71) 60%, rgba(0, 0, 0, 0.74) 100%)',
                zIndex: 2,
              }}
            />
            <Box
              sx={{
                position: 'relative',
                zIndex: 3,
                py: 3,
                px: {xs: 3, md: 5, lg: 10},
                width: { xs: '100%', md: '75%' },
                height: '100%',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <Box
                sx={{
                  // background:theme.palette.primary.main,
                  // color: theme.palette.primary.main,
                  color: '#fff',
                  borderRadius: 50,
                  // px: 4,
                  fontWeight: 700,
                  fontSize: {xs: '2.5rem', md:'3.5rem'},
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
  // ...existing code...
};

export default ExpertiseCarousel;
