import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

type Props = {};

function Publication({}: Props) {
    return (
    <div className="relative">
       <div className='sticky top-0 h-screen bg-red-500 flex justify-center items-center'>
       <div>
                <h1 className="text-4xl">First section Scroll</h1>
            <p className="text-2xl">Page scroll down</p>
            </div>
       </div>
       <div className='sticky top-0 h-screen bg-indigo-500 flex justify-center items-center'>
       <div>
                <h1 className="text-4xl">Second section Scroll</h1>
            <p className="text-2xl">Page scroll down</p>
            </div>
       </div>
       <div className='sticky top-0 h-screen bg-indigo-200 flex justify-center items-center'>
       <div>
                <h1 className="text-4xl">Third section Scroll</h1>
            <p className="text-2xl">Page scroll down</p>
            </div>
       </div>
    </div>
    );
}

export default Publication;
