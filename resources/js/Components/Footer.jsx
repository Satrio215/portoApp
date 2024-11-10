import React from 'react';
import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <div className="flex flex-col items-center p-5 bg-gray-100">
            <div className="flex flex-col items-center mb-4">
                <h3 className="text-lg font-semibold pb-2">Reach Me</h3>
                <div className="flex gap-6">
                    <a href="https://github.com/Satrio215" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-3xl cursor-pointer transition-transform duration-300 transform hover:scale-125" />
                    </a>
                    <a href="https://www.instagram.com/mhsatrioa" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-3xl cursor-pointer transition-transform duration-300 transform hover:scale-125" />
                    </a>
                    <a href="mailto:satrio.ajinoto@gmail.com" rel="noopener noreferrer">
                        <FaEnvelope className="text-3xl cursor-pointer transition-transform duration-300 transform hover:scale-125" />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-satrio-ajinoto-4a9a3b231/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-3xl cursor-pointer transition-transform duration-300 transform hover:scale-125" />
                    </a>
                </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
                <p>&copy; 2024 Muhammad Satrio Ajinoto. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
