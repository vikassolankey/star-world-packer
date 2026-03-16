import React from 'react';
import { motion } from 'motion/react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const SectionWrapper = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = 'up' 
}: SectionWrapperProps) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: isMobile ? 20 : (direction === 'up' ? 40 : direction === 'down' ? -40 : 0),
      x: isMobile ? 0 : (direction === 'left' ? 40 : direction === 'right' ? -40 : 0),
      scale: direction === 'none' ? 0.95 : 1
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.5 : 0.8,
        delay: isMobile ? delay * 0.5 : delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
