import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Banner2({}: Props) {
    return (
        <section id="banner2" className="bg-stone-900 min-h-screen center">
            <motion.img
                initial={{ x: 1000, opacity: 0, scale: 1.5}}
                whileInView={{ x: 700, opacity: 1, scale: 1.5 }}
                transition={{ duration: 1 }}
                src="/images/home/Me.jpeg"
                className="w-2/12 h-auto"
            />
            <motion.div
                initial={{ x: -400, y: -100, opacity: 0 }}
                animate={{ x: -400, y: -100, opacity: 1, scale: 1.5 }}
                transition={{ duration: 1 }}
                className="w-3/12 text-2xl font-bold text-neutral-50"
            >
                I am a theoretical physicist exploring the quamtum nature of the universe. Currently, I am pursuing my PhD degree in Physics at Rutgers University, New Brunswick.  
            </motion.div>
        </section>
    );
}

export default Banner2;
