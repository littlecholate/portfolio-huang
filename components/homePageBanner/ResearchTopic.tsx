import React from 'react';
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
    return (
        <section id="researchTopic" className="h-[400vh] flex">
            <Controller>
                <Scene duration={'300%'} triggerHook={0}>
                    <div id="title" className="w-1/2 h-screen !m-0 text-4xl center">
                        <h2>Research Topic</h2>
                    </div>
                </Scene>
            </Controller>
            <div id="container" className="w-1/2">
                {data.map((item, index) => {
                    return (
                        <div key={index} className={`h-screen flex flex-col justify-around items-center ` + item.background}>
                            <h2 className="text-4xl">{item.title}</h2>
                            <p className="w-4/5 text-lg">{item.content}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default ResearchTopic;
