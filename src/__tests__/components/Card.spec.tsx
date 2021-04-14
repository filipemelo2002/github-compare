import React from 'react';
import { render } from '@testing-library/react';
import Card from '../../components/Card';

describe('Card Component', () => {
  it('should test if Card renders', async function () {
    const { findByText } = render(
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
      />,
    );

    await findByText('liferay/liferay-portal');
  });
});
