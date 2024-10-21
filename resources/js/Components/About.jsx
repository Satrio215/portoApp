import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import GitHubCalendar from 'react-github-calendar';

const content = [
    "About Me",
    "Welcome to my portfolio! I'm a dedicated backend developer with a strong passion for coding and solving complex problems through efficient and scalable solutions. With a solid background in languages like PHP, Java, and JavaScript, I enjoy working on innovative projects that push the boundaries of technology. I'm always eager to learn new tools, frameworks, and methodologies to stay updated with the latest industry trends. Whether it’s improving performance, optimizing databases, or integrating APIs, I thrive on crafting clean, maintainable code. Feel free to explore my projects, and don't hesitate to connect with me for collaborations or discussions!",
   
];

const About = () => {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start start", "end end"],
    });

    const totalWords = content.reduce((acc, line) => acc + line.split(" ").length, 0);
    let wordCounter = 0;
    
    return (
        <>
        <section
            ref={target}
            className="w-full relative rounded-t-3xl  h-[300vh] bg-black justify-center"
            >
            <div className="h-screen sticky top-0 flex-col items-center justify-center pt-40">
                <div className="max-w-7xl mx-auto lg:px-0 px-2">
                    {content.map((item, lineIndex) => {
                        const words = item.split(" ");
                        return (
                            <p key={lineIndex} className={` ${lineIndex==2?'text-end  w-fit ms-auto':''} flex flex-wrap font-bold lg:mb-4 ${lineIndex===0||lineIndex===2?'font-kampungbudaya text-lg lg:text-5xl font-bold':"font-jakarta text-base lg:text-lg"}`}>
                                {words.map((word, wordIndex) => {
                                    const start = wordCounter / totalWords;
                                    const end = (wordCounter + 1) / totalWords;
                                    wordCounter++;
                                    return (
                                        <Word 
                                        key={`${lineIndex}-${wordIndex}`} 
                                        range={[start, end]} 
                                        progress={scrollYProgress}
                                        >
                                            {word}
                                        </Word>
                                    );
                                })}
                            </p>
                        );
                    })}
                </div> 
                <div className="py-8 px-8">         
                    <div className="flex justify-center w-full md:w-auto rounded-xl px-6 py-8 border border-gray-400 md:max-w-4xl mx-auto">
                            <GitHubCalendar style={{ color: 'white' }} username="Satrio215" />
                    </div>
                </div>   

            </div>
        </section>
        
</>
    );
};

const Word = ({ children, range, progress }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    const y = useTransform(progress, range, [20, 0]);
    
    return (
        <span className="lg:mr-2 mr-2 mt-2 lg:mt-2 relative inline-block">
            <motion.span style={{ opacity, y }} className="absolute text-white">
                {children}
            </motion.span>
            <span className="opacity-15 text-white">{children}</span>
        </span>
    );
};

export default About;

