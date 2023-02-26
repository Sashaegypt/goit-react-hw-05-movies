import { GlobalStyle } from 'services/GlobalStyles';

import { Menu } from './components/Menu/Menu';
import { UserRoutes } from 'UserRoutes';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <UserRoutes />
    </>
  );
};
