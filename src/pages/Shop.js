import React, { useState, useEffect, useRef } from "react";
import BreadCrumb from "../components/layout/BreadCrumb";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import { BsFillGridFill, BsListStars } from "react-icons/bs";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Pagination from "../components/layout/Pagination";
import Selected from "../components/layout/Selected";
import Option from "../components/layout/Option";
import LeftSidebar from "../components/layout/LeftSidebar";
const Shop = () => {
  const [showNumber, setShowNumber] = useState(12);
  let [showCatOption, setShowCatOption] = useState(false);
  let catShowRef = useRef();
  let handleShowNumber = (e) => {
    setShowNumber(+e.target.value);
  };
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // console.log(catShowRef.current.contains(e.target));
      if (catShowRef.current.contains(e.target)) {
        setShowCatOption(true);
      } else {
        setShowCatOption(false);
      }
    });
  }, [])

  useEffect(() => {
    let resizeWidth = () => {
      let innerWidth = window.innerWidth;
      if (innerWidth < 600) {
        setShowCatOption(false);
      } else {
        setShowCatOption(true);
      }
    };
    resizeWidth();
  }, []);

  return (
    <div className=" mt-5 lg:mt-32">
      <Container>
        <BreadCrumb />
        <Flex className={` relative mt-5 block gap-x-10 sm:mt-12 sm:flex`}>
          <div className="w-full sm:w-[25%] ">
            {showCatOption && (
              <div className="absolute top-24 left-0 z-50 w-full bg-[#f0f0f0] p-3 sm:static sm:w-auto sm:bg-transparent sm:p-0">
                <p
                  onClick={() => setShowCatOption(false)}
                  className="flex cursor-pointer justify-end p-2 text-xl text-black sm:hidden"
                >
                  <AiOutlineCloseCircle />
                </p>
                <LeftSidebar />
              </div>
            )}
          </div>
          <div className="relative w-full sm:w-[75%] ">
            <Flex className="mb-5 flex flex-wrap justify-between sm:mb-14 ">
              <div className=" h-max w-2/5 lg:w-auto  sm:w-1/2">
                <div className="flex gap-2">
                  <p className="cursor-pointer bg-black p-2 text-lg text-white">
                    <BsFillGridFill />
                  </p>
                  <p className="cursor-pointer p-2 text-xl">
                    <BsListStars />
                  </p>
                </div>
                <p
                  onClick={() => setShowCatOption(!showCatOption)}
                  className="mt-3 block cursor-pointer p-2 text-xl sm:hidden"
                >
                  <HiOutlineBarsArrowDown />
                </p>
              </div>
              <div className="flex w-3/5 flex-wrap gap-x-10 gap-y-3 sm:w-1/2  lg:gap-y-0 lg:w-auto">
                <div className="flex items-center gap-x-4">
                  <div>
                    <p className="font-dm text-base font-normal text-[#767676]">
                      Sort by:
                    </p>
                  </div>

                  <Selected
                    className={`block w-[150px] border border-[#f0f0f0] py-1 px-5 font-dm text-[#767676] lg:w-[240px]`}
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
                      Show:
                    </p>
                  </div>

                  <Selected
                    handleShow={handleShowNumber}
                    className={`block w-[90px] border border-[#f0f0f0] py-1 px-5 font-dm text-[#767676] sm:w-[140px]`}
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
