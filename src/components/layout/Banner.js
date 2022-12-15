import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Images from "./Images";
import { Link } from "react-router-dom";
const Banner = () => {
  const [activeDots, setActiveDots] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    beforeChange: (prev, next) => {
      setActiveDots(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          padding: "10px",
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "8%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === activeDots
            ? {
                color: "#262626",
                borderRight: "4px #262626 solid",
                paddingRight: "20px",
                height: "30px",
                fontSize: "20px",
              }
            : {
                color: "transparent",
                borderRight: "4px transparent solid",
                paddingRight: "20px",
                height: "30px",
                fontSize: "20px",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [

      {
        breakpoint: 769,
        settings: {
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "3%",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === activeDots
                  ? {
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      paddingRight: "10px",
                      height: "20px",
                      fontSize: "16px",
                    }
                  : {
                      color: "transparent",
                      borderRight: "3px transparent solid",
                      paddingRight: "10px",
                      height: "20px",
                      fontSize: "16px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <Link to="#">
        <div>
          <Images imgSrc="assests/banner.png" />
        </div>
      </Link>
      <Link to="#">
        <div>
          <Images imgSrc="assests/banner.png" />
        </div>
      </Link>
      <Link to="#">
        <div>
          <Images imgSrc="assests/banner.png" />
        </div>
      </Link>
    </Slider>
  );
};

export default Banner;
