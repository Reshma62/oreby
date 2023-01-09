import React from 'react'
import LeftSidebarContent from './LeftSidebarContent';
import { category, colors, brands, prices } from "../../data/data";

const LeftSidebar = () => {

  return (
    <>
      <LeftSidebarContent
        title="Shop By Category"
        dropIcon={false}
        data={category}
      />
      <LeftSidebarContent title="Shop by Color" dropIcon={true} data={colors} />
      <LeftSidebarContent title="Shop By Brand" dropIcon={true} data={brands} />
      <LeftSidebarContent
        title="Shop By Price"
        dropIcon={false}
        data={prices}
      />
      {/* <LeftSidebarContent title="Shop by Color" dropIcon={true} />
      <LeftSidebarContent title="Shop By Brand" dropIcon={true} />
      <LeftSidebarContent title="Shop By Price" dropIcon={false} /> */}
    </>
  );
}

export default LeftSidebar