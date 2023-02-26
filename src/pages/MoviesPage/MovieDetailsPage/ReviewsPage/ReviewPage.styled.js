import styled from 'styled-components';

export const ItemStyled = styled.li`
  font-size: 22px;
  list-style: inside;
  text-align: justify;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const TextStyled = styled.p`
  display: inline;
  font-weight: bold;
`;
