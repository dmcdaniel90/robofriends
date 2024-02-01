import { CHANGE_SEARCH_FIELD } from './constants.ts';
import { REQUEST_ROBOTS_PENDING } from './constants.ts';
import { REQUEST_ROBOTS_SUCCESS } from './constants.ts';
import { REQUEST_ROBOTS_FAILED } from './constants.ts';
import { apiCall } from './api/api.ts';
import { Robot, Action } from './types/common.ts';

export const setSearchField = (text: string) => <Action> ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestRobots = () => async (dispatch: (arg: Action) => void) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  try {
    const data = await apiCall<Robot>('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
  } catch (error: unknown) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
  }
}

