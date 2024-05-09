import React from "react";

const CardLoading = () => {
  return (
    <div className="flex bg-slate-400 justify-between w-[300px] h-[430px] flex-col px-3 rounded-xl pb-3 shadow-lg shadow-slate-400 text-white py-[10px]">
      <div className="flex bg-slate-400 justify-between w-[300px] h-[430px] flex-col px-3 rounded-xl pb-3 shadow-lg shadow-slate-400 text-white py-[10px]">
        <div className="skeleton w-[278px] h-[185px] rounded-lg"></div>
        <div className="skeleton h-[19px] w-[80%] mt-2"></div>
        <div className="skeleton h-[15px] w-[90%] mt-2"></div>
        <div className="flex items-center gap-1 text-[15px] mt-2">
          <div className="skeleton h-5 w-5"></div>
          <div className="skeleton h-5 w-[20%]"></div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="skeleton h-[15px] w-[50%]"></div>
          <div className="skeleton h-[15px] w-[20%]"></div>
        </div>
        <div className="flex gap-1 items-center mt-2">
          <div className="skeleton h-5 w-5"></div> 
          <div className="skeleton h-5 w-[60%]"></div>
        </div>
        <div className="flex items-center justify-center mt-2">
          <div className="skeleton h-10 w-[60%]"></div>
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
