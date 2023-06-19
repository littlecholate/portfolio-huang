import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

type Props = {};

function Banner4({}: Props) {
    return (
        // <section id="banner4" className="bg-black min-h-screen center">
        //     <motion.div
        //             initial={{ x: 0, opacity: 0 }}
        //             whileInView={{ x: 0, opacity: 1 }}
        //             transition={{ duration: 1 }}
        //             className="w-6/12 mt-8 md:mt-0 md:px-10 text-neutral-50 text-2xl font-bold"
        //         >
        //             <br/>Astroparticle and cosmology<br/>
        //             <br/>Particle phenomenology<br/>
        //             <br/>Machine learning techniques for colliders and telescopes<br/>
        //             <br/>Blackhole physics<br/>

        //         </motion.div>
        // </section>
        <Card sx={{ maxWidth: 1345 }}>
            <CardActionArea>
                <CardMedia component="img" height="140" image="/images/home/Beginner.jpg" alt="green iguana" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Particle phenomenology
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Particle phenomenologyadfs dfas d
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
        </Card>
    );
}

export default Banner4;
