import React from "react";
import Header from "../../components/home/Header";
import StartWatching from "../../components/home/StartWatching";
import Feature from "../../components/home/Feature";
import Question from "../../components/home/Question";
import { features } from "./variables.js";
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
      <Question />
    </div>
  );
};

export default HomePage;
