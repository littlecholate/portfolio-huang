import React, { useEffect } from 'react';
import Vara from 'vara';
import { motion } from 'framer-motion';

type Props = { scrollY: number };

function HomeBanner({ scrollY }: Props) {
    useEffect(() => {
        // handwrite effect
        var vara = new Vara(
            '#vara-container',
            'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json',
            [
                {
                    text: "Hi! I'm Sam Huang",
                    y: 10,
                    duration: 4000,
                },
                {
                    text: 'Welcome to my creativity ',
                    delay: 800,
                    duration: 3000,
                },
            ],
            {
                strokeWidth: 2,
                fontSize: 60,
                color: 'white',
                textAlign: 'left',
            }
        );
    }, []);

    return (
        <section id="homeBanner" className="bg-[url('/images/home/bg.jpg')] bg-cover bg-fixed">
            <div className={`backdrop-blur-[${Math.floor(scrollY / 80)}px]`}>
                {/* FirstBanner */}
                <div className="relative h-screen">
                    <div id="handwriteText-container" className="absolute w-1/2 top-3/4 left-1/2">
                        <div id="vara-container" className="z-[20]"></div>
                    </div>
                </div>
                {/* Introduction */}
                <div className="h-screen w-5/6 mx-auto px-10 flex flex-col md:flex-row justify-evenly items-center">
                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-6/12 mt-8 md:mt-0 md:px-10 text-neutral-50 text-2xl font-bold"
                    >
                        I am a theoretical physicist exploring the quamtum nature of the universe. Currently, I am researching on
                        particle phenomenology on the journey of Physics PhD at Rutgers University, New Brunswick.
                    </motion.div>
                    <motion.img
                        initial={{ x: 300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1, scale: 1.5 }}
                        transition={{ duration: 1 }}
                        src="/images/home/Me.jpeg"
                        className="w-72  rounded-lg "
                    />
                </div>
            </div>
        </section>
    );
}

export default HomeBanner;

// Can't delete these comments due to some problems (https://www.codeconcisely.com/posts/tailwind-css-dynamic-class/)
// backdrop-blur-[1px], backdrop-blur-[2px], backdrop-blur-[3px], backdrop-blur-[4px], backdrop-blur-[5px]
// backdrop-blur-[6px], backdrop-blur-[7px], backdrop-blur-[8px], backdrop-blur-[9px], backdrop-blur-[10px]
// backdrop-blur-[11px], backdrop-blur-[12px], backdrop-blur-[13px], backdrop-blur-[14px], backdrop-blur-[15px]
// backdrop-blur-[16px], backdrop-blur-[17px], backdrop-blur-[18px], backdrop-blur-[19px], backdrop-blur-[20px]
// backdrop-blur-[21px], backdrop-blur-[22px], backdrop-blur-[23px], backdrop-blur-[24px], backdrop-blur-[25px]
// backdrop-blur-[26px], backdrop-blur-[27px], backdrop-blur-[28px], backdrop-blur-[29px], backdrop-blur-[30px]
// backdrop-blur-[31px], backdrop-blur-[32px], backdrop-blur-[33px], backdrop-blur-[34px], backdrop-blur-[35px]
// backdrop-blur-[36px], backdrop-blur-[37px], backdrop-blur-[38px], backdrop-blur-[39px], backdrop-blur-[40px]
// backdrop-blur-[41px], backdrop-blur-[42px], backdrop-blur-[43px], backdrop-blur-[44px], backdrop-blur-[45px]
// backdrop-blur-[46px], backdrop-blur-[47px], backdrop-blur-[48px], backdrop-blur-[49px], backdrop-blur-[50px]
