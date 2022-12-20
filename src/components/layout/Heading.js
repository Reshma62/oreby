import React from 'react'

const Heading = ({title}) => {
  return (
    <div className="max-md:mb-5 mb-12 font-dm text-[39px] font-bold text-primary max-sm:text-2xl max-md:text-2xl max-xl:text-3xl">
      {title}
    </div>
  );
}

export default Heading