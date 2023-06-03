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
        <div>
            <Head>
                <title>Homepage</title>
            </Head>
            <Header />
            <Banner1 />
            <Banner2 />
            <Banner3 />
            <Banner4 />
            <Banner5 />

            {/* Other Component */}
            <ScrollButton />
        </div>
    );
};

export default Home;
