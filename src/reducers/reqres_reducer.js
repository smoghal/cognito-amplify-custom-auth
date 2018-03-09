import {
  REQRES_FETCH_ALL_SUCCESS,
  REQRES_CREATE_SUCCESS,
  REQRES_ERROR
} from '../actions/types';

export default function(state = {}, action) {

  switch (action.type) {
    case REQRES_FETCH_ALL_SUCCESS: {
      const returnProps = {error: '', data: action.payload};

      console.log('reqres_reducer. action: ', action);
      console.log('reqres_reducer. returning props: ', returnProps);
      return returnProps;
    }
    case REQRES_CREATE_SUCCESS: {
      const returnProps = {error: '', message: action.payload};

      console.log('reqres_reducer. action: ', action);
      console.log('reqres_reducer. returning props: ', returnProps);
      return returnProps;
    }
    case REQRES_ERROR: {
      const returnProps = {error: action.payload, data: null, message: null};

      console.log('reqres_reducer. action: ', action);
      console.log('reqres_reducer. returning props: ', returnProps);
      return returnProps;
    }
  }

  return state;
}
