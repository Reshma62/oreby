import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Images from "./Images";

const Footer = () => {
  return (
    <div className="max-myTab:mt-10 mt-36 bg-[#F5F5F3] max-sm:py-5 py-14">
      <Container>
        <Flex className="flex justify-between max-lgmy:flex-wrap max-lgmy:gap-y-8">
          <div className=" max-2xl:flex-[5_5_23%] w-[10%] max-myTab:flex-[1_1_20%] max-lgmy:flex-[33%] max-sm:flex-[45%]">
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
            <List>
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-[#6D6D6D]"
                itemName="Home"
                href="#"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-[#6D6D6D]"
                itemName="Shop"
                href="#"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-[#6D6D6D]"
                itemName="About"
                href="#"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-[#6D6D6D]"
                itemName="Contact"
                href="#"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-[#6D6D6D]"
                itemName="Journal1"
                href="#"
              />
            </List>
          </div>
          <div className=" max-2xl:flex-[5_5_23%] w-[10%] max-myTab:flex-[1_1_20%] max-lgmy:flex-[33%] max-sm:flex-[45%]">
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <List>
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-[#6D6D6D]"
                itemName="Category 1"
                href="#"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-[#6D6D6D]"
                itemName="Category 2"
                href="#"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-[#6D6D6D]"
                itemName="Category 3"
                href="#"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-[#6D6D6D]"
                itemName="Category 4"
                href="#"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-[#6D6D6D]"
                itemName="Category 5"
                href="#"
              />
            </List>
          </div>
          <div className=" max-2xl:flex-[5_5_23%] w-[10%] max-myTab:flex-[1_1_20%] max-lgmy:flex-[3_1_0%] max-sm:flex-[45%] ">
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <List>
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-[#6D6D6D]"
                itemName="Privacy Policy"
                href="#"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-[#6D6D6D]"
                itemName="Terms & Conditions"
                href="#"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-[#6D6D6D]"
                itemName="Special E-shop"
                href="#"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-[#6D6D6D]"
                itemName="Shipping"
                href="#"
              />
              <ListItem
                className="mt-[6px] font-dm text-sm font-normal text-[#6D6D6D]"
                itemName="Secure Payments"
                href="#"
              />
            </List>
          </div>
          <div className=" max-2xl:flex-[5_5_23%] flex w-[30%] justify-center max-myTab:flex-[1_1_20%] max-lgmy:flex-[50%]  max-lgmy:justify-start max-sm:flex-[45%]">
            <div>
              <h4 className="mb-4 font-dm text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="mt-[6px] font-dm text-sm font-normal text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className=" max-2xl:flex-[4_91_23%] flex w-[40%] max-myTab:flex-[1_1_20%] max-myTab:justify-end max-lgmy:flex-[1_2_13%] max-lgmy:justify-center max-sm:order-first max-sm:w-full max-sm:flex-[1_2_100%] max-sm:justify-start">
            <div>
              <Images imgSrc="assests/logo.png" />
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
