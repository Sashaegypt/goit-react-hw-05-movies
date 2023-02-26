import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/Api';

import { ItemStyled, TextStyled } from './ReviewPage.styled';
import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';

const ReviewPage = () => {
  const [review, setReview] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchReview = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await getMovieReviews(id);
        setReview(response.results);
      } catch (error) {
        setError(error);
        alert(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReview();
  }, [id]);

  return (
    <div>
      {error && <Error />}
      {isLoading && <Loader />}
      {!isLoading && review.length > 0 && (
        <div>
          <ul>
            {review.map(({ id, author, content }) => (
              <ItemStyled key={id}>
                <TextStyled>Author {author}</TextStyled>
                <p>{content}</p>
              </ItemStyled>
            ))}
          </ul>
        </div>
      )}
      {!isLoading && !error && review.length === 0 && <p>There is no information</p>}
    </div>
  );
};

export default ReviewPage;
