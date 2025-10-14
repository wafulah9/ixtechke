import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { fadeIn, textVariant } from "../Utilies/motion";

const Footersection = () => {
    return (
        <motion.footer  
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        className="bg-gray-800 text-white py-10">
            <motion.div
                variants={textVariant(0.3)}
                initial="hidden"
                whileInView="show" 
            className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-4">IXTECHKE</h2>
                        <p className="text-gray-400">Your one-stop solution for tech services.</p>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                        <ul>
                            <li><a href="#homes" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#company" className="text-gray-400 hover:text-white">Company</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                            <li><a href="#contacts" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/ixtechke" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                            <a href="https://x.com/ixtechke?s=21" className="text-gray-400 hover:text-white"><BsTwitterX /></a>
                            <a href="https://www.linkedin.com/in/wafulaa-michael-03767a38a/" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
                            <a href="http://www.tiktok.com/@ixtechke" className="text-gray-400 hover:text-white"><FaTiktok  /></a>
                            <a href="https://wa.link/s7gof0" className="text-gray-400 hover:text-white"><FaSquareWhatsapp  /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h3>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="p-2 rounded-l-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition duration-300">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-10 text-center border-t border-gray-700 pt-6">
                    <p className="text-gray-400 text-sm">© {new Date().getFullYear()} IXTECHKE. All rights reserved.</p>
                </div>
            </motion.div>
        </motion.footer>
    );
};

export default Footersection;
