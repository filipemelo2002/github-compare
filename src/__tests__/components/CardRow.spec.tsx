import React from 'react';
import { render } from '@testing-library/react';
import CardRow from '../../components/CardRow';

describe('CardRow Component', () => {
  it('should test if CardRow renders', async function () {
    const { findByText } = render(
      <CardRow
        age="1 year ago"
        forks={24}
        lastCommit="7 hours ago"
        license="N/A"
        name="liferay/liferay-portal"
        openIssues={0}
        starred
        stars={10}
        techs={['JAVA', 'JAVASCRIPT']}
      />,
    );

    await findByText('liferay/liferay-portal');
  });
});
