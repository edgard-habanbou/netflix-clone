import React from "react";
import "../../pages/home/home.css";
import { features } from "../../pages/home/variables";

const Feature = () => {
  return features.map((feature) => (
    <div
      key={feature.index}
      className={`feature flex ${feature.reverse ? "reverse" : ""}`}
    >
      <div className="feature-content flex center full-width space-between">
        <div className="feature-media-container">
          {feature.video && (
            <video
              className={
                "background-video" +
                (feature.video === "video-devices.m4v" ? " second-vid" : "")
              }
              src={require(`../../assets/videos/${feature.video}`)}
              autoPlay
              playsInline
              muted
              loop
            ></video>
          )}
          <img
            className="foreground-image"
            src={require(`../../assets/images/${feature.image}`)}
            alt={feature.title}
          />
        </div>
        <div>
          <h3 className="txt-xl">{feature.title}</h3>
          <p className="txt-md">{feature.desc}</p>
        </div>
      </div>
    </div>
  ));
};

export default Feature;
