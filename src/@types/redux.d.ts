interface IRepositoryState {
  data: IRepository[];
  loading: boolean;
  error: boolean;
  filter: {
    name: string;
    data: IRepository[];
    starred: boolean;
    sortBy: Sort;
  };
  listType: ListType;
}

interface State {
  repository: IRepositoryState;
}
