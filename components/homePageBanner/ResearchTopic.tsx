import React, { useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';

type Props = {};

const data = [
    {
        title: 'Beyond the Standard Model',
        content:
            'Beyond the Standard Model Beyond the Standard Model Beyond the Standard Model Beyond the Standard Model Beyond the Standard Model',
        background: 'bg-red-500',
    },
    {
        title: 'Collider Phenomenology',
        content:
            'Collider Phenomenology Collider Phenomenology Collider Phenomenology Collider Phenomenology Collider Phenomenology',
        background: 'bg-yellow-500',
    },
    {
        title: 'Cosmology and Astroparticle Physics',
        content:
            'Cosmology and Astroparticle Physics Cosmology and Astroparticle Physics Cosmology and Astroparticle Physics Cosmology and Astroparticle Physics Cosmology and Astroparticle Physics',
        background: 'bg-green-500',
    },
    {
        title: 'Blackhole physics',
        content: 'Blackhole physics Blackhole physics Blackhole physics Blackhole physics Blackhole physics',
        background: 'bg-blue-500',
    },
];

function ResearchTopic({}: Props) {
    const [OnHoverTopic, SetOnHoverTopic] = useState(100);

    return (
        <section id="researchTopic" className="h-[400vh] flex">
            <Controller>
                <Scene pin duration={'300%'} triggerHook={0}>
                    <div id="title" className="w-1/2 h-screen !m-0 text-4xl center">
                        <h2>Research Topic</h2>
                    </div>
                </Scene>
            </Controller>
            <div id="container" className="h-[400vh] w-1/2">
                <div className="h-screen">image</div>
                <div className="h-screen">
                    {data.map((item, index) => {
                        return (
                            <>
                                <div
                                    key={index}
                                    className={`h-1/5 center text-4xl ` + item.background}
                                    onMouseEnter={() => SetOnHoverTopic(index)}
                                    onMouseLeave={() => SetOnHoverTopic(100)}
                                >
                                    {item.title}
                                </div>
                                {index === OnHoverTopic ? (
                                    <div className={`h-1/5 center ` + item.background}>
                                        <p className="h-full w-4/5 text-lg">{item.content}</p>
                                    </div>
                                ) : (
                                    <div className="hidden"></div>
                                )}
                            </>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ResearchTopic;
