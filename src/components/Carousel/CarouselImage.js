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
      title: " Save Trees, Save Himalayas",
      subtitle: " Together we protect nature, one plant at a time.",
      description: "Youth for Himalayas Trust is committed to restoring the natural beauty of our mountains through plantation, conservation, and community participation. Every tree we save brings life back to the Himalayas."
    },

    { 
      url: Plant2,
       alt: "Plant 2",
       title: " Growing Green for Tomorrow",
      subtitle: "Join us in restoring the Himalayan ecosystem with every sapling we plant.",
      description: "We bring communities and youth together to plant native species, protect forest areas, and build a sustainable future for upcoming generations."
      },
    { 
      url: Plant3, 
      alt: "Plant 3",
      title: "Plant Today, Protect Forever",
      subtitle: "Your one step towards nature becomes a lifetime of protection for the mountains.",
      description: "Our plantation programs and tree-care initiatives focus not only on planting trees but nurturing them until they grow into strong protectors of the Himalayas."
     },
    { 
      url: Plant4, 
      alt: "Plant 4",
      title: "Youth Leading the Green Revolution",
      subtitle: " Empowering communities to safeguard the Himalayas",
      description: "Through awareness, action, and involvement, we are building a generation of young environmental leaders dedicated to preserving nature."
     },
    {
       url: Plant5, 
       alt: "Plant 5" ,
       title: "Nature Needs You",
      subtitle: "Stand with us to preserve forests, save plants, and heal the environment.",
      description: "Your participation helps combat deforestation, soil erosion, pollution, and the declining health of our precious mountain ecosystems."
      },
    { 
      url: Plant6,
       alt: "Plant 6",
       title: "Together for a Greener Himalaya",
      subtitle: " Uniting youth and communities to plant, protect, and preserve.",
      description: "We believe true change begins when people come together. Our projects focus on long-term conservation and environmental restoration across Himalayan regions."
       },
   

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
