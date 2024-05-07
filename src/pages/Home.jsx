import React from "react";
import DeliveryCart from "../components/DeliveryCart";
import Sales from "../components/Cards/Sales";
import Cards from "../components/Cards/Cards";

const Home = () => {
  return (
    <div>
      <header></header>
      <main>
        <Cards />
        <Sales />
        <DeliveryCart />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
