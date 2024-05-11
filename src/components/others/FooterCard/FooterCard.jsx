import React from "react";

const FooterCard = (props) => {
  return (
    <div className="flex items-center justify-center w-[100px] h-[50px] border-[2px] rounded-[13px] border-[#E3ECF5]">
      <img src={props.img} alt="" />
    </div>
  );
};

export default FooterCard;
