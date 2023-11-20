import React from "react";
import Header from "../../components/home/Header";
import StartWatching from "../../components/home/StartWatching";
import Feature from "../../components/home/Feature";
import FAQ from "../../components/home/Faqs";
import Footer from "../../components/home/Footer";
const HomePage = () => {
  return (
    <div>
      <Header />
      <StartWatching />
      <Feature />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
