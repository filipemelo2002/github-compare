import React from 'react';

import { Container } from './styles';
import Card from '../Card';
const RepositoryList: React.FC = () => {
  return (
    <Container className="row">
      <Card
        age="1 year ago"
        forks={24}
        lastCommit="7 hours ago"
        license="N/A"
        name="liferay/liferay-portal"
        openIssues={0}
        starred
        stars={10}
        techs={['JAVA', 'JAVASCRIPT']}
      />
      <Card
        age="1 year ago"
        forks={24}
        lastCommit="7 hours ago"
        license="N/A"
        name="liferay/liferay-portal"
        openIssues={0}
        starred
        stars={10}
        techs={['JAVA', 'JAVASCRIPT']}
      />
      <Card
        age="1 year ago"
        forks={24}
        lastCommit="7 hours ago"
        license="N/A"
        name="liferay/liferay-portal"
        openIssues={0}
        starred
        stars={10}
        techs={['JAVA', 'JAVASCRIPT']}
      />
      <Card
        age="1 year ago"
        forks={24}
        lastCommit="7 hours ago"
        license="N/A"
        name="liferay/liferay-portal"
        openIssues={0}
        starred
        stars={10}
        techs={['JAVA', 'JAVASCRIPT']}
      />
      <Card
        age="1 year ago"
        forks={24}
        lastCommit="7 hours ago"
        license="N/A"
        name="liferay/liferay-portal"
        openIssues={0}
        starred
        stars={10}
        techs={['JAVA', 'JAVASCRIPT']}
      />
    </Container>
  );
};

export default RepositoryList;
