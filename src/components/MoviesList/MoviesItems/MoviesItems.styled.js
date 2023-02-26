import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ItemStyled = styled.li`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
  }
`;

export const LinkStyled = styled(Link)`
  color: #5f0000;
`;

export const TitleStyled = styled.h3`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
  font-size: 20px;
`;

export const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  cursor: pointer;
`;
