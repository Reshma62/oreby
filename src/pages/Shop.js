import React, { useState } from "react";
import BreadCrumb from "../components/layout/BreadCrumb";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import { FaAngleRight } from "react-icons/fa";
import { BsFillGridFill, BsListStars } from "react-icons/bs";
import Pagination from "../components/layout/Pagination";
import Selected from "../components/layout/Selected";
import Option from "../components/layout/Option";
const Shop = () => {

  const [ showNumber, setShowNumber ] = useState( 12 );
  let handleShowNumber = (e) => {
    setShowNumber(+e.target.value);
  };
  return (
    <div className="mt-32">
      <Container>
        <BreadCrumb />
        <div className="">
          <p className=" flex items-center gap-x-2 font-dm text-xs font-normal text-[#767676]">
            Home <FaAngleRight className="text-base" />{" "}
            {window.location.pathname.split("/")[1]}
          </p>
        </div>

        <Flex className={`mt-12 flex gap-x-10`}>
          <div className="w-[25%] bg-red-500">jgjhfghjg</div>
          <div className="relative w-[75%] ">
            <Flex className="mb-14 flex justify-between">
              <div className="flex gap-2">
                <p className="bg-black p-2 text-lg text-white cursor-pointer">
                  <BsFillGridFill />
                </p>
                <p className="p-2 text-xl cursor-pointer">
                  <BsListStars />
                </p>
              </div>
              <div className="flex gap-x-10">
                <div className="flex items-center gap-x-4">
                  <div>
                    <p className="font-dm text-base font-normal text-[#767676]">
                      Sort by:
                    </p>
                  </div>

                  <Selected
                    className={`block w-[240px] border border-[#f0f0f0] py-1 px-5 font-dm text-[#767676]`}
                  >
                    <Option
                      selected={"selected"}
                      value={`CA`}
                      itemName={"Featured"}
                    />
                    <Option value={`CA`} itemName={"Japan"} />
                    <Option value={`CA`} itemName={"Bangladesh"} />
                  </Selected>
                </div>
                <div className="flex items-center gap-x-4">
                  <div>
                    <p className="font-dm text-base font-normal text-[#767676]">
                      Show
                    </p>
                  </div>

                  <Selected
                    handleShow={handleShowNumber}
                    className={`block w-[140px] border border-[#f0f0f0] py-1 px-5 font-dm text-[#767676]`}
                  >
                    <Option
                      selected={"selected"}
                      value={`12`}
                      itemName={"12"}
                    />
                    <Option value={`24`} itemName={"24"} />
                    <Option value={`36`} itemName={"36"} />
                    <Option value={`48`} itemName={"48"} />
                  </Selected>
                </div>
              </div>
            </Flex>
            <Pagination itemsPerPage={showNumber} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
