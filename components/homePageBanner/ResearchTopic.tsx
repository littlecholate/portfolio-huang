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

type Props = { title: string; intro: string; bg: string };

function Banner({ title, intro, bg }: Props) {
    let bannerStyle = 'h-screen flex items-center ' + bg;
    return (
        <div className={bannerStyle}>
            <div id="content" className="w-1/2 h-4/5 ml-20 p-20 space-y-12">
                <div className="text-4xl">{title}</div>
                <div>{intro}</div>
                <button className="text-xl outline p-3">Find Out More</button>
            </div>
        </div>
    );
}

function ResearchTopic() {
    return (
        <section id="researchTopic" className="w-full">
            {data.map((item, index) => (
                <Banner key={index} title={item.title} intro={item.content} bg={item.background} />
            ))}
        </section>
    );
}

export default ResearchTopic;
