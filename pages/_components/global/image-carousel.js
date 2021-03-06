import React, { useState, useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";

const ImageCarousel = ({ policy = {} }) => {
  const [position, setPosition] = useState(0);
  const [tileWidth, setTileWidth] = useState(null);
  useEffect(() => {
    let slidesContainer = document.getElementById("slides");
    setTileWidth(slidesContainer.offsetWidth / 3);
  }, []);

  const next = () => {
    let newPosition = position === slides.length - 3 ? slides.length - 3 : position + 1;
    setPosition(newPosition);
  };
  const previous = () => {
    let newPosition = position === 0 ? 0 : position - 1;
    setPosition(newPosition);
  };

  const slides = policy.slides ? policy.slides : [];

  if (!slides?.length) return null;
  return (
    <div className="relative overflow-x-hidden">
      <div className="bumper-left absolute z-10 left-10 w-10 h-10 bg-repeat-light rounded-full shadow-md" style={{ top: "25%" }} onClick={previous}></div>
      <div className="bumper-right absolute z-10 right-10 w-10 h-10 bg-repeat-light rounded-full shadow-md" style={{ top: "25%" }} onClick={next}></div>
      <div className="relative h-72" id="slides">
        <SRLWrapper>
          <div
            className="flex absolute no-scrollbar transition-all duration-500 ease-in-out"
            id="slides-wrapper"
            style={{
              transform: `translateX(-${position * (100 / slides.length)}%)`,
            }}
          >
            {slides.map((slide, i) => (
              <div className="flex-1 px-5" style={{ minWidth: `${tileWidth}px` }} key={i}>
                <div className="block">
                  <a href={slide.image}>
                    <img className="w-full" src={slide.image} />
                  </a>
                </div>
                <div className="block">{slide.caption}</div>
                <div className="block">{slide.subcaption}</div>
              </div>
            ))}
          </div>
        </SRLWrapper>
      </div>
    </div>
  );
};

export default ImageCarousel;
