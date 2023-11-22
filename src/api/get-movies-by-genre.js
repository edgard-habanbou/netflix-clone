export const getMoviesByGenre = async (genre_id, options) => {
  return await fetch(
    `https://api.themoviedb.org/3/discover/movie?&language=en-US&page=1&with_genres=${genre_id}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response.results;
    })
    .catch((err) => console.error(err));
};
