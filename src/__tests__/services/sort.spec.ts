import sort from '../../services/sort';

describe('Sort functions', () => {
  const repositories = [
    {
      full_name: 'filipemelo2002/STARS',
      stargazers_count: 79,
      forks: 45,
      open_issues: 2,
      created_at: '2021-04-12T21:37:12Z',
      pushed_at: '2021-04-12T21:37:12Z',
      license: {
        name: 'MIT',
      },
    },
    {
      full_name: 'filipemelo2002/FORKS',
      stargazers_count: 79,
      forks: 759,
      open_issues: 0,
      created_at: '2021-04-12T21:37:12Z',
      pushed_at: '2021-04-12T21:37:12Z',
      license: {
        name: 'MIT',
      },
    },
    {
      full_name: 'filipemelo2002/AGE',
      stargazers_count: 759,
      forks: 0,
      open_issues: 0,
      created_at: '2014-07-29T11:07:36Z',
      pushed_at: '2021-04-12T21:37:12Z',
      license: {
        name: 'MIT',
      },
    },
    {
      full_name: 'filipemelo2002/COMMIT',
      stargazers_count: 79,
      forks: 0,
      open_issues: 45,
      created_at: '2021-04-12T21:37:12Z',
      pushed_at: '2014-07-29T11:07:36Z',
      license: {
        name: 'MIT',
      },
    },
  ];

  it('should sort by stars', () => {
    const response = sort.stars(repositories);
    expect(response[0].full_name).toBe('filipemelo2002/AGE');
  });

  it('should sort by forks', () => {
    const response = sort.forks(repositories);
    expect(response[0].full_name).toBe('filipemelo2002/FORKS');
  });

  it('should sort by Open Issues', () => {
    const response = sort.openIssues(repositories);
    expect(response[1].full_name).toBe('filipemelo2002/STARS');
  });

  it('should sort by age', () => {
    const response = sort.age(repositories);
    expect(response[0].full_name).toBe('filipemelo2002/AGE');
  });

  it('should sort by last commit', () => {
    const response = sort.lastCommit(repositories);
    expect(response[0].full_name).toBe('filipemelo2002/COMMIT');
  });
});
