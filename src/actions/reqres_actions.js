import { API } from 'aws-amplify';
import {
  REQRES_FETCH_ALL_USERS_SUCCESS
} from './types';

// REST GET -- get a list of all items
export function fetchAllItems() {
  return function(dispatch) {

    const apiPath = '/api/users';
    const apiConfig = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    console.log('reqres_actions.fetchAllItems() apiPath, apiConfig: ', {apiPath, apiConfig});

    fetch(apiPath, apiConfig).then(response => {
      console.log('reqres_actions.fetchAllItems() response from fetch():', response);
      if (response.ok) {
        response.json().then(data => {
          dispatch({
            type: REQRES_FETCH_ALL_SUCCESS,
            payload: response
          });
        })
      } else {
        response.json().then(error => {
          console.error('reqres_actions.fetchAllItems() error from fetch():', error);
          dispatch({
            type: REQRES_ERROR,
            payload: error.message
          });
        });
      }
    })
  }
}


// REST POST -- create an item
export function createItem(item) {
  return function(dispatch) {

    const apiPath = '/api/users';
    const apiConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: item
    };

    console.log('reqres_actions.createItem() apiPath, apiConfig: ', {apiPath, apiConfig});

    fetch(apiPath, apiConfig).then(response => {
      console.log('reqres_actions.createItem() response from fetch():', response);
      if (response.ok) {
        response.json().then(data => {
          dispatch({
            type: REQRES_CREATE_SUCCESS,
            payload: response
          });
        })
      } else {
        response.json().then(error => {
          console.error('reqres_actions.createItem() error from fetch():', error);
          dispatch({
            type: REQRES_ERROR,
            payload: error.message
          });
        });
      }
    })
  }
}
