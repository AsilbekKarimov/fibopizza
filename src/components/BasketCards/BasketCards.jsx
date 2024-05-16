import React, { useState, useEffect } from "react";

const BasketCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemCounts, setItemCounts] = useState({});

  const truncateDescription = (description, maxLength) =>
    description.length > maxLength
      ? `${description.substring(0, maxLength - 3)}...`
      : description;

  useEffect(() => {
    async function fetchData() {
      try {
        let request = await fetch(
          `https://664366606c6a65658706ee01.mockapi.io/api/v1/basketproduct`
        );
        let response = await request.json();
        setProducts(response);
        const initialCounts = response.reduce((acc, product) => {
          acc[product.id] = 0;
          return acc;
        }, {});
        setItemCounts(initialCounts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const addCount = (id) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const subtractCount = (id) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max(prevCounts[id] - 1, 0),
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-col container max-w-[90%] mx-auto items-center justify-center">
      <div className="flex items-start">
        <span className="text-[#F7D22D] text-[36px] font-extrabold">
          Корзина
        </span>
      </div>
      <div className="flex gap-[17px] p-2 flex-wrap w-[50%]">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex justify-around gap-4 p-4 border-b-2 w-[800px] items-center"
          >
            <img src={item.image} className="size-[71px]" alt={item.name} />
            <div className="flex flex-col gap-[9px]">
              <p className="font-bold text-[19px]">{item.title}</p>
              <p className="font-medium text-[#686466] text-[13px] max-w-[60%]">
                {truncateDescription(item.description, 50)}
              </p>
            </div>
            <div className="flex items-center gap-8">
              <p className="font-bold text-[20px] text-[#F7D22D]">
                {itemCounts[item.id] * item.price}₽
              </p>
              <div className="py-2 px-5 bg-[#F3F3F7] justify-around rounded-[8px] flex items-center text-[#696F7A]">
                <button
                  className="text-[18px] font-bold"
                  onClick={() => subtractCount(item.id)}
                >
                  -
                </button>
                <p className="text-[18px] font-bold mx-3">
                  {itemCounts[item.id]}
                </p>
                <button
                  className="text-[18px] font-bold"
                  onClick={() => addCount(item.id)}
                >
                  +
                </button>
              </div>
              <button>
                <img src="public/Close.png" alt="Remove item" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasketCards;
