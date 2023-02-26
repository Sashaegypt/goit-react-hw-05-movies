import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';

import { getMovieDetails } from 'services/Api';
import { getGenresMovie } from 'services/getGenresMovie';
import { getYearDate } from 'services/getYearDate';

import { Loader } from 'components/Loader/Loader';
import { Error } from 'components/Error/Error';

import {
  ContainerStyled,
  LinkStyled,
  CardStyled,
  BoxStyled,
  TextStyled,
  ListStyled,
  NavLinkStyled,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getMovieDetails(id);
        setMovie(response);
      } catch (error) {
        setError(error);
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <ContainerStyled>
      <LinkStyled to={backLinkHref}>
        Go Back
      </LinkStyled>
      {isLoading && <Loader />}
      {error && <Error />}
      {!isLoading && (
        <CardStyled>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
            }
            alt={movie.title}
            width="300"
            loading="lazy"
          />
          <BoxStyled>
            <h3>
              {movie.title} ({getYearDate(movie.release_date)})
            </h3>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <p>
              <TextStyled>Overview</TextStyled> {movie.overview}
            </p>
            <p>
              <TextStyled>Genres</TextStyled> {getGenresMovie(movie.genres)}
            </p>
          </BoxStyled>
        </CardStyled>
      )}
      <BoxStyled>
        <TextStyled>Additional information</TextStyled>
        <ListStyled>
          <li>
            &#8594;
            <NavLinkStyled to={`/movies/${id}/cast`} state={{ from: backLinkHref }}>
              View cast information here
            </NavLinkStyled>
          </li>
          <li>
            &#8594;
            <NavLinkStyled to={`/movies/${id}/reviews`} state={{ from: backLinkHref }}>
              See reviews here
            </NavLinkStyled>
          </li>
        </ListStyled>
      </BoxStyled>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </ContainerStyled>
  );
};

export default MovieDetailsPage;
