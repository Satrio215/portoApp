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
            className="py-8 bg-black text-white md:px-36"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <h2 className="text-4xl font-bold mb-8 md:px-32 px-4">My Project</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                {projeks.map((projek) => (
                    <motion.div
                        key={projek.id}
                        className="w-80 bg-zinc-900 rounded-lg overflow-hidden shadow-lg relative"
                        variants={itemVariants}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{ once: true }}
                    >
                        <div className="animated-border-box-glow absolute top-0 left-0 w-full h-full"></div>
                        <a href={projek.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden relative z-10">
                            <motion.img
                                src={projek.gambar}
                                alt={projek.judul}
                                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1 }}  // Added hover effect to scale the image
                            />
                        </a>
                        <div className="p-4">
                            <motion.h3
                                className="text-2xl font-semibold"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                {projek.judul}
                            </motion.h3>
                            <motion.p
                                className="mt-2 text-gray-400"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                {projek.keterangan}
                            </motion.p>
                            <motion.p
                                className="mt-4 text-sm text-gray-500"
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
                                        className="bg-white p-2 rounded-full justify-end group relative z-20" // Ensure z-index is above other content
                                        whileHover={{ scale: 1.2 }}  // Scaling effect applied on hover
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
                ))}
            </div>
        </motion.section>
    );
};

export default Projek;
