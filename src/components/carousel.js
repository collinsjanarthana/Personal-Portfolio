// DesignCarousel.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import tourism from '../assets/img/tourism.PNG';
import music from '../assets/img/Music App.PNG';
import tattoo from '../assets/img/Tattoo.PNG';
import carRental from '../assets/img/car.PNG';
import healthTracker from '../assets/img/Health Tracker.PNG';
import omnibiz from '../assets/img/Omnibiz design.PNG';



const designSamples = [
  {
    title: 'Tourism App Design',
    description: 'Created a modern and engaging UI for a tourism platform.',
    image: tourism,
    figmaLink: 'https://www.figma.com/design/lDeexY1hWXTJswoWXUWZYi/Tourism-design?node-id=0-1&t=Z4Bbn5F2bTh3v2LI-1'
  },
  {
    title: 'Music Streaming Mobile App Design',
    description: 'Designed a clean, user-friendly interface for a music streaming app.',
    image: music,
    figmaLink: 'https://www.figma.com/design/tUgwTHj5DHtcMwyTW2RoFt/Music-mobile-app?t=Z4Bbn5F2bTh3v2LI-1'
  },
  {
    title: 'Tattoo Web App Design',
    description: 'Developed a bold, aesthetic UI concept for a tattoo artist website.',
    image: tattoo,
    figmaLink: 'https://www.figma.com/design/o2BlyfznMhtOvrUxR9GlRW/Tatoo-web-design?t=Z4Bbn5F2bTh3v2LI-1'
  },
  {
    title: 'Car Rental Mobile App Design',
    description: 'Designed a mobile application prototype for a car rental service.',
    image: carRental,
    figmaLink: 'https://www.figma.com/design/OxllMAszz4KWzVuKduTv1L/car-rental-mobile-app?t=Z4Bbn5F2bTh3v2LI-1'
  },
  {
    title: 'Health Tracker Mobile App Design',
    description: 'Created a dashboard layout for analytics and insights.',
    image: healthTracker,
    figmaLink: 'Designed a minimal and user-friendly interface for tracking fitness and wellness goals.'
  },
  {
    title: 'Omnibiz Business Management Web App Design',
    description: 'Crafted a professional and scalable UI for managing multiple businesses in one platform.',
    image: omnibiz,
    figmaLink: 'https://www.figma.com/design/z4kKGNritbrTfEmKnWj5Lt/omnibiz?node-id=0-1&t=TTBPeaNDg1BIbnfO-1'
  }
];

export const DesignCarousel = () => {
  return (
    <Carousel fade interval={3000}>
      {designSamples.map((sample, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={sample.image}
            alt={sample.title}
            style={{ height: '600px', objectFit: 'cover' }}
          />
          <Carousel.Caption className="custom-caption">
            <h5>{sample.title}</h5>
            <h6>{sample.description}</h6>
            <a
      href={sample.figmaLink}
      className="btn btn-dark mt-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      View in Figma
    </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};


