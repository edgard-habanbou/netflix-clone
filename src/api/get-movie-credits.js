import { options } from "./option";
export const GetCast = async (movieId) => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response.cast;
    })
    .catch((err) => console.error(err));
};
