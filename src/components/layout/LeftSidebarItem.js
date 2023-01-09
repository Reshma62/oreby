import React, { useState } from "react";
import { GoTriangleUp } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
const LeftSidebarItem = (props) => {
  const [showDropIcon, setShowDropIcon] = useState(props.subCategory);
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div>
      {showDropIcon ? (
        <div
          onClick={() => setShowDropDown(!showDropDown)}
          className=" flex cursor-pointer justify-between border-b border-solid border-[#F0F0F0] py-5 "
        >
          <h3 className="font-dm text-base text-[#767676]">
            {" "}
            {props.color && (
              <span
                className={`mr-3 inline-block h-[12px] w-[12px] rounded-full `}
                style={{ backgroundColor: props.color }}
              ></span>
            )}
            {props.title}
          </h3>
          {showDropIcon && (
            <AiOutlinePlus className="font-dm text-base text-[#767676]" />
          )}
        </div>
      ) : (
        <div className="flex cursor-pointer justify-between border-b border-solid border-[#F0F0F0] py-5 ">
          <h3 className="font-dm text-base text-[#767676]">
            {" "}
            {props.color && (
              <span
                className={`mr-3 inline-block h-[12px] w-[12px] rounded-full `}
                style={{ backgroundColor: props.color }}
              ></span>
            )}
            {props.title}
          </h3>
        </div>
      )}

      {showDropDown && props.children}
    </div>
  );
};

export default LeftSidebarItem;
