import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'e50c4e0f404e411eea1bbde1fa2e92d4',
  },
});

export const getTrendMovies = async () => {
  const response = await instance.get('/trending/movie/day');
  return response.data;
};

export const getMovieByName = async query => {
  const response = await instance.get('/search/movie', {
    params: {
      query,
    },
  });
  return response.data;
};

export const getMovieDetails = async movie_id => {
  const response = await instance.get(`/movie/${movie_id}`);
  return response.data;
};

export const getMovieCast = async movie_id => {
  const response = await instance.get(`/movie/${movie_id}/credits`);
  return response.data;
};

export const getMovieReviews = async movie_id => {
  const response = await instance.get(`/movie/${movie_id}/reviews`);
  return response.data;
};
