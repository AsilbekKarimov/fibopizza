import React from "react";
import DeliveryCart from "../components/DeliveryCart";
import Sales from "../components/Cards/Sales";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer";
import NavbarCategories from "../components/Navbar/NavbarCategories";
import FoodSwiper from "../components/FoodSwiper";


const Home = () => {
  return (
    <div>
      <header>
        <NavbarCategories/>
      </header>
      <main>
        <FoodSwiper />
        <Cards />
        <Sales />
        <DeliveryCart />
      </main>
      <footer>
      <Footer />
      </footer>
    </div>
  );
};

export default Home;
