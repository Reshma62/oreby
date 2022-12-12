import React, { useState, useRef, useEffect } from "react";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Images from "./Images";
import Flex from "./Flex";
import { HiOutlineBars2 } from "react-icons/hi2";
import { FaSearch, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";
import { Link } from "react-router-dom";

const Header = () => {
  const [categoryDropDownShow, setCategoryDropDownShow] = useState(false);
  const [userDropDownShow, setUserDropDownShow] = useState(false);
  const [cartDropDownShow, setCartDropDownShow] = useState(false);
  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();
 
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryRef.current.contains(e.target)) {
        setCategoryDropDownShow(true);
      } else {
        setCategoryDropDownShow(false);
      }
      if (userRef.current.contains(e.target)) {
        setUserDropDownShow(true);
      } else {
        setUserDropDownShow(false);
      }
      if (cartRef.current.contains(e.target)) {
        setCartDropDownShow(true);
      } else {
        setCartDropDownShow(false);
      }
    });
  }, []);
  
  return (
    <div className="bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="flex items-center justify-between">
          <div>
            <Dropdown className="relative" dropref={categoryRef}>
              <p className="flex items-center gap-x-2.5 ">
                {" "}
                <HiOutlineBars2 className="text-black" />{" "}
                <span className="font-dm text-base font-normal max-md:text-sm max-sm:hidden">
                  Shop by Category
                </span>
              </p>
              {categoryDropDownShow && (
                <List className="absolute top-10 w-[263px] bg-primary">
                  <ListItem
                    className="mb-2 border-b border-solid border-[#2D2D2D]  py-4 px-8 font-dm text-sm font-normal  text-zinc-400 duration-300 ease-in before:invisible before:block  before:h-0 before:overflow-hidden before:font-bold before:content-[attr(title)] hover:px-10 hover:font-bold hover:text-white lg:mb-0"
                    itemName="Accesories"
                    title="Accesories"
                  />
                  <ListItem
                    className="mb-2 border-b border-solid border-[#2D2D2D]  py-4 px-8 font-dm text-sm font-normal  text-zinc-400 duration-300 ease-in before:invisible before:block  before:h-0 before:overflow-hidden before:font-bold before:content-[attr(title)] hover:px-10 hover:font-bold hover:text-white lg:mb-0"
                    itemName="Furniture"
                    title="Furniture"
                  />
                  <ListItem
                    className="mb-2 border-b border-solid border-[#2D2D2D]  py-4 px-8 font-dm text-sm font-normal  text-zinc-400 duration-300 ease-in before:invisible before:block  before:h-0 before:overflow-hidden before:font-bold before:content-[attr(title)] hover:px-10 hover:font-bold hover:text-white lg:mb-0"
                    itemName="Electronics"
                    title="Electronics"
                  />
                  <ListItem
                    className="mb-2 border-b border-solid border-[#2D2D2D]  py-4 px-8 font-dm text-sm font-normal  text-zinc-400 duration-300 ease-in before:invisible before:block  before:h-0 before:overflow-hidden before:font-bold before:content-[attr(title)] hover:px-10 hover:font-bold hover:text-white lg:mb-0"
                    itemName="Clothes"
                    title="Clothes"
                  />
                  <ListItem
                    className="mb-2 border-b border-solid border-[#2D2D2D]  py-4 px-8 font-dm text-sm font-normal  text-zinc-400 duration-300 ease-in before:invisible before:block  before:h-0 before:overflow-hidden before:font-bold before:content-[attr(title)] hover:px-10 hover:font-bold hover:text-white lg:mb-0"
                    itemName="Bags"
                    title="Bags"
                  />
                  <ListItem
                    className="mb-2 border-0 border-solid border-[#2D2D2D]  py-4 px-8 font-dm text-sm font-normal  text-zinc-400 duration-300 ease-in before:invisible before:block  before:h-0 before:overflow-hidden before:font-bold before:content-[attr(title)] hover:px-10 hover:font-bold hover:text-white lg:mb-0 "
                    itemName="Home appliances"
                    title="Home appliances"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <div className="relative w-[600px] max-[920px]:w-[450px] max-[769px]:w-[420px] max-md:w-[380px] max-sm:w-auto">
            <Search
              className=" w-full py-4 px-5 font-dm font-normal placeholder:text-[#C4C4C4] max-sm:py-2"
              placeholder="Search Products"
            />
            <FaSearch className="absolute top-1/2 right-5 translate-y-[-50%]" />
          </div>
          <div>
            <Flex className="flex items-center gap-x-10 max-md:gap-x-8 max-sm:gap-x-6">
              <Dropdown className="relative" dropref={userRef}>
                <div className="flex items-center">
                  <FaUserAlt />
                  <RxTriangleDown />
                </div>
                {userDropDownShow && (
                  <List className="absolute top-10 right-0 w-[200px] border border-solid border-[#f0f0f0] bg-white text-center">
                    <ListItem
                      className="mb-2 border-b border-solid border-[#f0f0f0]  py-4 px-8 font-dm text-sm font-normal  text-primary duration-300 ease-in before:invisible before:block  before:h-0 before:overflow-hidden before:font-bold before:content-[attr(title)] hover:bg-primary hover:font-bold hover:text-white lg:mb-0"
                      itemName="My Account"
                      title="My Account"
                    />
                    <ListItem
                      className="mb-2 border-b border-solid border-[#f0f0f0]  py-4 px-8 font-dm text-sm font-normal  text-primary duration-300 ease-in before:invisible before:block  before:h-0 before:overflow-hidden before:font-bold before:content-[attr(title)] hover:bg-primary hover:font-bold hover:text-white lg:mb-0"
                      itemName="Log Out"
                      title="Log Out"
                    />
                  </List>
                )}
              </Dropdown>

              <div>
                <Dropdown className="relative" dropref={cartRef}>
                  <div>
                    <FaShoppingCart className="text-xl" />
                  </div>
                  {cartDropDownShow && (
                    <div className="absolute top-10 right-0 w-[360px] border border-solid border-[#f0f0f0]">
                      <div className="bg-[#F5F5F3] p-5">
                        <Flex className="flex items-center justify-between">
                          <div className=" ">
                            <Images imgSrc="assests/cartimg.png" />
                          </div>
                          <div className="ml-[-20px]">
                            <h3 className="font-dm text-base font-bold text-primary">
                              Black Smart Watch
                            </h3>
                            <p className="mt-3 font-dm text-base font-bold text-primary">
                              $44.00
                            </p>
                          </div>
                          <div>
                            <ImCross className="text-sm" />
                          </div>
                        </Flex>
                      </div>
                      <div className="p-5">
                        <p className="mb-3 font-dm text-base text-[#767676]">
                          Subtotal:{" "}
                          <span className="font-bold text-primary">$44.00</span>
                        </p>
                        <Link
                          to="#"
                          className="mr-5 inline-block border border-solid border-[#2B2B2B] py-4 px-10 font-dm text-sm font-bold text-primary"
                        >
                          View Cart{" "}
                        </Link>
                        <Link
                          to="#"
                          className="inline-block border border-solid border-[#2B2B2B] bg-primary py-4 px-10 font-dm text-sm font-bold text-white "
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  )}
                </Dropdown>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
