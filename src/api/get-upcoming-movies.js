import { options } from "./option";
export const GetUpcomingMovies = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response.results;
    })
    .catch((err) => console.error(err));
};
