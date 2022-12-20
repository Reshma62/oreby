import React from 'react'
import { HiArrowNarrowLeft } from "react-icons/hi";
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="bg-[rgba(0,0,0,0.2)] absolute left-0 top-[50%] z-50 !flex h-[64px] w-[64px] translate-y-[-50%] items-center justify-center rounded-full"
      style={{ ...style }}
      onClick={onClick}
    >
      <HiArrowNarrowLeft className='text-white text-2xl'/>
    </div>
  );
};

export default SamplePrevArrow