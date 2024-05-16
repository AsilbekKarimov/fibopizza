import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {Pagination, Navigation} from "swiper/modules";

const FoodSwiper = () => {
  return (
    <div className="flex items-center justify-center mx-auto">
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        centeredSlidesBounds={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[500px]"
      >
        <SwiperSlide>
          <img src="swiper-slides/slide3.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="swiper-slides/slide3.png" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="swiper-slides/slide2.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FoodSwiper;
