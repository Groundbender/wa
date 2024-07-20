import  path from 'path';
import webpack, { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ReactRefreshTypeScript from "react-refresh-typescript";
import dotenv from 'dotenv';


export default  {
    mode:  "development",
    entry: path.resolve(__dirname, 'src', "index.tsx"),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }), 
      new webpack.ProgressPlugin(),
      new ReactRefreshWebpackPlugin(),
      new DefinePlugin({
        'process.env': JSON.stringify(dotenv.config().parsed), 
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
          "style-loader",
          "css-loader",
        ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                //  hot module replacement
                getCustomTransformers: () => ({
                  before: [ReactRefreshTypeScript()],
                }),
              }
            }
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: [
            { 
              loader: '@svgr/webpack',
              options: { 
                icon: true,
                svgoConfig: {
                  plugins: [
                    {
                      name: "convertColors",
                      params: {
                        currentColor: true
                      }
                    }
                  ]
                } 
              } 
            }
          ],
        }
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    devtool: 'inline-source-map',
    devServer: {
      port: 3000,
      open: true
    } 
  }

