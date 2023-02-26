import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const ContainerStyled = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 15px 15px;
  color: #5f0000;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 150px;

  border: none;
  border-radius: 10px;
  font-size: 25px;
  font-weight: bold;
  color: #5f0000;
  background-color: #fff;
  margin-bottom: 10px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fff;
    background-color: #5f0000;
  }
`;

export const CardStyled = styled.div`
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 15px;
  }
`;

export const BoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 25px;
  text-align: justify;
`;

export const TextStyled = styled.span`
  display: block;
  font-weight: bold;
`;

export const ListStyled = styled.ul`
  display: grid;
  margin-bottom: 15px;
  gap: 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 10px 0;
  color: #5f0000;

  &.active,
  &:hover,
  &:focus {
    color: red;
  }
`;
