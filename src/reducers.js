import { CHANGE_SEARCH_FIELD } from './constants.js';
import { REQUEST_ROBOTS_PENDING } from './constants.js';
import { REQUEST_ROBOTS_SUCCESS } from './constants.js';
import { REQUEST_ROBOTS_FAILED } from './constants.js';

const initialStateSearch = {
  searchField: ''
}

const initialStateRobots = {
  robots: [],
  isPending: false,
  error: ''
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, {isPending: true});
    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {robots: action.payload, isPending: false});
    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {error: action.payload, isPending: false});
    default:
      return state;
  }
}