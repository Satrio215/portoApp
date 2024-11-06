import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import GitHubCalendar from 'react-github-calendar';

const content = [
    "About Me",
    "Welcome to my portfolio! I’m a Computer Science student at Brawijaya University, focused on backend development and passionate about creating efficient, scalable solutions. With expertise in PHP, Java, and JavaScript, I’m expanding my skills toward full-stack development, exploring both frontend and backend technologies. I enjoy tackling challenging projects, improving performance, optimizing databases, and building clean, maintainable code. Feel free to check out my work or connect for collaborations and discussions!",
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
                            <p key={lineIndex} className={` ${lineIndex === 2 ? 'text-end w-fit ms-auto' : ''} flex flex-wrap font-bold lg:mb-4 ${lineIndex === 0 || lineIndex === 2 ? 'text-4xl lg:text-6xl font-bold' : "text-base lg:text-lg"}`}>
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

                <div className="md:px-32 sm:px-8 py-2">
                    <h3 className="text-white font-bold text-4xl mb-4 pb-4">Experience</h3>
                    <div className="marqueeWrapper overflow-hidden">
                        <div className="marquee">
                            <div className="marquee__content pr-4" style={{ '--duration': '80s' }}>
                                {pengalamans.map((pengalaman, index) => (
                                    <li
                                        key={pengalaman.id}
                                        className={`mb-4 p-4 border border-gray-500 rounded-lg flex-grow md:flex-grow-0 md:w-5/12 lg:w-3/12 ${index < pengalamans.length - 1 ? 'mr-4' : ''}`}
                                    >
                                        <h4 className="font-semibold pb-4">{pengalaman.judul}</h4>
                                        <p className="font-extralight text-sm">{pengalaman.mulai} - {pengalaman.selesai}</p>
                                        <p>{pengalaman.keterangan}</p>
                                    </li>
                                ))}
                            </div>
                            <div className="marquee__content pr-4 " style={{ '--duration': '80s' }} aria-hidden="true">
                                {pengalamans.map((pengalaman, index) => (
                                    <li
                                        key={pengalaman.id}
                                        className={`mb-4 p-4 border border-gray-500 rounded-lg flex-grow md:flex-grow-0 md:w-5/12 lg:w-3/12 ${index < pengalamans.length - 1 ? 'mr-4' : ''}`}
                                    >
                                        <h4 className="font-semibold pb-4">{pengalaman.judul}</h4>
                                        <p className="font-extralight text-sm">{pengalaman.mulai} - {pengalaman.selesai}</p>
                                        <p>{pengalaman.keterangan}</p>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-8 px-8">
                    <div className="flex justify-center w-full md:w-auto rounded-xl px-6 py-8 border border-gray-500 md:max-w-4xl mx-auto">
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
