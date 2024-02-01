import { CHANGE_SEARCH_FIELD } from './constants.ts';
import { REQUEST_ROBOTS_PENDING } from './constants.ts';
import { REQUEST_ROBOTS_SUCCESS } from './constants.ts';
import { REQUEST_ROBOTS_FAILED } from './constants.ts';

import {Action, IState} from './types/common.ts';


const initialStateSearch: IState = {
  searchField: ''
}

const initialStateRobots: IState = {
  robots: [],
  isPending: false,
  error: ''
}

export const searchRobots = (state = initialStateSearch, action = {} as Action): IState => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
}

export const requestRobots = (state = initialStateRobots, action = {} as Action): IState => {
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
