export const getGenres = async (options) => {
  return await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    options
  )
    .then((response) => response.json())
    .then((response) => response.genres)
    .then((res) => {
      return res;
    })
    .catch((err) => console.error(err));
};
