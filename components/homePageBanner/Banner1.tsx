import React, {useEffect} from 'react';
import { motion } from 'framer-motion';


type Props = {};

function VaraText({ text }: { text: string }) {
    useEffect(() => {
      var vara = new Vara(
        "#vara-container",
        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
        [
          {
            text: text,
            fontSize: 40,
            strokeWidth: 0.7,
          },
        ]
      );
    }, []);
  
    return <div id="vara-container" className="z-[20]"></div>;
  }


function Banner1({}: Props) {
    
    return (
        <section id="banner1" className="bg-gradient-to-tl from-black via-stone-800 to-stone-500  min-h-screen bg-blend-overlay">
            <motion.img
                initial={{ x: -30, opacity: 0, scale: 1}}
                whileInView={{ x: -30, opacity: 0.5 , scale: 1}}
                transition={{ duration: 3 }}
                src="/images/home/Beginner.jpg"
                className="w-fit z-10 "
            />
            {/* <div>
                <VaraText text='WiseCode Team' />
            </div> */}
        </section>
    );
}

export default Banner1;
