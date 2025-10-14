import { RxTriangleDown } from "react-icons/rx";
import { GiFlexibleStar } from "react-icons/gi";
import { FaBitcoin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../Utilies/motion";


import React from 'react'

const Companysection = () => {
  return (
    <motion.section
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }} 
    id="company" className='relative overflow-hidden 
    bg-gradient-to-br from-blue-50 to-puple-50 py-12 px-4 sm:py-16 md:py-12 lg:px-20'>
        <motion.div
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
         className="max-w-6xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl
                text-gray-900">
                    Why Our <span className="text-black font-bold">Company</span>
                    <span className="text-green-500"> ?</span>
                </h2>
                <div className="flex justify-center mt-4 space-x-2 text-2xl">
                    <RxTriangleDown className="text-red-500"/>
                    <RxTriangleDown className="text-green-600"/>
                    <RxTriangleDown className="text-blue-600"/>
                </div>
                <div className="flex flex-col items-center mt-4 text-gray-600 max-w-2xl mx-auto bg-red-400/10 p-4 rounded-lg text-center">
                <FaCogs className="text-blue-500 text-center items-center w-10 h-10 p-2"/>
                <p>At our company, we are committed to delivering excellence through innovative solutions, a customer-centric approach, and a team of experienced professionals dedicated to your success.</p>

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <GiFlexibleStar className="text-4xl text-red-500 mr-3"/>
                        <h3 className="text-xl font-semibold text-gray-800">Innovative Solutions</h3>
                    </div>
                    <p className="text-gray-600">We leverage cutting-edge technology to deliver innovative solutions that drive business success and efficiency.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <FaBitcoin className="text-4xl text-yellow-500 mr-3"/>
                        <h3 className="text-xl font-semibold text-gray-800">Customer-Centric Approach</h3>
                    </div>
                    <p className="text-gray-600">Our clients are at the heart of everything we do. We prioritize their needs and work closely to ensure satisfaction and success.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                        <FaCodepen className="text-4xl text-green-500 mr-3"/>
                        <h3 className="text-xl font-semibold text-gray-800">Experienced Team</h3>
                    </div>
                    <p className="text-gray-600">Our team of experts brings a wealth of experience and knowledge, ensuring that we deliver top-notch services and solutions.</p>
                </div>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Companysection