import PropTypes from 'prop-types';
import { ItemStyled, LinkStyled, TitleStyled, Image } from './MoviesItems.styled';

export const MoviesItems = ({ id, title, poster_path, state }) => {

  return (
    <ItemStyled key={id} data-aos="fade-up">
      <LinkStyled to={`/movies/${id}`} state={state}>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
          }
          alt={title}
          loading="lazy"
        />
        <TitleStyled>
          {title}
        </TitleStyled>
      </LinkStyled>
    </ItemStyled>
  );
};

MoviesItems.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
  state: PropTypes.object.isRequired,
};
