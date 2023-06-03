import React, { useState } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

type Props = {};

function ScrollButton({}: Props) {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        scrolled > 100 ? setVisible(true) : setVisible(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (typeof window !== 'undefined') window.addEventListener('scroll', toggleVisible);

    return (
        <button
            className="fixed w-10 h-10 bottom-5 left-5 rounded-full z-20"
            onClick={scrollToTop}
            style={{ display: visible ? 'inline' : 'none' }}
        >
            <ArrowCircleUpIcon className="w-10 h-10" />
        </button>
    );
}

export default ScrollButton;
