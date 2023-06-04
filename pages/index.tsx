import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';
import Banner1 from '../components/homePageBanner/Banner1';
import Banner2 from '../components/homePageBanner/Banner2';
import Banner3 from '../components/homePageBanner/Banner3';
import Banner4 from '../components/homePageBanner/Banner4';
import Banner5 from '../components/homePageBanner/Banner5';
import ScrollButton from '../components/layout/ScrollButton';

const Home: NextPage = () => {
    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>Homepage</title>
            </Head>
            <Header />
            <Banner1 /> {/*  Image with a brief greetings */}
            <Banner2 /> {/* Brief introduction of my role, position, and interests */}
            <Banner4 /> {/* Research topic introduction */}
            <Banner5 /> {/* publication status and relationship */}
            <Banner3 /> {/* bio timeline */}
            {/* Other Component */}
            <ScrollButton />
        </div>
    );
};

export default Home;
