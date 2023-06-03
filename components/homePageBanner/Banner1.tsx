import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Banner1({}: Props) {
    return (
        
        <section id="banner1" className="bg-stone-950  min-h-screen center">
            Banner1
            <motion.img
                initial={{ x: -30, opacity: 0, scale: 1}}
                whileInView={{ x: -30, opacity: 1 , scale: 1}}
                transition={{ duration: 3 }}
                src="/images/home/Beginner.jpg"
                className="w-auto"
            />
            {/* <body>
                <div id="container"></div>
                <script>
                    var fontSize = 72;
                        if (window.screen.width > 700)
                            fontSize = 32;
                        elseif (window.screen.width < 1200)
                            fontSize = 57;
                    var vara = new Vara([
                        "#container", 
                        "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
                        [
                            {
                                text: "Hi"
                            }
                        ]
                    ])

                </script>
            </body> */}
        </section>
    );
}

export default Banner1;
