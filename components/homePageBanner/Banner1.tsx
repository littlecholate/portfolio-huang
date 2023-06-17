import React, { useEffect } from 'react';
import Vara from 'vara';

type Props = {};

function VaraText() {
    useEffect(() => {
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
                // {
                //     text: 'Some more text',
                //     y: 50,
                //     fromCurrentPosition: {y: false},
                //     delay:3000,
                //     duration:3000
                // },
            ],
            {
                strokeWidth: 2,
                fontSize: 60,
                color: 'white',
                textAlign: 'left',
            }
        );
        //         vara.ready (function () {
        //             var erase = true;
        //             vara.animationEnd(function(i,o){
        //                 if (i == "no_erase") erase = false;
        //                 if(erase){
        //                     o.container.style.transition = "opacity 1s 1s";
        //                     o.container.style.opacity = 0;
        // }
        //             });
        //           })
    }, []);

    return <div id="vara-container" className="z-[20]"></div>;
}

function Banner1({}: Props) {
    return (
        <section id="banner1" className="relative bg-gradient-to-tl from-black via-stone-800 to-stone-300 ">
            <div className="bg-[url('/images/home/Beginner.jpg')] bg-cover mix-blend-overlay h-screen"></div>
            {/* <div className="absolute w-2/3 bottom-5 right-5 order-1 bg-slate-500"> */}
            {/* <div className="absolute w-2/3 justify-normal bg-slate-500"> */}
            <div className="absolute w-1/2 top-3/4 left-1/2">
            <VaraText />
            </div>
            {/* <div className="absolute w-1/2 top-1/2 left-1/2 bg-slate-400">
            afsdfasdfas d fdas fdas fas f
            </div> */}
        </section>
    );
}

export default Banner1;
