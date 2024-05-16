import React, { useEffect, useState } from 'react';
import NewCards from './NewCards';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function NewApp() {
  const [newCards, setNewCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSwiper, setIsSwiper] = useState(false); 

  useEffect(() => {
    const fetchNewCards = async () => {
      try {
        const response = await fetch('https://66362e44415f4e1a5e268d06.mockapi.io/api/v1/newCards/newPizzaCards');
        if (!response.ok) {
          throw new Error('Failed to fetch new cards');
        }
        const data = await response.json();
        setNewCards(data);
        setIsSwiper(data.length > 4);
      } catch (error) {
        console.error('Error fetching new cards:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewCards();
  }, []);

  return (
    <div className="NewApp max-w-[85%] mx-auto">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <>
          {isSwiper ? ( 
            <div className="relative">
              <Swiper
                spaceBetween={30}
                slidesPerView={4}
                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next'
                }}
              >
                {newCards.map((item, index) => (
                  <SwiperSlide key={index}>
                    <NewCards title={item.title} img={item.img} price={item.price} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <div className="swiper-button-prev bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                  &lt;
                </div>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <div className="swiper-button-next bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                  &gt;
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-wrap">
              {newCards.map((item, index) => (
                <NewCards key={index} title={item.title} img={item.img} price={item.price} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default NewApp;
