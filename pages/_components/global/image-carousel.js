import React, { Component } from "react";
import "antd/dist/antd.css";
import { Image } from "antd";

const ImageCarousel = ({ slides }) => {
  return slides.map((slide, i) => <Image key={i} src={slide.image} />);
};

export default ImageCarousel;
