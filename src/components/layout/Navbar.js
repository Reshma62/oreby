import Flex from "./Flex";
import Images from "./Images";
import List from "./List";
import ListItem from "./ListItem";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import Container from "./Container";

const Navbar = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    let resizeWidth = () => {
      let innerWidth = window.innerWidth;
      if (innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    resizeWidth();

    window.addEventListener("resize", resizeWidth);
  }, []);
  return (
    <nav>
      <Container>
        <Flex className="flex flex-col py-8 max-md:py-4 lg:flex-row items-center">
          <div className="w-full lg:w-2/5 ">
            <Images imgSrc="assests/logo.png" />
          </div>
          <div className="mt-5 w-full bg-slate-500 lg:mt-0 lg:w-3/5 lg:bg-transparent">
            <div className="absolute top-8 right-3 flex justify-end text-lg max-md:top-4 lg:hidden">
              <RiBarChartHorizontalFill onClick={() => setShow(!show)} />
            </div>
            {show && (
              <List className="inline-block justify-end gap-x-10 py-2.5 pl-5 lg:flex lg:py-0 lg:pl-0 ">
                <ListItem
                  className="mb-2 font-dm text-sm font-bold text-white before:invisible before:block before:h-0 before:overflow-hidden before:font-bold before:content-[attr(title)]  hover:font-bold lg:mb-0 lg:text-[#262626] "
                  itemName="Home"
                  title="Home"
                />
                <ListItem
                  className="mb-2 font-dm text-sm font-normal text-white before:invisible before:block  before:h-0 before:overflow-hidden before:font-bold before:content-[attr(title)] hover:font-bold  lg:mb-0 lg:text-[#767676] hover:lg:text-[#262626] "
                  itemName="Shop"
                  title="Shop"
                />
                <ListItem
                  className="mb-2 font-dm text-sm font-normal text-white before:invisible before:block before:h-0 before:overflow-hidden before:font-bold before:content-[attr(title)] hover:font-bold  lg:mb-0 lg:text-[#767676] hover:lg:text-[#262626] "
                  itemName="About"
                  title="About"
                />
                <ListItem
                  className=" mb-2 font-dm text-sm font-normal text-white before:invisible before:block before:h-0 before:overflow-hidden before:font-bold before:content-[attr(title)] hover:font-bold  lg:mb-0 lg:text-[#767676] hover:lg:text-[#262626] "
                  itemName="Contacts"
                  title="Contacts"
                />
                <ListItem
                  className="font-dm text-sm font-normal text-white before:invisible before:block before:h-0 before:overflow-hidden before:font-bold before:content-[attr(title)]  hover:font-bold lg:text-[#767676] hover:lg:text-[#262626] "
                  itemName="Journal"
                  title="Journal"
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
