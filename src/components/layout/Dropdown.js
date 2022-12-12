import React from 'react'

const Dropdown = ({ children, className, dropref, onClick }) => {
  return (
    <div className={className} ref={dropref} onClick={onClick}>
      {children}
    </div>
  );
};

export default Dropdown