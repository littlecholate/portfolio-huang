import React from 'react';
import { motion } from 'framer-motion';

type Props = {};



function Banner2({}: Props) {
    return (
        <section id="banner2" className="bg-black">
            <div className="h-screen w-5/6 mx-auto px-10 flex flex-col md:flex-row justify-evenly items-center">
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-6/12 mt-8 md:mt-0 md:px-10 text-neutral-50 text-2xl font-bold"
                >
                    I am a theoretical physicist exploring the quamtum nature of the universe. Currently, I am researching on particle phenomenology on the journey of Physics PhD at Rutgers University, New Brunswick.
                </motion.div>
                <motion.img
                    initial={{ x: 300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1.5 }}
                    transition={{ duration: 1 }}
                    src="/images/home/Me.jpeg"
                    className="w-72  rounded-lg "
                />
            </div>
        </section>
    );
}

export default Banner2;
