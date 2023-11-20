import React from "react";
import "../../pages/home/home.css";

const Feature = ({ title, desc, image, video = "", reverse = false }) => {
  return (
    <div className={`feature flex ${reverse ? "reverse" : ""}`}>
      <div className="feature-content flex center full-width space-between">
        <div className="feature-media-container">
          {video && (
            <video
              className={
                "background-video" +
                (video === "video-devices.m4v" ? " second-vid" : "")
              }
              src={require(`../../assets/videos/${video}`)}
              autoPlay
              playsInline
              muted
              loop
            ></video>
          )}
          <img
            className="foreground-image"
            src={require(`../../assets/images/${image}`)}
            alt={title}
          />
        </div>
        <div>
          <h3 className="txt-xl">{title}</h3>
          <p className="txt-md">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
