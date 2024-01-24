import { apiCall } from './api/api.js';
import { CHANGE_SEARCH_FIELD } from './constants.js';
import { REQUEST_ROBOTS_PENDING } from './constants.js';
import { REQUEST_ROBOTS_SUCCESS } from './constants.js';
import { REQUEST_ROBOTS_FAILED } from './constants.js';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestRobots = () => async (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  try {
    const data = await apiCall('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error });
  }
}

