# Overview

This is a sample web application that aims to build a custom UI for Cognito Userpool Authentication.  It uses AWS Amplify to interact with Cognito service.

The web application is written using React, Redux & Webpack.  It uses redux-form to handle user input forms.

# Setup Instructions

- Update `src/config_dev.js` with your Cognito userpool parameters
- Launch the application locally using Webpack Development Server (WDS).  The `npm` command will also launch your default web browser and load the application http://localhost:8080/
  - npm start
- In order to distrubute the application (S3 for example):
  - npm run-scripts build
  - copy `build.js`, `style/style.css`, `index.html` to S3 static website


