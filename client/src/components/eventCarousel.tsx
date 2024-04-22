import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Event1 from './../assets/event1.jpeg';
import Event2 from './../assets/event2.png';
import Event3 from './../assets/event3.jpeg';

const EventCarousel: React.FC = () => {
{


    return (
        <Carousel interval={5000}>
            <img src={Event1} alt='Event1' style={{ maxWidth: '100%', height: 'auto' ,  display: 'block', margin: 'auto'}}/>
            <img src={Event2} alt='Event2' style={{ maxWidth: '100%', height: 'auto' ,  display: 'block', margin: 'auto'}}/>
            <img src={Event3} alt='Event3' style={{ maxWidth: '100%', height: 'auto' ,  display: 'block', margin: 'auto'}}/>
        </Carousel>
    )
}
}

export default EventCarousel
