import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../Utilies/motion";
import { BsCalendar2HeartFill } from "react-icons/bs";
import { FaAppStore  } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

import HeroImage from '../assets/HeroImage.jpg';


const Hero = () => {
  return (
    <section id="homes" className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 container mx-auto">
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8 " id='homes'>
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" whileInView="show">
        </motion.div>
        <motion.h1 
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-4xl mt-1 lg:text-5xl font-bold leading-tight"
        >
         Technical Excellence{' '}
          <span className="text-blue-600 relative inline-block">
            Services
          </span>{' '}
            for a Digital World
        </motion.h1>

        <motion.div 
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col lg:grid lg:grid-cols-2 gap-4 
          lg:gap-48 items-center lg:items-start text-gray-600 max-w-md z-50">
            <div className='bg-white w-72  rounded-3xl p-6 border
            border-gray-100 shadow-xl lg:shadow-2xl transtion'>
              <a href="#app">
                <div className='ml-4 w-10 h-10 flex items-center justify-center
                rounded-lg bg-pink-100 mb-4 '>
                    <a href="#app"><CgWebsite  className='text-red-600'/></a>
                </div>
                <h3 className='text-lg font-semibold mb-2'>Web Development</h3>
                <p className='text-sm text-gray-600'>
                    Crafting responsive and dynamic websites that drive engagement and deliver seamless user experiences. <br></br>
                    <a href="https://digital-website-with-tailwin-react.vercel.app/" className='text-blue-700 underline text-2xl font-bold'>My work</a>
                </p>
                <div>
                </div>
              </a>
            </div>
            <a href="#app">
            <div className='bg-white w-72 rounded-3xl p-6 border 
            border-gray-100 shadow-xl lg:shadow-2xl transtion'>
                <div className='ml-4 w-10 h-10 flex items-center justify-center
                rounded-lg bg-blue-100 mb-4 '>  
                    <a href="#app"><FaAppStore   className='text-green-600'/></a>
                </div>
                <h3 className='text-lg font-semibold mb-2'>Mobile App Development</h3>
                <p className='text-sm text-gray-600'>
                    Developing intuitive mobile applications that enhance user engagement and streamline business processes.
                </p>
                <div>
                </div>
            </div>
            </a>
            
        </motion.div>

        <motion.div 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md"
        >
        </motion.div>
      </div>

      {/* Right Column - Images */}
      <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12 -z-50"
      >
        <div className="relative -z-50  mx-auto">
          <img
            src={HeroImage}
            alt="Team meeting"
            className="w-100 h-70 rounded-[60%_40%_30%_60%/60%_30%_70%_30%] relative z-10 hover:scale-110 transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
