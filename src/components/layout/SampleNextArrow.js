import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute top-[50%] right-5 z-50 !flex h-[64px] w-[64px] translate-y-[-50%] items-center justify-center rounded-full bg-[rgba(0,0,0,0.2)]"
      style={{ ...style }}
      onClick={onClick}
    >
      <HiArrowNarrowRight className="text-2xl text-white" />
    </div>
  );
};

export default SampleNextArrow