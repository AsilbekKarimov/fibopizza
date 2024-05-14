import React from "react";
import DeliveryCart from "../components/DeliveryCart";
import Sales from "../components/Cards/Sales";
import Cards from "../components/Cards/Cards";
import NavbarCategories from "../components/Navbar/NavbarCategories";
import Footer from "../components/Footer";

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
      <footer>
      <Footer />
      </footer>
    </div>
  );
};

export default Home;
