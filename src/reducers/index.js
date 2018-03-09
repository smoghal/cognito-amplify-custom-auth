import { combineReducers } from 'redux';
//import { reducer as form } from 'redux-form';
import AuthReducer from './auth_reducer';
import ReqresReducer from './reqres_reducer';
import ReduxFormReducer from './redux_form_reducer';

const rootReducer = combineReducers({
  form: ReduxFormReducer,
  auth: AuthReducer,
  reqres: ReqresReducer
});

export default rootReducer;
