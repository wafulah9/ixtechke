import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../Utilies/motion";
import { PiUsersThreeFill } from "react-icons/pi";
import { GiThink } from "react-icons/gi";
import { IoArrowForward } from "react-icons/io5";
import logoImage from '../assets/logoImage.jpg';

const Aboutsection = () => {
  return (
    <motion.section
        variants={fadeIn('up', 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
     id="about" className='relative overflow-hidden 
    bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:py-16 md:py-12 lg:px-20'>
        <motion.div 
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
        className='max-w-7xl mx-auto text-center'>
            <div className='text-center mb-6 md:mb-8'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>
                    About <span className='text-black font-bold'>Us</span>
                    <span>?</span>
                </h2>
            </div>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
                <div className='md:w-1/3'>
                    <img src={logoImage} alt="Company Logo" className='w-48 h-48 mx-auto rounded-full object-cover border-4 border-gray-300 shadow-lg'/>
                </div>
                <div className='md:w-2/3 text-left'>
                    <p className='text-gray-600 mb-4'>
                        At <span className='font-bold text-gray-800'>IX Tech KE</span>, we are passionate about leveraging technology to drive innovation and deliver exceptional solutions. Our team of dedicated professionals is committed to excellence, collaboration, and continuous learning.
                    </p>  
                    <p className='text-gray-600 mb-4'>
                        We believe in a customer-centric approach, working closely with our clients to understand their unique needs and challenges. By combining our expertise with cutting-edge technologies, we create tailored solutions that empower businesses to thrive in a rapidly evolving digital landscape.
                    </p>
                    <p className='text-gray-600'>
                        Join us on our journey as we explore new horizons, embrace challenges, and make a positive impact through technology.
                    </p>
                </div>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Aboutsection
