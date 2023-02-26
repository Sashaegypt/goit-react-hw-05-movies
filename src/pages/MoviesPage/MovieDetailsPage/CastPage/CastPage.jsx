import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';

import { ListStyled } from './CastPage.styled';

const CastPage = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getMovieCast(id);
        setCast(response.cast);
      } catch (error) {
        setError(error);
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <div>
      {error && <Error />}
      {isLoading && <Loader />}
      {!isLoading && cast.length > 0 && (
        <div>
          <ListStyled>
            {cast.map(({ id, profile_path, name, character }) => (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w92${profile_path}`
                      : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
                  }
                  alt={name}
                  width="150"
                  loading="lazy"
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ListStyled>
        </div>
      )}
      {!isLoading && !error && cast.length === 0 && <p>There is no information</p>}
    </div>
  );
};

export default CastPage;
