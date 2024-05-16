import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import {Navigation, Autoplay} from "swiper/modules";

const FoodSwiper = () => {
  return (
    <div className="flex items-center justify-center mx-auto w-[80%] mt-[45px]">
      <Swiper
        slidesPerView={2}
        centeredSlidesBounds={true}
        spaceBetween={30}
        navigation={true}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper h-[400px]"
      >
        <SwiperSlide>
          <img src="swiper-slides/slide3.png" className="w-full h-full object-cover" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="swiper-slides/slide2.png" className="w-full h-full object-cover" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="swiper-slides/slide3.png" className="w-full h-full object-cover" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FoodSwiper;
