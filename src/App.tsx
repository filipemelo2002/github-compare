import React from 'react';
import Home from './pages/Home';
import GlobalStyle from './styles/globalStyles';
import '@clayui/css/lib/css/atlas.css';
const App: React.FC = () => (
  <>
    <Home />
    <GlobalStyle />
  </>
);

export default App;
