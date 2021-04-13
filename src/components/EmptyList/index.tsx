import React from 'react';

import { Container } from './styles';
import emptyImg from '../../assets/emptyList.svg';

const EmptyList: React.FC = () => {
  return (
    <Container>
      <img src={emptyImg} />
      <h4>There is still nothing here</h4>
      <p>Add some repositories by clicking add new repository</p>
    </Container>
  );
};

export default EmptyList;
