import React, { useState } from "react";
import { GoTriangleUp } from "react-icons/go";

import LeftSidebarItem from "./LeftSidebarItem";
const LeftSidebarContent = ({ dropIcon, title,data }) => {
  const [showDropIcon, setShowDropIcon] = useState(dropIcon);
  const [showDropDown, setShowDropDown] = useState(dropIcon);
  return (
    <div className="mb-14">
      {showDropIcon ? (
        <div
          onClick={() => setShowDropDown(!showDropDown)}
          className="flex cursor-pointer justify-between"
        >
          <h3 className="font-dm text-xl font-bold text-primary ">{title}</h3>
          {showDropIcon && <GoTriangleUp />}
        </div>
      ) : (
        <div className="flex cursor-pointer justify-between">
          <h3 className="font-dm text-xl font-bold text-primary ">{title}</h3>
        </div>
      )}

      {showDropDown && (
        <>
          {data.map((item) =>
            item.subCategory ? (
              <LeftSidebarItem
                subCategory={item.subCategory ? true : false}
                title={`${item.name}`}
              >
                {item.subCategory &&
                  item.subCategory.map((subItem) => (
                    <p className="border-b border-solid border-[#F0F0F0] py-5 font-dm text-base text-[#767676]">
                      {subItem.name}
                    </p>
                  ))}
              </LeftSidebarItem>
            ) : (
              <LeftSidebarItem
                subCategory={item.subCategory ? true : false}
                title={`${item.name}`}
                color={item.code}
              >
                {item.subCategory &&
                  item.subCategory.map((subItem) => (
                    <p className="border-b border-solid border-[#F0F0F0] py-5 font-dm text-base text-[#767676]">
                      {subItem.name}
                    </p>
                  ))}
              </LeftSidebarItem>
            )
          )}
        </>
      )}
      {!showDropIcon && (
        <>
          {data.map((item) =>
            item.subCategory ? (
              <LeftSidebarItem
                subCategory={item.subCategory ? true : false}
                title={`${item.name}`}
                color={item.code}
              >
                {item.subCategory &&
                  item.subCategory.map((subItem) => (
                    <p className="border-b border-solid border-[#F0F0F0] py-5 font-dm text-base text-[#767676]">
                      {subItem.name}
                    </p>
                  ))}
              </LeftSidebarItem>
            ) : (
              <LeftSidebarItem
                subCategory={item.subCategory ? true : false}
                title={`${item.name}`}
                color={item.code}
              >
                {item.subCategory &&
                  item.subCategory.map((subItem) => (
                    <p className="border-b border-solid border-[#F0F0F0] py-5 font-dm text-base text-[#767676]">
                      {subItem.name}
                    </p>
                  ))}
              </LeftSidebarItem>
            )
          )}
        </>
      )}
    </div>
  );
};

export default LeftSidebarContent;
