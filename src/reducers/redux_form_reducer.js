import {reducer as formReducer} from 'redux-form';
//import { } from '../actions/types';


export default formReducer.plugin({

  // login, forget password, and register form
  // do any login form field handling here if needed
  loginForm: (state, action) => {
    //console.log('redux_form_reducer.loginForm: state, action', {state, action});
    return state;
  }
})
