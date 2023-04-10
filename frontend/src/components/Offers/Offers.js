import "../Styles/offers.css";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
export default function Offers() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Uber-HP-Desktop-HeroBanner1-15DEC22B.gif"
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Uber-HP-Desktop-HeroBanner4-15DEC22B.png"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Uber-HP-Desktop-HeroBanner2-15DEC22B.png"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}
