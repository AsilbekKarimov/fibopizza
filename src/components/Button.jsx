import React from "react";

const Button = ({ onClick, cardData }) => {
  const handleClick = () => {
    if (typeof onClick === "function") {
      onClick(cardData); // Pass card data when button is clicked
    } else {
      console.error("onClick is not a function");
    }
  };

  return (
    <button
      className="px-[24px] py-[10px] bg-[#F7D22D] rounded-lg text-white font-bold hover:bg-yellow-300 active:scale-90 transition duration-300"
      onClick={handleClick}
    >
      В корзину
    </button>
  );
};

export default Button;
