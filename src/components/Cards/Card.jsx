import React from "react";
import Button from "../Button";
import NewBadge from "../others/NewBadge/NewBadge";

const Card = (props) => {
  const { img, new: isNew, title, description, price, onButtonClick } = props;

  const cardData = {
    id: props.id, 
    title,
    description,
    price
  };

  return (
    <div>
      <div className='px-6 py-2 flex  justify-start flex-col mb-[49px]'>
        <div className='flex justify-center mb-[8px]'>
            <div className='relative'>
                <img src={img} className='w-[253px] h-[253px] rounded-full' alt="" />
                {
                    isNew === true
                    ?
                    <div><NewBadge/></div>
                    :
                    <div></div>
                }
            </div>    
        </div>
        <div className='flex flex-col justify-between h-full'>
          <div className='flex flex-col'>
            <p className='text-[#797979] font-extrabold text-[24px] mb-[14px]'>{title}</p>
            <p className='text-[#686466] text-[13px] mb-[12px] leading-[19px] w-[256px] flex flex-wrap'>{description}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-[#231F20] text-[22px] font-bold'>{price}</p>
            <Button onClick={onButtonClick} cardData={cardData}/> {/* Pass cardData to Button component */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
