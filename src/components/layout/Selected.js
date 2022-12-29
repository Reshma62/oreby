import React from "react";

const Selected = ({ children, className, handleShow }) => {
  return (
    <div>
      <select onChange={handleShow} id="countries" className={className}>
        {children}
      </select>
    </div>
  );
};

export default Selected;
