import React, { useEffect } from 'react';
import Vara from 'vara';
import { motion } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import ResearchTopic from './ResearchTopic';

type Props = { scrollY: number };

function HomeBanner({ scrollY }: Props) {
  const alignCenter = { display: 'flex', alignItems: 'center' }
    useEffect(() => {
        // handwrite effect
        var vara = new Vara(
            '#vara-container',
            'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json',
            [
                {
                    text: "Hi! I'm Sam Huang",
                    duration: 3500,
                },
                // {
                //     text: 'Welcome to my creativity ',
                //     delay: 800,
                //     duration: 2500,
                // },
            ],
            {
                strokeWidth: 2,
                fontSize: 70,
                color: 'white',
                textAlign: 'center',
            }
        );
    }, []);

    return (
        <section id="homeBanner" className="bg-[url('/images/home/bg.jpg')] bg-cover bg-fixed">
            {/* 判斷滑條是否超過特定值，藉此隱藏手寫字 */}
            <div id="vara-container" className={scrollY > 1000 ? 'hidden middle w-1/2' : 'fixed middle w-1/2'}></div>
            {/* backdrop-blur 將上面所有元素模糊 */}
            <div className={`relative backdrop-blur-[${Math.min(Math.floor(scrollY / 60),18)}px]`}>
                {/* FirstBanner */}
                <div className="h-screen center"></div>
                {/* Introduction */}
                <div className="h-screen w-full mx-auto  flex flex-col md:flex-row justify-evenly items-center bg-slate-500">
                    <motion.div
                        initial={{ x: 0, opacity: 1 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="top-0 w-6/12 mt-8 md:mt-0 md:px-20 text-white text-4xl font-bold"
                    >
                        I am a theoretical physicist exploring the quamtum nature of the universe.
                    </motion.div>
                    <div className="w-6/12 center bg-slate-400">
                    <motion.img
                        initial={{ x: 0, opacity: 1, scale: 1.5 }}
                        whileInView={{ x: 0, opacity: 1, scale: 1.5 }}
                        transition={{ duration: 1 }}
                        src="/images/home/Me.jpeg"
                        className="w-72  rounded-lg absolute "
                    />
                        `
                    </div>
                        </div>
        <div className="h-screen w-screen"> 
        <Parallax pages={4}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className="center text-white text-4xl font-bold">Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className={`relative center w-7/12 text-white text-4xl font-bold`}>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`relative center w-5/12 text-white text-4xl font-bold`}>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={1} style={{ ...alignCenter, justifyContent: 'flex-end' }}  >
          <div className={`relative center w-6/12 text-white text-4xl font-bold`}>
            <p><ResearchTopic scrollY={scrollY} /></p>
          </div>
        </ParallaxLayer>
      </Parallax>
      </div>
                    
            </div>
        </section>
    );
}

export default HomeBanner;

// Can't delete these comments due to some reasons (https://www.codeconcisely.com/posts/tailwind-css-dynamic-class/)
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

// blur-[1px], blur-[2px], blur-[3px], blur-[4px], blur-[5px]
// blur-[6px], blur-[7px], blur-[8px], blur-[9px], blur-[10px]
// blur-[11px], blur-[12px], blur-[13px], blur-[14px], blur-[15px]
// blur-[16px], blur-[17px], blur-[18px], blur-[19px], blur-[20px]
// blur-[21px], blur-[22px], blur-[23px], blur-[24px], blur-[25px]
// blur-[26px], blur-[27px], blur-[28px], blur-[29px], blur-[30px]
// blur-[31px], blur-[32px], blur-[33px], blur-[34px], blur-[35px]
// blur-[36px], blur-[37px], blur-[38px], blur-[39px], blur-[40px]
// blur-[41px], blur-[42px], blur-[43px], blur-[44px], blur-[45px]
// blur-[46px], blur-[47px], blur-[48px], blur-[49px], blur-[50px]
