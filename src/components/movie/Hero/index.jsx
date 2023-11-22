import React from "react";

import "./styles.css";

function Hero({
  img,
  title,
  logo,
  releaseDate,
  duration,
  genre,
  overview,
  cast,
}) {
  return (
    <section className="movie-hero" style={{ backgroundImage: `url(${img})` }}>
      <div className="movie-details">
        {logo === "" ? (
          ""
        ) : (
          <div className="movie-logo">
            <img src={logo} alt={title} />{" "}
          </div>
        )}
        <h3 className="movie-title">{title}</h3>
        <div className="movie-info">
          {releaseDate} | {duration} | {genre ? genre[0].name : ""}
        </div>
        <div className="movie-synopsis">{overview}</div>
        <div className="movie-staring">
          Staring:
          {cast.slice(0, 2).map((castMember, index) => (
            <span key={index}> {castMember.name} </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
