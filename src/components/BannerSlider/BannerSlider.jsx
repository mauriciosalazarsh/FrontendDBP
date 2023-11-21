import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import $ from "styled-components";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const $Item = $.img`
    margin: 0 auto;
`;
const BannerSlider = () => {
  return (
    <Slider arrows={false} {...settings}>
      <div>
        <$Item
          src="https://i.postimg.cc/RZVPDwPY/670ce2b9-e5f7-4d53-8481-9ad0f9f90957.webp"
          alt=""
        />
      </div>
      <div>
        <$Item
          src="https://i.postimg.cc/g2N7zgXd/1110c0fb-f06b-474a-9149-5f2667dad1e5.webp"
          alt=""
        />
      </div>
      <div>
        <$Item
          src="https://i.postimg.cc/zXMLsrp1/e58434dc-db77-4661-b452-fdb929ffa826.webp"
          alt=""
        />
      </div>
    </Slider>
  );
};

export default BannerSlider;