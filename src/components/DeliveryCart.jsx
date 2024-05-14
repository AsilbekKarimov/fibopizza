import React, { useEffect, useState } from 'react'

import DeliverInfoCart from './others/Deliver/DeliverInfoCart'
import GoogleMap from './others/Map/GoogleMap';


const DeliveryCart = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);

  const truncateText = (description, maxLength) => (
    description.length > maxLength ? `${description.substring(0, maxLength - 3)}...` : description
  );

  useEffect(() => {
    async function getData() {
      let startTime = Date.now()
      let request = await fetch("https://663636c2415f4e1a5e26a600.mockapi.io/api/v1/Delivery");
      let response = await request.json();
      let endTime = Date.now()

      console.log((endTime - startTime) / 1000 + "ms")
      setCard(response);
      setLoading(true);
    }
    getData();
  }, [])


  return (
    <div className='bg-[#E3ECF5] h-[688px]'>
      {
        loading
          ?
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[30px] font-extrabold text-[#F7D22D] pt-[56px]'>Оплата и Доставка</h1>
            <div className='flex items-center justify-center gap-[30px] mb-[32px]'>
              {card.map((item, id) => (
                <DeliverInfoCart key={id} text={truncateText(item.text, 50)} img={item.image} />
              ))}
            </div>
            {<GoogleMap />}
          </div>
          :
          <div className='flex justify-center items-center h-screen'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
      }
    </div>
  )
}

export default DeliveryCart
