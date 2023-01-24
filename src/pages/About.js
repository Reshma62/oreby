import React from 'react'
import Container from "../components/layout/Container"
import BreadCrumb from "../components/layout/BreadCrumb"
import Flex from "../components/layout/Flex"
import Images from "../components/layout/Images";
const About = () => {
  return (
    <Container>
      <BreadCrumb />
      <Flex className="mt-32 flex gap-x-10">
        <div className="w-1/2">
          <Images className="w-full" imgSrc="assests/aboutImg2.png" />
        </div>
        <div className="w-1/2">
          <Images className="w-full" imgSrc="assests/aboutImg1.png" />
        </div>
      </Flex>
      <div className="mt-32 mb-28">
        <h4 className="font-dm text-[39px] font-normal text-primary">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </h4>
      </div>
      <Flex className="flex justify-between">
        <div className="w-[32%]">
          <h4 className="mb-3 font-dm text-2xl font-bold text-primary">
            Our Vision
          </h4>
          <p className=" font-dm text-base font-normal text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="w-[32%]">
          <h4 className="mb-3 font-dm text-2xl font-bold text-primary">
            Our Story
          </h4>
          <p className=" font-dm text-base font-normal text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic.
          </p>
        </div>
        <div className="w-[32%]">
          <h4 className="mb-3 font-dm text-2xl font-bold text-primary">
            Our Brands
          </h4>
          <p className=" font-dm text-base font-normal text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
      </Flex>
    </Container>
  );


}

export default About