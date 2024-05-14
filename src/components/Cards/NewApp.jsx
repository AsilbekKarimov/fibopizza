import React, { useEffect, useState } from 'react';
import NewCards from './NewCards';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

function NewApp() {
  const [newCards, setNewCards] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchNewCards = async () => {
      try {
        const response = await fetch('https://66362e44415f4e1a5e268d06.mockapi.io/api/v1/newCards/newPizzaCards');
        if (!response.ok) { 
          throw new Error('Failed to fetch new cards');
        }
        const data = await response.json();
        setNewCards(data);
      } catch (error) {
        console.error('Error fetching new cards:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchNewCards();
  }, []);

  return (
    <div className="NewApp">
      {loading ? ( 
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <>
          {newCards.length > 4 ? (
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              navigation={false} // Убираем навигационные стрелки
            >
              {newCards.map((item, index) => (
                <SwiperSlide key={index}>
                  <NewCards title={item.title} img={item.img} price={item.price} />
                </SwiperSlide>
              ))}
            </Swiper>
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
