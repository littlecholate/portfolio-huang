import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/layout/Header';

const Testing: NextPage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            //console.log(window.scrollY);
        };
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // backdrop-blur-[1px], backdrop-blur-[2px], backdrop-blur-[3px], backdrop-blur-[4px], backdrop-blur-[5px]
    // backdrop-blur-[6px], backdrop-blur-[7px], backdrop-blur-[8px], backdrop-blur-[9px], backdrop-blur-[10px]

    return (
        <div className="overflow-x-hidden">
            <Head>
                <title>Homepage</title>
            </Head>
            {/* <Header /> */}

            <div className="bg-[url('/images/home/bg.jpg')] bg-cover bg-fixed backdrop-blur-md">
                <div className={`backdrop-blur-[${Math.floor(scrollY / 100)}px]`}>
                    <section id="banner1" className="h-screen flex justify-center items-center">
                        <h2 className="text-2xl text-yellow-300">{Math.floor(scrollY / 100)}</h2>
                    </section>

                    <section id="banner2" className="h-screen flex justify-center items-center">
                        <h2 className="text-2xl text-yellow-300">{Math.floor(scrollY / 100)}</h2>
                    </section>
                </div>
            </div>

            <section id="banner1" className="bg-yellow-500">
                <div className="h-screen flex justify-center items-center">
                    <h2 className="text-2xl text-red-300">Section3</h2>
                </div>
            </section>
        </div>
    );
};

export default Testing;
