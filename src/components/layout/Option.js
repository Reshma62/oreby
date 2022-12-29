import React from 'react'

const Option = ({ value, selected,itemName }) => {
  return (
    <option className='font-dm text-[#767676] text-base font-normal' value={value} selected={selected}>
      {itemName}
    </option>
  );
};

export default Option