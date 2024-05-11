import React from "react";

const SalesCard = ({ img, alt, divClass, imgClass }) => {
  return (
    <div className={divClass}>
      <img src={img} alt={alt} className={imgClass} />
    </div>
  );
};

export default SalesCard;
