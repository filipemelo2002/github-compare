import React from 'react';

import { useSelector } from 'react-redux';
import { Container } from './styles';
import Card from '../Card';
import CardRow from '../CardRow';
const RepositoryList: React.FC = () => {
  const listType = useSelector((state: State) => state.repository.listType);
  const repository = useSelector(
    (state: State) => state.repository.filter.data,
  );

  const renderGridList = () => {
    return (
      <Container className="row">
        {repository.map(repo => (
          <Card
            id={repo.id}
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

  const renderRowList = () => {
    return (
      <Container className="max-width">
        {repository.map(repo => (
          <CardRow
            id={repo.id}
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
  return listType === 'grid' ? renderGridList() : renderRowList();
};

export default RepositoryList;
