import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/layout/Header';

const AboutMe: NextPage = () => {
    return (
        <div>
            <Head>
                <title>AboutMe</title>
            </Head>
            <Header />
        </div>
    );
};

export default AboutMe;
