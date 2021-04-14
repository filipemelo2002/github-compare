import React from 'react';

import { Container, Content } from './styles';
import NavBar from '../../components/NavBar';
import RepositoryList from '../../components/RepositoryList';
const Home: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <RepositoryList />
      </Content>
    </Container>
  );
};

export default Home;
