import React from "react";
import { Link } from "react-router-dom";
const ListItem = ({ className, itemName, title ,href }) => {
  return (
    <li className={className} title={title}>
      <Link href={href}>{itemName}</Link>
    </li>
  );
};

export default ListItem;
