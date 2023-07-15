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
    const [OnHoverTopic, SetOnHoverTopic] = useState(-1)
    const handleMouseEnter = (index:any):any => {
        SetOnHoverTopic(index);
    };
    const handleMouseLeave = (index:any):any => {
        SetOnHoverTopic(-1);
    };
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
                <div className='h-screen'>
                    image
                </div>
                    <div className='h-screen'>
                    {data.map((item, index) => {
                        return (
                            <div className='h-1/5'>
                                <div key={index} className={`h-full flex flex-col justify-around items-start ` + item.background} 
                                onMouseEnter={(index) => handleMouseEnter(index)}
                                onMouseLeave={(index) => handleMouseLeave(index)}>
                                    <h2 className="text-4xl">{item.title}</h2>
                                </div>
                                {OnHoverTopic>index ? 
                                <div className='h-1/5 inline-block w-full'>
                                    <p className={`h-full text-lg flex flex-col justify-around items-start ` + item.background}>{item.content}</p>
                                </div> : 
                                <div className='h-1/5 hidden'>
                                    <p className={`h-full text-lg flex flex-col justify-around items-start ` + item.background}>{item.content}</p>
                                </div>}
                                
                            </div>
                        );
                    })}
                </div>
                
            </div>
        </section>
    );
}

export default ResearchTopic;
