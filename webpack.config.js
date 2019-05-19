const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  let hotPlugin, styleLoader, cssExtractPlugin, isSourceMap;

  switch (env.mode) {
    case 'production':
      cssExtractPlugin = new MiniCssExtractPlugin({
        filename: 'main.css',
      });
      styleLoader = { loader: MiniCssExtractPlugin.loader };
      isSourceMap = false;
      break;

    default:
      styleLoader = { loader: 'style-loader' };
      isSourceMap = 'inline-source-map';
      hotPlugin = new webpack.HotModuleReplacementPlugin();
  }

  const config = {
    mode: env.mode,
    entry: './src/index.js',
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devtool: isSourceMap,

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss/,
          use: [
            styleLoader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                camelCase: true,
                modules: true,
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]',
              },
            },
          ],
        },
      ],
    },

    devServer: {
      compress: true,
      open: true,
      port: 6289,
      historyApiFallback: true,
      hot: true,
      progress: true,
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',

        // favicon: 'public/logo.ico',
      }),
      new CleanWebpackPlugin(),
    ],

    resolve: {
      alias: {
        Components: resolve(__dirname, 'src/components/'),
        Containers: resolve(__dirname, 'src/containers/'),
        images: resolve(__dirname, 'src/images/'),
        'react-dom': '@hot-loader/react-dom',
      },
    },
  };

  env.mode === 'production'
    ? config.plugins.push(cssExtractPlugin)
    : config.plugins.push(hotPlugin);

  return config;
};
