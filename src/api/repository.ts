import Api from '.';

export const getRepository = async (term: string): Promise<IRepository> => {
  const response = await Api.get(`repos/${term}`);
  return response.data;
};

export const getAllUserRepositories = async (
  user: string,
): Promise<IRepositoryList> => {
  const response = await Api.get(`search/repositories?q=${user}`);
  return response.data;
};
