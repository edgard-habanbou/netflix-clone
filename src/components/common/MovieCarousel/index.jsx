import React, { useState, useEffect } from "react";
import "./styles.css";
import MoviesItem from "../MoviesItem";

function MoviesCarousel({ title, movies }) {
  const [screenWidth, setScreenWidth] = useState(getCurrentWidth);
  const [itemsNumber, setItemNumber] = useState(4);
  const [activeIndex, setActiveIndex] = useState(0);
  const maxItems = movies.length;

  function getCurrentWidth() {
    return window.innerWidth;
  }
  //   console.log(movies);

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(getCurrentWidth());
    };
    window.addEventListener("resize", updateWidth);
    if (screenWidth < 1000) {
      setItemNumber(3);
    } else if (screenWidth < 500) {
      setItemNumber(2);
    }
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [screenWidth]);

  const handlePrevClick = () => {
    let newIndex = activeIndex - 1;
    if (newIndex < 0) {
      newIndex = maxItems / itemsNumber - 1;
    }
    setActiveIndex(newIndex);
  };
  const handleNextClick = () => {
    let newIndex = activeIndex + 1;
    if (newIndex >= maxItems / itemsNumber) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className="row">
      <div className="header">
        <h3 className="title">{title}</h3>
      </div>
      <div className="container">
        <button className="handle left-handle" onClick={handlePrevClick}>
          <div className="text">&#8249;</div>
        </button>
        <div
          className="slider"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {movies.map((m, i) => {
            return (
              <MoviesItem
                title={m.title}
                image={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
                id={m.id}
                key={i}
              />
            );
          })}
        </div>
        <button className="handle right-handle" onClick={handleNextClick}>
          <div className="text">&#8250;</div>
        </button>
      </div>
    </div>
  );
}

export default MoviesCarousel;
