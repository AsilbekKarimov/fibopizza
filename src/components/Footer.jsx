import React from "react";

import FooterCard from "./others/FooterCard/FooterCard";
import ContactButton from "./others/ContactBtn/ContactButton";
import PhoneNumber from "./others/PhoneNum/PhoneNumber";
import { Link } from "react-router-dom";

const Footer = () => {
  const TextClassList = ["leading-[28px]", "text-[#0E0C0D]", "text-[16px]"];
  return (
    <div className="bg-white relative">
      <img
        src="/footer-img/absolute-logo.png"
        alt=""
        className="absolute right-0 bottom-0"
      />
      <div className="flex items-center jusitfy-center gap-[120px] w-[80%] mx-auto">
        <div className="w-[50%] pt-[55px] flex flex-col items-start justify-center">
          <img src="/footer-img/FooterLogo.png" alt="" />
          <div
            className={
              TextClassList.join(" ") +
              " font-bold flex items-center justify-start gap-[50px] mt-[33px]"
            }
          >
            <p>Калорийность и состав</p>
            <p>Правовая информация</p>
          </div>
          <p className={TextClassList.join(" ") + " font-bold mt-[23px]"}>
            Мы в соцсетях
          </p>
          <div
            className={
              TextClassList.join(" ") +
              " font-semibold mt-[15px] flex items-center justify-center gap-[100px]"
            }
          >
            <div className="flex flex-col">
              <Link to="https://www.youtube.com/">YouTube</Link>
              <Link to="https://www.instagram.com/">Instagram</Link>
            </div>
            <div className="flex flex-col">
              <Link to="https://www.vk.com/">ВКонтакте</Link>
              <Link to="https://www.facebook.com/">Facebook</Link>
            </div>
            <p className="w-[163px]">Москва ул. Проспект Вернадского 86В</p>
          </div>
          <div className="flex gap-[160px]">
            <p className="mt-[45px] mb-[71px] text-[#0E0C0D] w-full">
              YaBao Все праав защищены © 2021
            </p>
            <div className="flex items-center justify-center gap-[23px]">
              <img src="/footer-img/payment-logo.png" alt="" />
              <img src="/footer-img/payment-logo2.png" alt="" />
              <img src="/footer-img/payment-logo3.png" alt="" />
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <p className="font-bold leading-[17px] text-[20px] mb-[33px] text-black">
            Остались вопросы? А мы всегда на связи:
          </p>
          <div className="flex flex-wrap gap-[14px]">
            <Link to="https://www.viber.com/">
              <FooterCard img="/footer-img/viber.png" />
            </Link>
            <Link to="https://www.skype.com/">
              <FooterCard img="/footer-img/skype.png" />
            </Link>
            <Link to="https://www.messenger.com/">
              <FooterCard img="/footer-img/messenger.png" />
            </Link>
            <Link to="https://web.telegram.org/">
              <FooterCard img="/footer-img/telegram.png" />
            </Link>
            <Link to="https://www.facebook.com/">
              <FooterCard img="/footer-img/facebook.png" />
            </Link>
            <Link to="https://www.vk.com/">
              <FooterCard img="/footer-img/vk.png" />
            </Link>
            <Link to="">
              <div className="flex items-center justify-center w-[216px] h-[50px] border-[2px] rounded-[13px] border-[#E3ECF5]">
                <p className="text-[13px] font-bold leading-[16px] text-black">
                  Написать нам
                </p>
              </div>
            </Link>
          </div>
          <PhoneNumber tel="8 499 391-84-49" />
          <ContactButton tel="+998335181855" text="Заказать звонок" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
