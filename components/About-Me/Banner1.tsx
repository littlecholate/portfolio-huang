import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

type Props = {};

export default function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  
    return (
      <>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <h1>
          <code>useScroll</code> with spring smoothing
        </h1>
      </>
    );
  }
