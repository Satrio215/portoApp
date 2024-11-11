import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useSpring } from 'framer-motion';
import '../../css/styles.css'; 
import Lanyard from '@/Components/Lanyard'; 
import About from '@/Components/About'; 
import Projek from '@/Components/Projek';
import Skill from '@/Components/Skill';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';

const Welcome = ({ pengalamans, projeks }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div>
      <Navbar />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div id="lanyard">
        <Lanyard />
      </div>
      <div id="about">
        <About pengalamans={pengalamans}/>
      </div>
      <div id="projects">
        <Projek projeks={projeks}/>
      </div>
      <div id="skills">
        <Skill />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};
export default Welcome;
