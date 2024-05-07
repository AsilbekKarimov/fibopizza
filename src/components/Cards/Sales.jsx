import React, { useEffect, useState } from "react";
import SalesCard from "./SalesCard";

const Sales = () => {
  const [salesCard, setSalesCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const salesData = [
          {
            id: 1,
            img: "public/Sales.png",
            alt: "Sale 1",
            divClass: "card1",
            imgClass: "w-[541px] h-[405.5px]",
          },
          {
            id: 2,
            img: "public/Sales.png",
            alt: "Sale 2",
            divClass: "card2",
            imgClass: "w-[256px] h-[189px]",
          },
          {
            id: 2,
            img: "public/Sales.png",
            alt: "Sale 2",
            divClass: "card2",
            imgClass: "w-[256px] h-[189px]",
          },
          {
            id: 2,
            img: "public/Sales.png",
            alt: "Sale 2",
            divClass: "card2",
            imgClass: "w-[256px] h-[189px]",
          },
          {
            id: 2,
            img: "public/Sales.png",
            alt: "Sale 2",
            divClass: "card2",
            imgClass: "w-[256px] h-[189px]",
          },
        ];
        setSalesCard(salesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-3 mt-[64px] mb-[47px]">
          <span className="text-[44px] font-extrabold text-black">Наши </span>
          <span className="text-[44px] font-extrabold text-[#F7D22D]">
            акции
          </span>
        </div>
        <div className="flex justify-center items-center">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="flex items-center justify-center">
                <SalesCard
                  key={salesCard[0].id}
                  img={salesCard[0].img}
                  alt={salesCard[0].alt}
                  divClass={salesCard[0].divClass}
                  imgClass={salesCard[0].imgClass}
                />
              </div>
              <div className="flex flex-wrap gap-6 w-[590px] items-center justify-center">
                {salesCard.slice(1).map((sale, index) => (
                  <SalesCard
                    key={sale.id + "_" + index}
                    img={sale.img}
                    alt={sale.alt}
                    divClass={sale.divClass}
                    imgClass={sale.imgClass}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <button className="btn bg-[#F7D22D] rounded-[23px] py-[10px] px-[40px] mt-[48.5px] mb-[62px] hover:border-inherit font-bold text-white hover:text-black">
          Все aкции
        </button>
      </div>
    </>
  );
};

export default Sales;
