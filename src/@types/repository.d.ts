interface ILicense {
  name: string;
}
interface IRepository {
  full_name: string;
  stargazers_count: number;
  forks: number;
  open_issues: number;
  created_at: string;
  pushed_at: string;
  license: ILicense | null;
  starred?: boolean;
}

interface IRepositoryList {
  items: IRepository[];
}
