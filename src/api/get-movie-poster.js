import { options } from "./option";
export const GetMoviePoster = async (movieId) => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/images`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response.logos;
    })
    .catch((err) => console.error(err));
};
