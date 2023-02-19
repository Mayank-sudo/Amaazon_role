import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carasuel.css'

const images = [
  'https://m.media-amazon.com/images/I/61r4MC2fR+L._SX3000_.jpg',
  'https://m.media-amazon.com/images/I/A1KkRW2Lr8L._SX3000_.png',
  'https://m.media-amazon.com/images/I/71vdTR50hFL._SX3000_.jpg',
];



const Carasuel = () => {
  return (
    <Carousel className='img'>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img 
            className="Image"
            src={image}
            alt={`Slide ${index}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carasuel;
