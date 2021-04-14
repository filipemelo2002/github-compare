import React from 'react';
import Home from './pages/Home';
import GlobalStyle from './styles/globalStyles';
import '@clayui/css/lib/css/atlas.css';
import { Provider } from 'react-redux';
import store from './redux/store';
const App: React.FC = () => (
  <Provider store={store}>
    <Home />
    <GlobalStyle />
  </Provider>
);

export default App;
