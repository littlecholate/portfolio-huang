import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Banner2({}: Props) {
    return (
        <section id="banner2" className="bg-stone-900 min-h-screen center">
            <motion.img
                initial={{ x: 800, opacity: 0, scale: 1.5}}
                whileInView={{ x: 500, opacity: 1, scale: 1.5 }}
                transition={{ duration: 1 }}
                src="/images/home/Me.jpeg"
                className="w-60 h-80"
            />
            <motion.div
                initial={{ x: -300, y: -100, opacity: 0 }}
                animate={{ x: -300, y: -100, opacity: 1, scale: 1.5 }}
                transition={{ duration: 1 }}
                className="w-80 text-3xl font-bold text-neutral-50"
            >
                I am a theoretical physicist focusing on the Quamtum nature of the universe.
            </motion.div>
        </section>
    );
}

export default Banner2;
