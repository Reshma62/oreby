import React from "react";
import Images from "./Images";
import Badge from "./Badge";
import { AiFillHeart, AiOutlineReload } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import Flex from "./Flex";
const Product = ({ imgSrc, badgeShow }) => {
  return (
    <div className="max-sm:mb-6">
      <div className="group relative overflow-y-hidden">
        <Images className="w-full" imgSrc={imgSrc} />
        {badgeShow && <Badge title="New" />}
        <div className="max-xl:bottom-[-52%] absolute bottom-[-47%] left-0 h-36 w-full bg-white py-5 px-5 transition-all group-hover:bottom-0">
          <Flex className="max-sm:gap-x-2 flex items-center justify-end gap-x-4">
            <p className="font-dm text-base text-[#6D6D6D] hover:font-bold hover:text-primary">
              Add to Wish List
            </p>
            <AiFillHeart />
          </Flex>
          <Flex className="max-sm:gap-x-2 flex items-center justify-end gap-x-4 py-5">
            <p className="font-dm text-base text-[#6D6D6D] hover:font-bold hover:text-primary">
              Compare
            </p>
            <AiOutlineReload />
          </Flex>
          <Flex className="max-sm:gap-x-2 flex items-center justify-end gap-x-4">
            <p className="font-dm text-base text-[#6D6D6D] hover:font-bold hover:text-primary">
              Add to Cart
            </p>
            <BsFillCartFill />
          </Flex>
        </div>
      </div>
      <div className="max-sm:mt-3 mt-6">
        <Flex className="flex items-center justify-between">
          <h3 className="font-dm font-bold text-primary text-xl midum:text-base">
            Basic Crew Neck Tee
          </h3>
          <p className="font-dm text-base font-normal text-[#767676] ">
            $44.00
          </p>
        </Flex>
        <p className="max-sm:mt-2 mt-4 font-dm text-base font-normal text-[#767676]">
          Black
        </p>
      </div>
    </div>
  );
};

export default Product;
