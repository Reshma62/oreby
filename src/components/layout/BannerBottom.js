import React from 'react'
import Container from "./Container"
import Flex from "./Flex"
import {TbNumber2} from "react-icons/tb";
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";
const BannerBottom = () => {
  return (
    <div className="mt-[-6px] border-y border-solid border-[#F0F0F0] py-6">
      <Container>
        <Flex className="flex justify-between max-sm:flex-wrap  max-sm:gap-y-4">
          <div className="flex items-center gap-x-4 max-sm:gap-x-2">
            <TbNumber2 className="text-2xl text-primary" />{" "}
            <p className="font-dm text-base text-[#6D6D6D]">
              Two years warranty
            </p>
          </div>
          <div className="flex items-center gap-x-4">
            <MdLocalShipping className="text-2xl text-primary" />{" "}
            <p className="font-dm text-base text-[#6D6D6D]">Free shipping</p>
          </div>
          <div className="flex items-center gap-x-4 max-sm:mx-auto">
            <AiOutlineReload className="text-2xl text-primary" />{" "}
            <p className="font-dm text-base text-[#6D6D6D]">
              Return policy in 30 days
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
}

export default BannerBottom