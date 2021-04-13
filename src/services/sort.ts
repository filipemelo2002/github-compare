const sortStars = (arr: IRepository[]): IRepository[] => {
  return arr.sort(
    (current, next) => next.stargazers_count - current.stargazers_count,
  );
};

const sortForks = (arr: IRepository[]): IRepository[] => {
  return arr.sort((next, current) => current.forks - next.forks);
};

const sortOpenIssues = (arr: IRepository[]): IRepository[] => {
  return arr.sort((next, current) => current.open_issues - next.open_issues);
};

const sortAge = (arr: IRepository[]): IRepository[] => {
  return arr.sort((next, current) => {
    const currentDate = new Date(current.created_at);
    const nextDate = new Date(next.created_at);
    return nextDate.getTime() - currentDate.getTime();
  });
};

const sortLastCommit = (arr: IRepository[]): IRepository[] => {
  return arr.sort((next, current) => {
    const currentDate = new Date(current.pushed_at);
    const nextDate = new Date(next.pushed_at);
    return nextDate.getTime() - currentDate.getTime();
  });
};

const empySort = (arr: IRepository[]): IRepository[] => arr;
const sorts = {
  stars: sortStars,
  forks: sortForks,
  openIssues: sortOpenIssues,
  age: sortAge,
  lastCommit: sortLastCommit,
  '': empySort,
};
export default sorts;
