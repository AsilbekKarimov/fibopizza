import React, { useEffect, useState } from "react";

import SousCard from "./others/SousCard/SousCard";

const SousSection = () => {
  const [sous, setSous] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      let startTime = Date.now();
      let request = await fetch(
        "https://663636c2415f4e1a5e26a600.mockapi.io/api/v1/souses"
      );
      let response = await request.json();
      let endTime = Date.now();

      console.log((endTime - startTime) / 1000 + "ms");
      setSous(response);
      setLoading(true);
    }
    getData();
  }, []);

  return (
    <div className="bg-white py-[50px]">
      {loading ? (
        <div className="w-full max-w-[50%] mx-auto">
          <h1 className="text-[#F7D22D] leading-[17px] text-[24px] font-bold mb-[20px]">
            Соусы к бортикам и закускам
          </h1>
          <div className="flex items-center gap-[21px]">
            {sous.map((item, id) => (
              <SousCard
                key={id}
                img={item.image}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default SousSection;
