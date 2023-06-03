import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Banner2({}: Props) {
    return (
        <section id="banner2" className="bg-gray-500 min-h-screen center">
            <motion.img
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                src="/images/horse.jpg"
                className="w-50 h-80"
            />
        </section>
    );
}

export default Banner2;
