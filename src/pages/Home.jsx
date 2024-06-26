import React from "react";
import DeliveryCart from "../components/DeliveryCart";
import Sales from "../components/Cards/Sales";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer";
import NavbarCategories from "../components/Navbar/NavbarCategories";
import FoodSwiper from "../components/FoodSwiper";
import NewCards from "../components/Cards/NewCards";
import NewApp from "../components/Cards/NewApp";

const Home = () => {
  console.log(NewCards, "newcards");
  return (
    <div>
      <header>
        <NavbarCategories />
      </header>
      <main>
        <FoodSwiper />
        <NewApp />
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
