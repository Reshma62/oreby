import React from "react";

const Badge = ({ title }) => {
  return (
        <span className="inline-block bg-primary py-2 px-6 text-white absolute top-5 left-5">
          {title}
        </span>
  );
};

export default Badge;
