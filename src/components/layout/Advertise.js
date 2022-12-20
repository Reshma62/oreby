import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Flex from "./Flex";
import Images from "./Images";
const Advertise = () => {
  return (
    <div className=" mt-36 max-lg:mt-5 max-xl:mt-10 max-md:mt-8 max-sm:mt-5">
      <Container>
        <Flex className="flex gap-x-10 max-xl:gap-x-6 max-lg:gap-x-4 max-md:gap-x-4 max-sm:gap-x-2.5">
          <div className="max-w-2/4">
            <Link to="#">
              <Images imgSrc="assests/ad1.png" />
            </Link>
          </div>
          <div className="max-w-2/4">
            <Link to="#">
              <Images imgSrc="assests/ad2.png" />
            </Link>
            <Link
              to="#"
              className=" mt-10 inline-block max-lg:mt-4 max-md:mt-5 max-sm:mt-2.5 max-xl:mt-5"
            >
              <Images imgSrc="assests/ad3.png" />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Advertise;
