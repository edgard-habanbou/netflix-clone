import React from "react";
import Header from "../../components/home/Header";
import StartWatching from "../../components/home/StartWatching";
import Feature from "../../components/home/Feature";
import { features } from "./variables.js";
import FAQ from "../../components/home/Faqs.jsx";
const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="hero-section">
        <div className="home-header-image">
          <img
            src={require(`../../assets/images/home-header.jpg`)}
            alt="HomeHeader"
          />
        </div>
        <StartWatching />
      </div>

      {features.map((feature, index) => (
        <Feature
          key={index}
          title={feature.title}
          desc={feature.desc}
          image={feature.image}
          video={feature.video}
          reverse={feature.reverse}
        />
      ))}
      <FAQ />
    </div>
  );
};

export default HomePage;
