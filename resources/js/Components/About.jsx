import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import GitHubCalendar from 'react-github-calendar';

const content = [
    "About Me",
    "Welcome to my portfolio! I’m a Computer Science student at Brawijaya University with a strong focus on backend development and a passion for creating efficient, scalable solutions. Specializing in PHP, Java, and JavaScript, I’m expanding my expertise toward full-stack development by exploring both frontend and backend technologies. I aim to build clean, optimized, and maintainable code while tackling complex challenges such as database optimization and performance improvements. My goal is to contribute to impactful projects that blend both functionality and design, ensuring seamless integration between the front and back ends. I’m always excited to collaborate, share knowledge, and connect with others to push the boundaries of innovation in the tech world. Feel free to explore my work, and let’s connect if you’re interested in collaborating or discussing potential projects!",
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
            <div className="h-screen sticky top-0 flex-col items-center justify-center py-8 md:px-36 px-4">
                <div className="mx-auto md:px-32">
                    {content.map((item, lineIndex) => {
                        const words = item.split(" ");
                        return (
                            <motion.p
                                key={lineIndex}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: lineIndex * 0.2 }}
                                viewport={{ once: true }}
                                className={`flex flex-wrap font-bold lg:mb-4 pb-4 ${lineIndex === 0 ? 'text-4xl lg:text-6xl' : 'text-base lg:text-lg font-light'}`}
                            >
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
                            </motion.p>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="md:px-32 sm:px-8 py-2"
                >
                    <h3 className="text-white font-semibold text-3xl mb-4 pb-4">Experience</h3>
                    <div className="marqueeWrapper overflow-hidden">
                        <div className="marquee">
                            <div className="marquee__content " style={{ '--duration': '80s' }}>
                                {pengalamans.map((pengalaman, index) => (
                                    <motion.li
                                        key={pengalaman.id}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="mb-4 p-4 bg-zinc-900 rounded-xl flex-grow md:w-5/12 lg:w-3/12 mr-4"
                                    >
                                        <h4 className="font-semibold pb-4">{pengalaman.judul}</h4>
                                        <p className="font-extralight text-sm">{pengalaman.mulai} - {pengalaman.selesai}</p>
                                        <p>{pengalaman.keterangan}</p>
                                    </motion.li>
                                ))}
                            </div>
                            <div className="marquee__content" style={{ '--duration': '80s' }} aria-hidden="true">
                                {pengalamans.map((pengalaman, index) => (
                                    <motion.li
                                        key={`${pengalaman.id}-duplicate`}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="mb-4 p-4 bg-zinc-900 rounded-xl flex-grow md:w-5/12 lg:w-3/12 mr-4"
                                    >
                                        <h4 className="font-semibold pb-4">{pengalaman.judul}</h4>
                                        <p className="font-extralight text-sm">{pengalaman.mulai} - {pengalaman.selesai}</p>
                                        <p>{pengalaman.keterangan}</p>
                                    </motion.li>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center py-2 px-8"
                >
                    <div className="w-full md:w-auto px-6 py-6 bg-zinc-900 rounded-xl text-center md:mr-4 mb-4 md:mb-0">
                        <a href="https://github.com/Satrio215" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/asset/profile.png"
                                alt="Profile"
                                className="rounded-full w-24 h-24 mx-auto mb-4 border-2 border-gray-500 grayscale hover:grayscale-0 transition duration-300"
                            />
                        </a>
                        <p className="text-neutral-50">
                            <a href="https://github.com/Satrio215" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">
                                Check out my GitHub Profile
                            </a>
                        </p>
                        <p className="text-neutral-50">
                            Don't Forget to Follow
                        </p>
                    </div>
                    <div className="w-full md:w-auto px-8 py-6 bg-zinc-900 rounded-xl">
                        <GitHubCalendar style={{ color: 'white' }} username="Satrio215" />
                    </div>
                </motion.div>
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
