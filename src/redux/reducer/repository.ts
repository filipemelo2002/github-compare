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
    sortBy: 'stars',
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
      const data = [...state.data, ...(action.payload as IRepository[])];
      let newData = [];
      if (state.filter.sortBy) {
        const sortFunc = sort[state.filter.sortBy];
        newData = sortFunc(data);
      } else {
        newData = data;
      }

      return {
        ...state,
        data: data,
        loading: false,
        filter: {
          ...state.filter,
          data: newData,
        },
        error: false,
      };
    }
    case `${TEMPLATE_NAME}_SUCCESS`: {
      const repository = action.payload as IRepository;
      const data = [...state.data];
      data.unshift(repository);
      let newData = [];
      if (state.filter.sortBy) {
        const sortFunc = sort[state.filter.sortBy];
        newData = sortFunc(data);
      } else {
        newData = data;
      }

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
      let newData = [];
      if (state.filter.sortBy) {
        const sortFunc = sort[state.filter.sortBy];
        newData = sortFunc(data);
      } else {
        newData = data;
      }
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
      const data = state.filter.data.filter(d => d.starred === starred);
      let newData = [];
      if (state.filter.sortBy) {
        const sortFunc = sort[state.filter.sortBy];
        newData = sortFunc(data);
      } else {
        newData = data;
      }

      return {
        ...state,
        filter: {
          ...state.filter,
          data: newData,
          starred,
        },
      };
    }
    case `${TEMPLATE_NAME}_SORT`: {
      const { payload } = action as FilterActionSort;
      const sortFunc = sort[payload];
      const newData = sortFunc(state.filter.data);
      return {
        ...state,
        filter: {
          ...state.filter,
          data: newData,
          sortBy: payload,
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
