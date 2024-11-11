import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaJava, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiMysql, SiPostman, SiVuedotjs } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, color: '#000000' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#000000' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#000000' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#000000' },
  { name: 'React', icon: <FaReact />, color: '#000000' },
  { name: 'Java', icon: <FaJava />, color: '#000000' },
  { name: 'GitHub', icon: <FaGithub />, color: '#000000' },
  { name: 'PHP', icon: <FaPhp />, color: '#000000' },
  { name: 'Laravel', icon: <FaLaravel />, color: '#000000' },
  { name: 'Postman', icon: <SiPostman />, color: '#000000' },
  { name: 'MySQL', icon: <SiMysql />, color: '#000000' },
  { name: 'Vue', icon: <SiVuedotjs />, color: '#000000' },
];

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-white py-10 md:px-32 px-4 text-center pt-16" ref={ref}>
      <h2 className="text-5xl font-bold text-black mb-5">Skill's</h2>
      <p className="text-gray-500 mb-10">These are the technologies and languages I’ve worked with</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white border border-black rounded-lg p-5 text-black flex flex-col items-center transition transform hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-4xl" style={{ color: skill.color }}>{skill.icon}</div>
            <span className="mt-3 text-lg">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
