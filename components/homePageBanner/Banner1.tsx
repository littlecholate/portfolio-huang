import React, { useEffect } from 'react';
import Vara from 'vara';

type Props = {};

function VaraText({ text }: { text: string }) {
    useEffect(() => {
        var vara = new Vara(
            '#vara-container',
            'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json',
            [
                {
                    text: text,
                    
                    
                    y: 50,
                    fromCurrentPosition: {y: false},
                    duration: 4000
                },
                {
                    text: 'Welcome to my creativity ',
                    y: 150,
                    fromCurrentPosition: {y: true},
                    delay:800,
                    duration:3000
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
                strokeWidth: 2.,
                fontSize: 80,
                color: 'white',
                textAlign: 'right',
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
        <section id="banner1" className="bg-gradient-to-tl from-black via-stone-800 to-stone-300 ">
            <div className="relative bg-[url('/images/home/Beginner.jpg')] bg-cover mix-blend-overlay h-screen"></div>
            <div className="absolute w-full md:w-2/4 h-fit p-10 bottom-24 md:right-1">
                <VaraText text="Hi! I'm Sam Huang " />
            </div>
        </section>
    );
}

export default Banner1;
