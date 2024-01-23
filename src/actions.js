import { CHANGE_SEARCH_FIELD } from './constants.js';
import { REQUEST_ROBOTS_PENDING } from './constants.js';
import { REQUEST_ROBOTS_SUCCESS } from './constants.js';
import { REQUEST_ROBOTS_FAILED } from './constants.js';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users', {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'User-Agent': 'PokeFriends (localhost:3000/robofriends, v1.0.0)'
     }
  })
  
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}

