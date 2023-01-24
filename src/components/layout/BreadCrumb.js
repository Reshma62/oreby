import React from 'react'

import { FaAngleRight } from "react-icons/fa";
const BreadCrumb = () => {
  return (
    <div className=" mt-5 lg:mt-32">
      <div className="mb-3 font-dm text-lg lg:text-5xl font-bold capitalize text-primary">
        {window.location.pathname.split("/")[1]}
      </div>
      <div className="">
        <p className=" flex items-center gap-x-2 font-dm text-xs font-normal capitalize text-[#767676]">
          Home <FaAngleRight className="text-base" />{" "}
          {window.location.pathname.split("/")[1]}
        </p>
      </div>
    </div>
  );
}

export default BreadCrumb;