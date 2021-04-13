import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../redux/action/repository';
import Api from '../../api/index';
import axios from 'axios';

jest.mock('../../api/index');
const mockedAxios = Api as jest.Mocked<typeof axios>;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const TEMPLATE_NAME = 'REPOSITORY';

describe('Repository actions', () => {
  const repository: IRepository = {
    full_name: 'filipemelo2002/filipemelo2002',
    stargazers_count: 79,
    forks: 0,
    open_issues: 0,
    created_at: '',
    pushed_at: '',
    license: {
      name: 'MIT',
    },
  };
  it('should dispatch a new Repository', async () => {
    mockedAxios.get.mockResolvedValue({
      data: repository,
    });

    const expectedActions = [
      { type: `${TEMPLATE_NAME}_PENDING` },
      {
        type: `${TEMPLATE_NAME}_SUCCESS`,
        payload: repository,
      },
    ];

    const store = mockStore({ repository: { data: [] } });
    await store.dispatch(
      actions.getRepository('filipemelo2002/filipemelo2002'),
    );

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch a few new Repositories', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        items: [repository],
      },
    });

    const expectedActions = [
      { type: `${TEMPLATE_NAME}_PENDING` },
      {
        type: `${TEMPLATE_NAME}_FULFILLED`,
        payload: [repository],
      },
    ];

    const store = mockStore({ repository: { data: [] } });
    await store.dispatch(actions.getAllUserRepositories('filipemelo2002'));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should search by repository name', () => {
    const response = actions.search('filipemelo2002');
    expect(response).toEqual({
      type: `${TEMPLATE_NAME}_SEARCH`,
      payload: 'filipemelo2002',
    });
  });

  it('should filter by starred', () => {
    const response = actions.filterByStar(true);
    expect(response).toEqual({
      type: `${TEMPLATE_NAME}_FILTER_STARRED`,
      payload: true,
    });
  });
});
