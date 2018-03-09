const webpack = require('webpack');

//const combineLoaders = require('webpack-combine-loaders');
module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      // https://aws.amazon.com/blogs/developer/using-webpack-and-the-aws-sdk-for-javascript-to-create-and-bundle-an-application-part-1/
      test: /.json$/,
      loaders: ['json-loader']
    }/*,
    {
      // https://github.com/jackfranklin/react-css-modules-webpack/blob/master/webpack.config.dev.js
      test: /\.css$/,
      loader: combineLoaders([
        {
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      ])
    }*/
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }

  // plugins: [
  //   new webpack.DefinePlugin({
  //     DEVELOPMENT: JSON.stringify(true),
  //     AWS_REGION: JSON.stringify('YOUR_AWS_REGION'),
  //     AWS_COGNITO_IDENTITY_POOL_ID: JSON.stringify('YOUR_COGNITO_ID_POOL'),
  //     AWS_COGNITO_USER_POOL_ID: JSON.stringify('YOUR_COGNITO_USER_POOL'),
  //     AWS_COGNITO_CLIENT_ID: JSON.stringify('YOUR_COGNITO_CLIENT_ID')
  //   })
  // ]
};
