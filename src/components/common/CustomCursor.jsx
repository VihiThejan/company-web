'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const CustomCursor = () => {
  const theme = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button, .clickable').forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button, .clickable').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: mousePos.x - (isHovering ? 20 : 10),
        y: mousePos.y - (isHovering ? 20 : 10),
        scale: isHovering ? 1.8 : 1,
        backgroundColor: isHovering
          ? theme.palette.primary.main
          : theme.palette.secondary.main,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 15,
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isHovering ? 40 : 20,
        height: isHovering ? 40 : 20,
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
      }}
    />
  );
};

export default CustomCursor;
