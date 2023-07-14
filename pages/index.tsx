import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';
import HomeBanner from '../components/homePageBanner/HomeBanner';
import ResearchTopic from '../components/homePageBanner/ResearchTopic';
import Publication from '../components/homePageBanner/Publication';
import Timeline from '../components/homePageBanner/Timeline';
import ScrollButton from '../components/layout/ScrollButton';

const Home: NextPage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>Homepage</title>
            </Head>
            <Header scrollY={scrollY} />
            <HomeBanner scrollY={scrollY} /> {/* Image with a brief greetings */}
            <ResearchTopic /> {/* Research topic introduction */}
            {/*  <Publication />  publication status and relationship */}
            <Timeline /> {/* bio timeline */}
            {/* Other Component */}
            <ScrollButton />
        </div>
    );
};

export default Home;
