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
                    fontSize: 40,
                    strokeWidth: 1.5,
                    color: 'white',
                },
                {
                    text: 'Some text',
                    fontSize: 24,
                    color: 'white',
                },
                {
                    text: 'Some more text',
                    color: 'white',
                },
            ]
        );
    }, []);

    return <div id="vara-container" className="z-[20]"></div>;
}

function Banner1({}: Props) {
    return (
        <section id="banner1" className="bg-gradient-to-tl from-black via-stone-800 to-stone-500 ">
            <div className="relative bg-[url('/images/home/Beginner.jpg')] bg-cover mix-blend-overlay h-screen"></div>
            <div className="absolute w-full md:w-96 p-10 bottom-5 md:right-5">
                <VaraText text="WiseCode Team" />
            </div>
        </section>
    );
}

export default Banner1;
