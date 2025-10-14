import React, {useState} from 'react'
import { RxTriangleDown } from "react-icons/rx";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../Utilies/motion";

const Servicesection = () => {
    const[activeService, setActiveService] = useState(1);
    const services = [
        {
            id:1,
            type:"website",
            title: "Web Development",
            description: "Building responsive and dynamic websites tailored to your needs.",
            icon: "🌐"
        },
        {
            id:2,
            type:"app",   
            title: "Mobile App Development",
            description: "Creating user-friendly mobile applications for both Android and iOS platforms.",
            icon: "📱"
        },  
        {
            id:3,
            title: "UI/UX Design",
            description: "Designing intuitive and engaging user interfaces and experiences.",
            icon: "🎨"
        },
        {
            id:4,
            title: "Digital Marketing",
            description: "Enhancing your online presence through targeted marketing strategies.",
            icon: "📈"
        },  
        {
            id:5,
            title: "Cloud Solutions",
            description: "Offering scalable cloud services to optimize your business operations.",
            icon: "☁️"
        },
        {
            id:6,
            title: "E-commerce Solutions",
            description: "Developing robust e-commerce platforms to boost your sales.",
            icon: "🛒"
        }
    ];
  return (
    <motion.section 
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
    id='services' className="relative text-gray-600 body-font 
    bg-gradient-to-b from-gray-100 to-white py-12 px-4 sm:px16 lg:px-20
    md:px-20">
        <motion.div id='app'
        variants={textVariant(0.3)}
        initial="hidden"
        whileInView="show"
        className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-center text-center mb-12">
                <div  className='flex-1 max-w-2xl max-auto space-y-6
                mb-10 lg:mb-0'>
                    <div>
                        <h2 className='text-3xl sm:text-4xl md:text-5xl text-gray-900'>
                            Our{" "}
                            <span className='font-bold text-black '>
                                Services <span className='text-green-500'>.</span>
                            </span>
                        </h2>
                            <div className="flex justify-center mt-4 space-x-2 text-2xl">
                                <RxTriangleDown className="text-red-500"/>
                                <RxTriangleDown className="text-green-600"/>
                                <RxTriangleDown className="text-blue-600"/>
                            </div>
                    </div>
                </div>
            </div>
        <div>
            <div className="flex flex-wrap mb-8 sm:mb-12 justify-center gap-3 sm:gap-4">
                {services.map((service) => (
                    <div 
                        key={service.id}
                        onClick={() => setActiveService(service.id)}
                        className={`cursor-pointer p-6 rounded-3xl border
                        ${activeService === service.id ? 'bg-white shadow-xl border-blue-500' : 'bg-gray-50 border-gray-200 hover:shadow-lg'}
                        transition duration-300 ease-in-out w-full sm:w-72 md:w-72 lg:w-72`}
                    >
                        <div className="flex items-center justify-center
                        w-12 h-12 mb-4 rounded-full bg-blue-100 text-blue-600 text-2xl">
                            {service.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>

            {activeService && (
                <div className="mt-8 p-6 border rounded-lg bg-white">
                    <h2 className="text-xl font-bold">Service Details</h2>
                    <p>{services.find(service => service.id === activeService).description}</p>
                </div>
            )}
        </div>
        </motion.div>
    </motion.section>
  )
}

export default Servicesection
