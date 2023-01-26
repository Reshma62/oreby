import React from 'react'

const InputField = (props) => {
  return (
    <div>
      <h4 className="font-dm text-base font-bold capitalize text-primary">
        {props.title}
      </h4>

      <props.as
        placeholder={props.placeholder}
        className=" mt-3 w-full border-b border-[#f0f0f0] pb-4 placeholder:font-dm placeholder:text-sm placeholder:text-[#767676] placeholder:font-normal outline-none mb-6"
      />
    </div>
  );
}

export default InputField