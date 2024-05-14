import React from "react";
import DeliveryCart from "../components/DeliveryCart";
import Sales from "../components/Cards/Sales";
import Cards from "../components/Cards/Cards";
import NewCards from "../components/Cards/NewCards";
import NewApp from "../components/Cards/NewApp";

const Home = () => {
  console.log(NewCards, 'newcards');
  return (
    <div>
      <header>

      </header>
      <main>
        <NewApp />
        <Cards />
        <Sales />
        <DeliveryCart />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
