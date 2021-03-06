interface ILicense {
  name: string;
}
interface IRepository {
  id: number;
  full_name: string;
  stargazers_count: number;
  forks: number;
  open_issues: number;
  created_at: string;
  pushed_at: string;
  license: ILicense | null;
  starred?: boolean;
  language: string;
}

interface IRepositoryList {
  items: IRepository[];
}
type Sort = 'stars' | 'forks' | 'openIssues' | 'age' | 'lastCommit' | '';
type ListType = 'grid' | 'row';
interface FilterActionSort {
  type: string;
  payload: Sort;
}
