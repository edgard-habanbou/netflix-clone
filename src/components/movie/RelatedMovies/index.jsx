import React from "react";

import "./styles.css";
import { Link } from "react-router-dom";

function RelatedMovies({ movies }) {
  return (
    <section className="related-movies">
      <h3>More Like This</h3>
      <div className="movies-grid">
        {movies?.map((movie, i) => {
          return (
            <div key={i} className="movie-item">
              <Link to={`/movies/${movie.id}`} onClick={window.scrollTo(0, 0)}>
                {movie.poster_path === null ? (
                  ""
                ) : (
                  <img
                    className="movie-item"
                    key={i}
                    src={
                      movie.backdrop_path
                        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                        : `https://image.tmdb.org/t/p/original${movie.poster_path}`
                    }
                    alt={movie.title}
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default RelatedMovies;
