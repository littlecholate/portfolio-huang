import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
//import { Parallax, ParallaxLayer } from '@react-spring/parallax'

type Props = {};

function Publication({}: Props) {
    const alignCenter = { display: 'flex', alignItems: 'center' };

    return (
        <div className="h-screen w-screen overflow-hidden"></div>
        //   <Parallax pages={5}>
        //   <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
        //     <p className="center text-4xl font-bold">Scroll down</p>
        //   </ParallaxLayer>

        //   <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
        //     <div className={``}>
        //       <p>I'm a sticky layer</p>
        //     </div>
        //   </ParallaxLayer>

        //   <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        //     <div className={`center   text-4xl font-bold`}>
        //       <p>I'm not</p>
        //     </div>
        //   </ParallaxLayer>

        //   <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}  >
        //     <div className={`center text-4xl font-bold`}>
        //       <p>753253207302754</p>
        //     </div>
        //   </ParallaxLayer>
        // </Parallax>
        //
    );
}

export default Publication;
