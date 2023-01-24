import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../layout/Product";
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 29, 30,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div className=" max-sm:w-full w-[32%] max-myTab:w-[48%]">
            <Product badgeShow={false} imgSrc="assests/p1.png" />
          </div>
        ))}
    </>
  );
}
const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setcurrentPage] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    const currentPage = event.selected;
    setcurrentPage(currentPage);
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className=" block flex-wrap justify-between gap-y-8 sm:flex">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        breakClassName="page-item py-2 px-3 sm:py-2.5 sm:px-5 inline-block border-solid border border-[#f0f0f0]"
        breakLinkClassName="page-link"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="flex-wrap gap-y-3 sm:gap-y-0 flex gap-x-3.5 mt-5"
        activeClassName="bg-black text-white"
        pageClassName=" page-item py-2 px-3 sm:py-2.5 sm:px-5 inline-block border-solid border border-[#f0f0f0]"
        pageLinkClassName="page-link"
        previousClassName="hidden"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="hidden"
        marginPagesDisplayed={1}
      />
      <p className="static bottom-0 right-0 mt-6 sm:absolute sm:mt-0">
        Products from {itemOffset} to {endOffset}, page no:{currentPage} of{" "}
        {items.length}
      </p>
    </>
  );
};

export default Pagination;
