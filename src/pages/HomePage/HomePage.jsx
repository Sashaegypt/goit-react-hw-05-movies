import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getTrendMovies } from 'services/Api';

import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';

import { ContainerStyled, TitleStyled } from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getTrendMovies();
        setMovies(response.results);
      } catch (error) {
        setError(error);
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const location = useLocation();

  return (
    <ContainerStyled>
      <TitleStyled>Trending today</TitleStyled>
      {error && <Error />}
      {isLoading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} state={{ from: location }} />}
    </ContainerStyled>
  );
};

export default HomePage;
