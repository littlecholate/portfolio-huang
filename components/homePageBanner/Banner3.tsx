import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type Props = {};
import { Chrono } from "react-chrono";

const Home = () => {
  const items = [{
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  }, ];

  return (
    <div style={{ width: "500px", height: "400px" }}>
      <Chrono items={items} />
    </div>
  )
}

// const items = [{
//     title: "Senior High School",
//     cardTitle: "Dunkirk",
//     url: "http://www.history.com",
//     cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
//     cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
//   }]

// function Banner3({}: Props) {
//     return (
//         <section id="banner3" className="bg-stone-800 min-h-screen center">
//             <div className="App">
//                 <div style={{ width: "90%", height: "90vh" }}>
//                     <Chrono
//                     items = {items}
//                     mode="VERTICAL"
//                     slideShow
//                     slideItemDuration={4000}
//                     cardHeight={250}
//                     cardWidth={1000}
//                     fontSizes={{
//                         title: "1.1rem"
//                     }}
//                     contentDetailsHeight={150}
//                     />
//                 </div>
//                 </div>
//         </section>
        
//     );
// }



function Banner3({}: Props) {
    return (
        <section id="banner3" className="bg-black min-h-screen center">
            <VerticalTimeline>
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Sep. 2016 - June 2020 "
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Bachelor of Science</h3>
                <h4 className="vertical-timeline-element-subtitle">National Tsing Hua University, Hsinchu, Taiwan</h4>
                <p>
                High Energy Phenomenology, ATLAS Experiment, Astroparticle Experiment
                </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="July 2020 - March 2023 "
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Master of Science</h3>
                <h4 className="vertical-timeline-element-subtitle">National Taiwan University, Taipei, Taiwan</h4>
                <p>
                High Energy Phenomenology, Research Assistant
                </p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Sep. 2023 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">PhD student</h3>
                <h4 className="vertical-timeline-element-subtitle">Rutgers University, New Brunswick, US</h4>
                <p>
                Teaching Assitant
                </p>
                </VerticalTimelineElement>
            </VerticalTimeline> 
        </section>
        
    );
}

export default Banner3;
