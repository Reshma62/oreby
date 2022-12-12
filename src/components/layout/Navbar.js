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
        <Flex className="flex flex-col lg:flex-row py-8 ">
          <div className="w-full lg:w-2/5 ">
            <Images imgSrc="assests/logo.png" />
          </div>
          <div className="w-full lg:w-3/5 mt-5 lg:mt-0 bg-slate-500 lg:bg-transparent">
            <div className="text-lg flex justify-end lg:hidden absolute top-8 right-3">
              <RiBarChartHorizontalFill onClick={() => setShow(!show)} />
            </div>
            {show && (
              <List className="inline-block gap-x-10 justify-end lg:flex pl-5 lg:pl-0 py-2.5 lg:py-0 ">
                <ListItem
                  className="font-dm text-sm font-bold hover:font-bold text-white lg:text-[#262626] mb-2 lg:mb-0 before:block before:content-[attr(title)] before:invisible  before:overflow-hidden before:h-0 before:font-bold "
                  itemName="Home"
                  title="Home"
                />
                <ListItem
                  className="text-white lg:text-[#767676] hover:lg:text-[#262626] font-dm text-sm font-normal hover:font-bold  mb-2 lg:mb-0 before:block before:content-[attr(title)] before:invisible  before:overflow-hidden before:h-0 before:font-bold "
                  itemName="Shop"
                  title="Shop"
                />
                <ListItem
                  className="text-white lg:text-[#767676] font-dm text-sm font-normal hover:font-bold mb-2 lg:mb-0 hover:lg:text-[#262626] before:block before:content-[attr(title)] before:invisible  before:overflow-hidden before:h-0 before:font-bold "
                  itemName="About"
                  title="About"
                />
                <ListItem
                  className=" text-white lg:text-[#767676] font-dm text-sm font-normal hover:font-bold mb-2 lg:mb-0 hover:lg:text-[#262626] before:block before:content-[attr(title)] before:invisible  before:overflow-hidden before:h-0 before:font-bold "
                  itemName="Contacts"
                  title="Contacts"
                />
                <ListItem
                  className="text-white lg:text-[#767676] font-dm text-sm font-normal hover:font-bold hover:lg:text-[#262626] before:block before:content-[attr(title)] before:invisible  before:overflow-hidden before:h-0 before:font-bold "
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
