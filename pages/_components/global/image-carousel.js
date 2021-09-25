import React, { Component } from "react";
import "antd/dist/antd.css";
import { Image } from "antd";

const ImageCarousel = ({ slides }) => {
  return slides?.length ? slides.map((slide, i) => <Image key={i} src={slide.image} />) : null;
};

export default ImageCarousel;
