import sort from '../../services/sort';
const TEMPLATE_NAME = 'REPOSITORY';

const initialState = (): IRepositoryState => ({
  data: [],
  loading: false,
  error: false,
  filter: {
    name: '',
    data: [],
    starred: false,
    sortBy: '',
  },
});

interface ActionGetRepositorySuccess {
  type: string;
  payload: IRepository;
}

interface ActionListRepositoriesSuccess {
  type: string;
  payload: IRepository[];
}

interface SearchAction {
  type: string;
  payload: string;
}

interface FilterStarAction {
  type: string;
  payload: boolean;
}

type Action =
  | ActionGetRepositorySuccess
  | ActionListRepositoriesSuccess
  | FilterActionSort
  | FilterStarAction
  | SearchAction;

const applyFilter = (arr: IRepository[], filter: Sort) => {
  if (filter) {
    const sortFunc = sort[filter];
    const filteredArray = sortFunc(arr);
    return filteredArray;
  }
  return arr;
};
const reducer = (state = initialState(), action: Action): IRepositoryState => {
  switch (action.type) {
    case `${TEMPLATE_NAME}_PENDING`: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case `${TEMPLATE_NAME}_REJECTED`: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case `${TEMPLATE_NAME}_FULFILLED`: {
      const data = [...(action.payload as IRepository[]), ...state.data];
      return {
        ...state,
        data: data,
        loading: false,
        filter: {
          ...state.filter,
          data: data,
        },
        error: false,
      };
    }
    case `${TEMPLATE_NAME}_SUCCESS`: {
      const repository = action.payload as IRepository;
      const data = [...state.data];
      data.unshift(repository);
      const newData = [...state.filter.data];
      newData.unshift(repository);
      return {
        ...state,
        data: data,
        loading: false,
        error: false,
        filter: {
          ...state.filter,
          data: newData,
        },
      };
    }
    case `${TEMPLATE_NAME}_SEARCH`: {
      const term = action.payload as string;
      const data = state.filter.data.filter(d => d.full_name.includes(term));
      const newData = applyFilter(data, state.filter.sortBy);
      return {
        ...state,
        filter: {
          ...state.filter,
          name: term,
          data: newData,
        },
      };
    }
    case `${TEMPLATE_NAME}_FILTER_STARRED`: {
      const starred = action.payload as boolean;
      const data = state.data.filter(d => d.starred === starred);
      const newData = applyFilter(data, state.filter.sortBy);

      return {
        ...state,
        filter: {
          ...state.filter,
          data: starred ? newData : state.data,
          starred,
        },
      };
    }
    case `${TEMPLATE_NAME}_SORT`: {
      const orderBy = action.payload as Sort;
      const sortFunc = sort[orderBy];
      const newData = sortFunc([...state.filter.data]);
      return {
        ...state,
        filter: {
          ...state.filter,
          data: newData,
          sortBy: orderBy,
        },
      };
    }
    case `${TEMPLATE_NAME}_TOGGLE_FAVORITE_REPOSITORY`: {
      const id = action.payload as string;
      const [newFavouriteRepository] = state.data.filter(
        repo => repo.id === id,
      );
      newFavouriteRepository.starred = !newFavouriteRepository.starred;
      const newData = state.data.map(repo =>
        repo.id === id ? newFavouriteRepository : repo,
      );
      const newFilterData = applyFilter(newData, state.filter.sortBy);
      return {
        ...state,
        data: newData,
        filter: {
          ...state.filter,
          data: newFilterData,
        },
      };
    }
    case 'RESET': {
      return initialState();
    }
    default:
      return state;
  }
};

export default reducer;
