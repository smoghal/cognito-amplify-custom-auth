import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Amplify from 'aws-amplify';
import reduxThunk from 'redux-thunk';
import AWS from 'aws-sdk';

// TODO - check process.env and load config_dev or config_prod
import config from './config_dev';
import reducers from './reducers';

import App from './components/app';
import AppHeader from './components/header';

// AWS SDK & AWS Amplity Configuration
AWS.config.region = config.AWS_REGION;
Amplify.configure({
  Auth: {
    identityPoolId: config.AWS_COGNITO_IDENTITY_POOL_ID, // REQUIRED - Amazon Cognito Identity Pool ID
    region: config.AWS_REGION, // REQUIRED - Amazon Cognito Region
    userPoolId: config.AWS_COGNITO_USER_POOL_ID, //OPTIONAL - Amazon Cognito User Pool ID
    userPoolWebClientId: config.AWS_COGNITO_CLIENT_ID //OPTIONAL - Amazon Cognito Web Client ID
  }
});

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

export const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <AppHeader />
      <App />
    </div>
  </Provider>
  , document.querySelector('.app-container'));
