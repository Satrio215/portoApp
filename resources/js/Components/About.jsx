import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import GitHubCalendar from 'react-github-calendar';

const content = [
    "About Me",
    "Welcome to my portfolio! I'm a student at Brawijaya University, Faculty of Computer Science, and a dedicated backend developer with a strong passion for coding and solving complex problems through efficient, scalable solutions. With a solid background in languages like PHP, Java, and JavaScript, I’m now expanding my skills to become a full-stack developer, diving into both frontend and backend technologies. I enjoy working on innovative projects that push the boundaries of technology and am always eager to learn new tools, frameworks, and methodologies to stay updated with the latest industry trends. Whether it’s improving performance, optimizing databases, building intuitive interfaces, or integrating APIs, I thrive on crafting clean, maintainable code. Feel free to explore my projects, and don't hesitate to connect with me for collaborations or discussions!",
];

const About = ({ pengalamans }) => {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start start", "end end"],
    });

    const totalWords = content.reduce((acc, line) => acc + line.split(" ").length, 0);
    let wordCounter = 0;

    return (
        <section ref={target} className="w-full relative rounded-t-3xl h-[300vh] bg-black justify-center">
            <div className="h-screen sticky top-0 flex-col items-center justify-center py-8 px-8">
                <div className="mx-auto lg:px-32">
                    {content.map((item, lineIndex) => {
                        const words = item.split(" ");
                        return (
                            <p key={lineIndex} className={` ${lineIndex === 2 ? 'text-end  w-fit ms-auto' : ''} flex flex-wrap font-bold lg:mb-4 ${lineIndex === 0 || lineIndex === 2 ? 'text-4xl lg:text-5xl font-bold' : "text-base lg:text-lg"}`}>
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

                <div className="md:px-32 sm:px-8 py-8">
                    <h3 className="text-white font-bold text-4xl mb-4">Experience</h3>
                    <ul className="text-white flex flex-wrap gap-4">
                        {pengalamans.map((pengalaman) => (
                            <li 
                                key={pengalaman.id} 
                                className="mb-4 p-4 border border-gray-500 rounded-lg flex-grow md:flex-grow-0 md:w-5/12 lg:w-3/12"
                            >
                                <h4 className="font-semibold pb-4">{pengalaman.judul}</h4>
                                <p className="font-extralight text-sm">{pengalaman.mulai} - {pengalaman.selesai}</p>
                                <p>{pengalaman.keterangan}</p>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="py-8 px-8">
                    <div className="flex justify-center w-full md:w-auto rounded-xl px-6 py-8 border border-gray-400 md:max-w-4xl mx-auto">
                        <GitHubCalendar style={{ color: 'white' }} username="Satrio215" />
                    </div>
                </div>
            </div>
        </section>
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
