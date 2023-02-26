import { NavStyled, NavLinkStyled } from './Menu.styled';

export const Menu = () => {
  return (
    <NavStyled>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/movies">Movies</NavLinkStyled>
    </NavStyled>
  );
};
