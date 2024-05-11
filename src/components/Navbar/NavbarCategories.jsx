import React, { useState } from "react";

const NavbarCategories = () => {
  const [itemCount, setItemCount] = useState(0)
  

  const addCount = () => setItemCount(itemCount + 1)
  const subtractCount = () => setItemCount(itemCount - 1) 
  const priceCount = itemCount * 120

  return (
    <div className="flex">
      <div className="flex w-full max-w-[82%] mx-auto">
        <div className="flex text-[#0E0C0D] sm:flex-col lg:flex-row justify-between gap-[1%] font-bold items-center flex-grow">
          <p>Пицца</p>
          <p>Паста</p>
          <p>Супы</p>
          <p>Салаты</p>
          <p>Напитки</p>
          <p>Десерты</p>
          <p>Бакалея</p>
          <p>Акции</p>
          <p>Комбо</p>
          <p>Контакты</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="font-extrabold text-[#696F7A] mx-[30px]">Войти</button>
          <div className="dropdown dropdown-end ">
            <div tabIndex={0} role="button" className="btn hover:bg-yellow-300 m-1 w-[200px] h-[42px] bg-[#F7D22D] rounded-[8px] font-bold items-center justify-center">Корзина | 3</div>
              <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-[349px]">
                <li>
                  <div className="flex gap-[17px] hover:bg-gray-2 00 hover:rounded-lg p-2">
                  <img src="public/image 9.png" className="w-[71px] h-[71px]" alt="" />
                  <div className="flex flex-col gap-[12px]">
                    <p className="font-bold text-[15px]">С креветками и трюфелями</p>
                    <div className="w-[93px] h-[32px] bg-[#F3F3F7] justify-around rounded-[8px] flex items-center">
                      <button className="text-[18px] font-bold" onClick={subtractCount}>
                        -
                      </button>
                      <p className="text-[18px] font-bold">{itemCount}</p>
                      <button className="text-[18px] font-bold" onClick={addCount}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col w-[80px] items-end gap-[12px]">
                    <button>
                      <img src="public/Close.png" alt="" />
                    </button>
                    <p className="font-bold text-[20px] text-[#F7D22D]">{priceCount}₽</p>
                  </div>
                  </div>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarCategories;
