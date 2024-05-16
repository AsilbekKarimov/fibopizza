import React, { useState, useEffect } from "react";
import Card from "./Card";
import CardLoading from "./CardLoading";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productCount, setproductCount] = useState(30);

  useEffect(() => {
    async function fetchData() {
      try {
        let request = await fetch(
          `https://663cbd1e17145c4d8c377857.mockapi.io/api/v1/product/products?limit=${productCount}`
        );
        let response = await request.json();
        setProducts(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const truncateDescription = (description, maxLength) =>
    description.length > maxLength
      ? `${description.substring(0, maxLength - 3)}...`
      : description;

  const handleButtonClick = (cardData) => {
    console.log("Clicked Card Data:", cardData);
  };

  return (
    <div className="container max-w-[82%] mx-auto">
      <p className="text-[#F7D22D] text-[32px] font-extrabold mb-[26px]">
        Паста
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-end">
        {loading ? (
          Array.from({ length: productCount }).map((_, index) => (
            <CardLoading key={index} />
          ))
        ) : (
          products.map((item, id) => (
            <div key={id}>
              <Card
                img={item.avatar}
                new={item.new}
                title={truncateDescription(item.title, 19)}
                description={truncateDescription(item.description, 120)}
                price={"$" + item.price}
                onButtonClick={handleButtonClick}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cards;
