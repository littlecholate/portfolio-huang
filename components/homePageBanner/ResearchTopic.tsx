import React from 'react';

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

function ResearchTopic() {
    return (
        <section id="researchTopic" className="w-full">
            {data.map((item, index) => {
                return (
                    <div key={index} className="w-full flex justify-end">
                        <div className={`h-1/4 w-1/2 center ` + item.background}>
                            <div id="content" className="h-4/5 p-20 space-y-10">
                                <div className="text-4xl">{item.title}</div>
                                <div>{item.content}</div>
                                {/* <button className="text-xl outline p-3">Find Out More</button> */}
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default ResearchTopic;
