import PropTypes from 'prop-types';
import { MoviesItems } from './MoviesItems/MoviesItems';

import { ListStyled } from './MoviesListTrend.styled';

export const MoviesList = ({ movies, state }) => {
  return (
    <div>
      <ListStyled>
        {movies.map(({ id, title, poster_path }) => (
          <MoviesItems
            key={id}
            id={id}
            title={title}
            poster_path={poster_path}
            state={state}
            loading="lazy"
          />
        ))}
      </ListStyled>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
  state: PropTypes.object.isRequired,
};
