import React from 'react';
import { motion } from 'framer-motion';
import MenuButton from './MenuButton';

type Props = { scrollY: number };

function Header({ scrollY }: Props) {
    return (
        <header className="fixed w-full p-5 center z-20">
            <div className="absolute left-6">
                <MenuButton />
            </div>

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: Math.floor( scrollY /950) }}
                transition={{ duration: 1 }}
                className="text-neutral-50 text-2xl font-bold"
            >
                Cheng-Tse Sam Huang
            </motion.div>
        </header>
    );
}

export default Header;
