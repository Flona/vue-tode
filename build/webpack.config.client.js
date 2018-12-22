const baseConfig = require('./webpack.config.base.js')
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'

const defaultPlugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin({
      template: path.join(__dirname, "template.html")
    }),
    new VueLoaderPlugin()
]

const devServer = {
    port: 8080,
    host: '0.0.0.0',
    overlay: {
        errors: true
    },
    historyApiFallback: {
      index: '/public/index.html'
    },
    hot: true
}

let config

if (isDev) {
    config = merge(baseConfig, {
        // devtool: '#cheap-module-eval-source-map',
        module: {
            rules: [
                {
                    test: /\.styl(us)?$/,
                    oneOf: [
                      // 这里匹配 `<style module>`
                      {
                        resourceQuery: /module/,
                        use: [
                          'vue-style-loader',
                          {
                            loader: 'css-loader',
                            options: {
                              modules: true,
                              localIdentName: '[path]-[name]-[hash:base64:5]',
                              camelCase: true
                            }
                          },
                          {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                          },
                          'stylus-loader'
                        ]
                      },
                      // 这里匹配普通的 `<style>` 或 `<style scoped>`
                      {
                        use: [
                          'vue-style-loader',
                          'css-loader',
                          {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                          },
                          'stylus-loader'
                        ]
                      }
                    ]
                    // use: [
                    //     'vue-style-loader',
                    //     'css-loader',
                    //     {
                    //         loader: 'postcss-loader',
                    //         options: {
                    //             sourceMap: true
                    //         }
                    //     },
                    //     'stylus-loader'
                    // ]
                }
            ]
        },
        devServer,
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin()
            // new webpack.NoEmitOnErrorsPlugin()
        ])
    })
} else {
    config = merge(baseConfig, {
        entry: {
            app: path.join(__dirname, '../client/index.js')
            // vendor: ['vue']
        },
        output: {
            filename: '[name].[chunkhash:8].js'
        },
        module: {
            rules: [
                {
                    test: /\.styl(us)?$/,
                    oneOf: [
                      // 这里匹配 `<style module>`
                      {
                        resourceQuery: /module/,
                        use: [
                          MiniCssExtractPlugin.loader,
                          {
                            loader: 'css-loader',
                            options: {
                              modules: true,
                              localIdentName: '[hash:base64:8]',
                              camelCase: true
                            }
                          },
                          {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                          },
                          'stylus-loader'
                        ]
                      },
                      // 这里匹配普通的 `<style>` 或 `<style scoped>`
                      {
                        use: [
                          MiniCssExtractPlugin.loader,
                          'css-loader',
                          {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                          },
                          'stylus-loader'
                        ]
                      }
                    ]
                    // use: [
                    //   MiniCssExtractPlugin.loader,
                    //   'css-loader',
                    //   {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //       sourceMap: true
                    //     }
                    //   },
                    //   'stylus-loader'
                    // ]
                }
            ]
        },
        optimization: {
            splitChunks: {
              chunks: 'all'
            },
            runtimeChunk: true
        },
        plugins: defaultPlugins.concat([
          new MiniCssExtractPlugin({
            filename: 'styles.[chunkhash:8].css'
          })
            // new ExtractPlugin('styles.[chunkhash:8].css')
            // new webpack.optimize.CommonsChunkPlugin({
            //   name: 'vendor'
            // }),
            // new webpack.optimize.CommonsChunkPlugin({
            //   name: 'runtime'
            // })
        ])
    })
}

module.exports = config
