import { options } from "./option";

export const getRelatedMovies = async (movieId) => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response.results;
    })
    .catch((err) => console.error(err));
};
