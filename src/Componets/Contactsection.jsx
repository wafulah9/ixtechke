import { RxTriangleDown } from "react-icons/rx";
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../Utilies/motion";

const Contactsection = () => {
    const formVALUES = useRef();
    const [successMessage, setSuccessMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        // Check if any fields are empty
        if (!formVALUES.current.name.value || !formVALUES.current.email.value || !formVALUES.current.message.value) {
            setSuccessMessage('Please fill in all fields.'); // Show error message
            return; // Do not send email if any field is empty
        }

        emailjs.sendForm("service_ck0s6cr", "template_j0gdzn5", formVALUES.current, "bv1MrkK3BnM8DbO7K")
            .then((result) => {
                console.log(result.text);
                setSuccessMessage('Message sent successfully!'); // Show success message
                e.target.reset(); // Reset the form after successful submission

                // Hide the message after 1 second
                setTimeout(() => {
                    setSuccessMessage('');
                }, 5000);
            }, (error) => { 
                console.log(error.text);
                setSuccessMessage('Failed to send the message, please try again.'); // Show error message
            });
    };

    return (
        <>
            {successMessage && (
                <div className="fixed top-0 right-0 m-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300 ease-in-out opacity-100 z-50">
                    {successMessage}
                </div>
            )}
            <motion.section 
                variants={fadeIn('up', 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                id='contacts' className="relative text-gray-600 body-font bg-gradient-to-b from-gray-100 to-white py-12 px-4 sm:px-16 lg:px-20 md:px-20"
            >
                <motion.div 
                    variants={textVariant(0.3)}
                    initial="hidden"
                    whileInView="show"
                    className="max-w-7xl mx-auto"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-center text-center mb-12">
                        <div className='flex-1 max-w-2xl max-auto space-y-6 mb-10 lg:mb-0'>
                            <div>
                                <h2 className='text-3xl sm:text-4xl md:text-5xl text-gray-900'>
                                    Get in{" "}
                                    <span className='font-bold text-black '>
                                        Touch <span className='text-green-500'>.</span>
                                    </span>
                                </h2>
                                <div className="flex justify-center mt-4 space-x-2 text-2xl">
                                    <RxTriangleDown className="text-red-500" />
                                    <RxTriangleDown className="text-green-600" />
                                    <RxTriangleDown className="text-blue-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <form ref={formVALUES} onSubmit={sendEmail} className="w-full max-w-lg bg-white p-8 rounded-3xl shadow-lg">
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    name="name" type="text" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                                    Subject
                                </label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    type="text" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    name="email" type="email" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="mb-6">  
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300" type="submit">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </motion.section>
        </>
    );
};

export default Contactsection;
