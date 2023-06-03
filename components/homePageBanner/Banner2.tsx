import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Banner2({}: Props) {
    return (
        <section id="banner2" className="bg-stone-300">
            <div className="h-screen w-5/6 mx-auto px-10 flex flex-col md:flex-row justify-evenly items-center">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mt-8 md:mt-0 md:px-10 text-neutral-50 text-2xl font-bold"
                >
                    I am a theoretical physicist exploring the quamtum nature of the universe. Currently, I am pursuing my PhD
                    degree in Physics at Rutgers University, New Brunswick.
                </motion.div>
                <motion.img
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    src="/images/home/Me.jpeg"
                    className="w-64 rounded-lg"
                />
            </div>
        </section>
    );
}

export default Banner2;
