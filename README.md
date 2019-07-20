# Overview

This is a sample web application that aims to build a custom UI for Cognito Userpool Authentication.  It uses AWS Amplify to interact with Cognito service.

The web application is written using React, Redux & Webpack.  It uses redux-form to handle user input forms.

## Setup Instructions

- Update `src/config_dev.js` with your Cognito userpool parameters
- Install `node_modules` dependencies using `yarn`
  - `yarn install`
- Launch the application locally using Webpack Development Server (WDS).
  - `yarn start`
- Alternatively, if in VSCode, launch the server using the `Launch Webpack Development Server (WDS)` in VSCode `Debug` view.
- In order to distrubute the application (S3 for example):
  - `yarn build`
  - copy `build.js`, `style/*`, `image/*`, `index.html` to S3 static website
