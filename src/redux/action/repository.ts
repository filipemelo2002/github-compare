import Redux from 'redux';
import * as Api from '../../api/repository';
const TEMPLATE_NAME = 'REPOSITORY';

export const getRepository = (term: string) => {
  return async (dispatch: Redux.Dispatch): Promise<void> => {
    try {
      dispatch({
        type: `${TEMPLATE_NAME}_PENDING`,
      });
      const response = await Api.getRepository(term);
      dispatch({
        type: `${TEMPLATE_NAME}_SUCCESS`,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: `${TEMPLATE_NAME}_REJECTED`,
        payload: err,
      });
    }
  };
};

export const getAllUserRepositories = (term: string) => {
  return async (dispatch: Redux.Dispatch): Promise<void> => {
    try {
      dispatch({
        type: `${TEMPLATE_NAME}_PENDING`,
      });
      const response = await Api.getAllUserRepositories(term);
      dispatch({
        type: `${TEMPLATE_NAME}_FULFILLED`,
        payload: response,
      });
    } catch (err) {
      dispatch({
        type: `${TEMPLATE_NAME}_REJECTED`,
        payload: err,
      });
    }
  };
};

interface SearchAction {
  type: string;
  payload: string;
}
export const search = (term: string): SearchAction => {
  return {
    type: `${TEMPLATE_NAME}_SEARCH`,
    payload: term,
  };
};

interface FilterStarAction {
  type: string;
  payload: boolean;
}
export const filterByStar = (shouldFilterByStar: boolean): FilterStarAction => {
  return {
    type: `${TEMPLATE_NAME}_FILTER_STARRED`,
    payload: shouldFilterByStar,
  };
};