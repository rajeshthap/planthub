import React, { useState, useEffect } from 'react';
import "../../assets/css/Carousel.css";
import Plant1 from "../../assets/images/Plant1.jpg";
import Plant2 from "../../assets/images/Plant2.jpg";
import Plant3 from "../../assets/images/Plant3.jpg";
import Plant4 from "../../assets/images/Plant4.jpg";
import Plant5 from "../../assets/images/Plant5.png";
import Plant6 from "../../assets/images/Plant6.jpg";
import Plant7 from "../../assets/images/Plant7.jpg";


const CarouselImage = () => {
  const images = [
    {
      url: Plant1,
      alt: "Plant 1",
      title: "Professional IT Solution",
      subtitle: "Best IT Solution Company",
      description: "We deliver innovative IT solutions to help your business grow."
    },

    { 
      url: Plant2,
       alt: "Plant 2",
       title: "Professional IT Solution",
      subtitle: "Best IT Solution Company",
      description: "We deliver innovative IT solutions to help your business grow."
      },
    { 
      url: Plant3, 
      alt: "Plant 3",
      title: "Professional IT Solution",
      subtitle: "Best IT Solution Company",
      description: "We deliver innovative IT solutions to help your business grow."
     },
    { 
      url: Plant4, 
      alt: "Plant 4",
      title: "Professional IT Solution",
      subtitle: "Best IT Solution Company",
      description: "We deliver innovative IT solutions to help your business grow."
     },
    {
       url: Plant5, 
       alt: "Plant 5" ,
       title: "Professional IT Solution",
      subtitle: "Best IT Solution Company",
      description: "We deliver innovative IT solutions to help your business grow."
      },
    { 
      url: Plant6,
       alt: "Plant 6",
       title: "Professional IT Solution",
      subtitle: "Best IT Solution Company",
      description: "We deliver innovative IT solutions to help your business grow."
       },
    { 
      url: Plant7,
       alt: "Plant 7",
       title: "Professional IT Solution",
      subtitle: "Best IT Solution Company",
      description: "We deliver innovative IT solutions to help your business grow."
       }

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
  };

  const goToSlide = (slideIndex) => setCurrentIndex(slideIndex);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="arrow arrow-left" onClick={goToPrevious}>❰</div>

      <div className="slide-wrapper">
        {images.map((img, index) => (
          <div key={index} className={index === currentIndex ? "slide active-slide" : "slide"}>
            <img src={img.url} alt={img.alt} />

            <div className="carousel-text">
              <h1>
                <span className="hero-sub-title">{img.title} ~</span><br />
                <span className="br-span-title">{img.subtitle}</span>
              </h1>
              <p>{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="arrow arrow-right" onClick={goToNext}>❱</div>

      <div className="dots-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={index === currentIndex ? "dot active-dot" : "dot"}
            onClick={() => goToSlide(index)}
          >

          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselImage;
