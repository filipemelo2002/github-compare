const TEMPLATE_NAME = 'REPOSITORY';

const initialState = (): IRepositoryState => ({
  data: [],
  loading: false,
  error: false,
  filter: {
    name: '',
    data: [],
    starred: false,
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

type Action = ActionGetRepositorySuccess | ActionListRepositoriesSuccess;
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
      return {
        ...state,
        data: action.payload as IRepository[],
        loading: false,
        error: false,
      };
    }
    case `${TEMPLATE_NAME}_SUCCESS`: {
      const repository = action.payload as IRepository;
      const newData = state.data;
      newData.unshift(repository);
      return {
        ...state,
        data: newData,
        loading: false,
        error: false,
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
