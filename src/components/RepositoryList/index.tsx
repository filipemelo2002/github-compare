import React from 'react';

import { useSelector } from 'react-redux';
import { Container } from './styles';
import Card from '../Card';

const RepositoryList: React.FC = () => {
  const repository = useSelector(
    (state: State) => state.repository.filter.data,
  );
  return (
    <Container className="row">
      {repository.map(repo => (
        <Card
          key={repo.id}
          name={repo.full_name}
          stars={repo.stargazers_count}
          forks={repo.forks}
          openIssues={repo.open_issues}
          age={repo.created_at}
          lastCommit={repo.pushed_at}
          license={repo.license?.name || 'N/A'}
          language={repo.language}
          starred={repo.starred || false}
        />
      ))}
    </Container>
  );
};

export default RepositoryList;
