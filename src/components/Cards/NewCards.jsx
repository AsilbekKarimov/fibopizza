import React, { useState } from 'react';

const NewCards = ({ title, img, price }) => {
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };
  return (
     <div className="container  flex-1 min-w-[24%] py-10">
      <div className="flex items-center  p-3 rounded-xl">
        <div>
          {imageLoading && <span className="loading loading-spinner loading-lg"></span>}
          <img
            className={`relative size-[71px] rounded-full ${imageLoading ? 'hidden' : ''}`}
            src={img}
            alt={title}
            loading="lazy"
            onLoad={handleImageLoad}
          />
        </div>
        <div className="relative items-center ml-8">
          <p><b>{title}</b></p>
          <p className="text-yellow-500"><b>от {price} ₽</b></p>
        </div>
      </div>
    </div >
  );
};  
export default NewCards;