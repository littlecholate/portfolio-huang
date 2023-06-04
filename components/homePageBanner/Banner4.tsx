import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Banner4({}: Props) {
    return (
        <section id="banner4" className="bg-black min-h-screen center">
            <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-6/12 mt-8 md:mt-0 md:px-10 text-neutral-50 text-2xl font-bold"
                >
                    <br/>Astroparticle and cosmology<br/>
                    <br/>Particle phenomenology<br/>
                    <br/>Machine learning techniques for colliders and telescopes<br/>
                    <br/>Blackhole physics<br/>

                </motion.div>
            

        </section>
    );
}

export default Banner4;
