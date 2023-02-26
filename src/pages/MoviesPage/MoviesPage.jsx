import { useState, useEffect } from 'react';
import { getMovieByName } from 'services/Api';
import { useSearchParams, useLocation } from 'react-router-dom';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';

import { ContainerStyled } from './MoviesPage.styled';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getMovieByName(query);
        setMovies(response.results);
        if (response.total_results === 0) {
          alert(`We don't find any movies`);
        }
      } catch (error) {
        setError(error);
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const onChangeSearch = query => {
    setSearchParams({ query });
  };

  const location = useLocation();

  return (
    <ContainerStyled>
      <SearchForm onChangeSearch={onChangeSearch} value={query} />
      {error && <Error />}
      {movies.length > 0 && <MoviesList movies={movies} state={{ from: location }} />}
      {isLoading && <Loader />}
    </ContainerStyled>
  );
};

export default MoviesPage;
