import React from "react";
import Container from "./Container";
// import image from "/public/assests/pr1.png";
const Promotional = () => {
  return (
    <div className="mt-32">
      <Container>
        <div
          style={{
            backgroundImage: `url(assests/pr1.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="grid grid-cols-[repeat(2,_1fr)340px] py-16 max-myTab:grid-cols-[repeat(1,_1fr)550px] max-myTab:py-6 max-md:grid-cols-[repeat(1,_1fr)450px] max-md:pl-4 max-sm:grid-cols-[repeat(1,_1fr)] max-sm:py-5"
        >
          <div className="col-start-2 max-sm:col-start-1	 ">
            <h2 className="mb-9 font-dm text-4xl font-bold text-primary max-myTab:mb-5 max-md:mb-4 max-sm:text-2xl">
              Phone of the year
            </h2>
            <p className=" mb-12 max-w-[511px] font-dm text-base font-normal text-primary max-myTab:mb-5 max-md:mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry orem Ipsum..
            </p>
            <button className="bg-primary py-5 px-14 font-dm text-sm font-bold text-white">
              Shop Now
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Promotional;
