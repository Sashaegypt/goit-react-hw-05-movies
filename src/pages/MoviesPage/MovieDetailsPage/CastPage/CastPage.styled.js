import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: grid;
  align-items: baseline;
  justify-items: stretch;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
