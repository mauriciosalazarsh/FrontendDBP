import React from "react";
import $ from "styled-components";
import ProductCard from "./../ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Title from "./../Title";
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,    
};
const $ProductRow = $.div`
    margin-top: 70px;
`;
const ProductRow = ({ title }) => {
  return (
    <$ProductRow>
      <Title text={title} viewHistory={true}/>
      <Slider {...settings}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </Slider>
    </$ProductRow>
  );
};

export default ProductRow;