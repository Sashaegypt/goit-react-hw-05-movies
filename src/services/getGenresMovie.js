export const getGenresMovie = array => {
  return array.map(genre => genre.name).join(', ');
};
