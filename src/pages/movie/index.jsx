import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StickyNav from "../../components/common/StickyNav";
import { GetMovieById } from "../../api/get-movie-by-id";
import { getRelatedMovies } from "../../api/get-related-movies";
const Movies = () => {
  const { movieID } = useParams();
  const [Movie, setMovie] = useState([]);
  const [RelatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const Movie = await GetMovieById(movieID);
      setMovie(Movie);

      const RelatedMovies = await getRelatedMovies(movieID);
      setRelatedMovies(RelatedMovies);

      console.log("Movie: ", Movie);
      console.log("RelatedMovies: ", RelatedMovies);
    };

    fetchData();
  }, []);

  return (
    <div>
      <StickyNav />
      <div className="movie-wrapper">
        <div className="movie">
          <h1>MOVIE: {Movie.original_title}</h1>
        </div>
        <div className="related-movies">
          <h1>RELATED:</h1>
          {RelatedMovies.map((relatedMovie, index) => (
            <h3>{relatedMovie.original_title}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
