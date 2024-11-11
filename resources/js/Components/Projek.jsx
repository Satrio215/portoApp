import React from "react";
import { motion } from "framer-motion";

const Projek = ({ projeks }) => {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.section
            className="py-8 bg-black text-white md:px-36 pb-32"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <h2 className="text-5xl font-bold mb-8 md:px-32 px-4">My Project's</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                {projeks.map((projek) => (
                    <div className="relative w-80 rounded-lg overflow-hidden shadow-lg p-1">
                        {/* Border Animation */}
                        <div className="animated-border-box" />
                        <div className="animated-border-box-glow" />

                        <motion.div
                            key={projek.id}
                            className="relative w-full h-full bg-zinc-900 rounded-lg overflow-hidden"
                            variants={itemVariants}
                            whileInView="visible"
                            initial="hidden"
                            viewport={{ once: true }}
                        >
                            <a href={projek.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden relative z-10">
                                <motion.img
                                    src={projek.gambar}
                                    alt={projek.judul}
                                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.1 }}
                                />
                            </a>

                            <div className="p-4 relative z-10">
                                <motion.h3
                                    className="text-lg font-bold"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {projek.judul}
                                </motion.h3>

                                <motion.p
                                    className="text-gray-400"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    {projek.keterangan}
                                </motion.p>

                                <motion.p
                                    className="mt-8 text-sm text-gray-500"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    {projek.tech}
                                </motion.p>

                                {projek.link && (
                                    <motion.a
                                        href={projek.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-4"
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <motion.div
                                            className="bg-white p-2 rounded-full justify-end group relative z-20"
                                            whileHover={{ scale: 1.2 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <img
                                                src="/asset/link3.png"
                                                alt="View Project"
                                                className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
                                            />
                                        </motion.div>
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projek;
