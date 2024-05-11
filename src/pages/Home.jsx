import React from "react";
import DeliveryCart from "../components/DeliveryCart";
import Sales from "../components/Cards/Sales";
import Cards from "../components/Cards/Cards";
import NavbarCategories from "../components/Navbar/NavbarCategories";

const Home = () => {
  return (
    <div>
      <header>
        <NavbarCategories/>
      </header>
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
