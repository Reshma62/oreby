import React from "react";

import Container from "./Container";
import Flex from "./Flex";
import Heading from "./Heading";
import Product from "./Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import Slider from "react-slick";
const NewArrival = () => {
 
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-32  max-xl:mt-10 max-md:mt-5">
      <Container>
        <Heading title="New Arrivals" />
        {/* <Flex className=" flex flex-wrap justify-between gap-x-4 max-xl:gap-x-5 max-lg:gap-y-6 max-sm:block"> */}

        <Slider {...settings}>
          <div className="  max-w-[370px] max-[1100px]:max-w-[310px] max-[600px]:max-w-full">
            <Product badgeShow={false} imgSrc="assests/p1.png" />
          </div>
          <div className=" ml-4 max-w-[370px] max-[1100px]:max-w-[300px] max-[600px]:max-w-full">
            <Product badgeShow={true} imgSrc="assests/p2.png" />
          </div>
          <div className=" ml-4 max-w-[370px] max-[1100px]:max-w-[300px] max-[600px]:max-w-full ">
            <Product badgeShow={false} imgSrc="assests/p1.png" />
          </div>
          <div className=" ml-4 max-w-[370px] max-[1100px]:max-w-[300px] max-[600px]:max-w-full">
            <Product badgeShow={true} imgSrc="assests/p1.png" />
          </div>
          <div className="max-w-[370px] max-[1100px]:max-w-[300px] max-[600px]:max-w-full">
            <Product badgeShow={true} imgSrc="assests/p1.png" />
          </div>
        </Slider>
        {/* </Flex> */}
      </Container>
    </div>
  );
};

export default NewArrival;
