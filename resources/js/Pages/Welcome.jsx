import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useSpring } from 'framer-motion';
import '../../css/styles.css'; 
import Lanyard from '@/Components/Lanyard'; 
import About from '@/Components/About'; 
import Projek from '@/Components/Projek';
import Skill from '@/Components/Skill';
import Footer from '@/Components/Footer';

const Welcome = ({ pengalamans, projeks }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <About pengalamans={pengalamans}/>
      <Projek projeks={projeks}/>
      <Skill />
      <Footer />
    </div>
  );
};

createRoot(document.getElementById('root')).render(<Lanyard />);

export default Welcome;
