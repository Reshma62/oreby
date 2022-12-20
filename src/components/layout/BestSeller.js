import React from "react";

import Container from "./Container";
import Flex from "./Flex";
import Heading from "./Heading";
import Product from "./Product";

const BestSeller = () => {
  return (
    <div className="mt-32  max-xl:mt-10 max-md:mt-5">
      <Container>
        <Heading title="Our Bestsellers" />
        <Flex className=" flex flex-wrap justify-between gap-x-4 max-xl:gap-x-5 max-myTab:gap-y-7 max-sm:block">
          <div className=" basis-[23%] max-[1100px]:basis-[48%] max-[600px]:max-w-full">
            <Product badgeShow={false} imgSrc="assests/p1.png" />
          </div>
          <div className=" basis-[23%] max-[1100px]:basis-[48%] max-[600px]:max-w-full">
            <Product badgeShow={true} imgSrc="assests/p2.png" />
          </div>
          <div className=" basis-[23%] max-[1100px]:basis-[48%] max-[600px]:max-w-full ">
            <Product badgeShow={false} imgSrc="assests/p1.png" />
          </div>
          <div className="basis-[23%] max-[1100px]:basis-[48%] max-[600px]:max-w-full">
            <Product badgeShow={true} imgSrc="assests/p1.png" />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default BestSeller;
