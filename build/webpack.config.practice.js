const baseConfig = require('./webpack.config.base.js')
const webpack = require('webpack')
const path = require("path")
const merge = require('webpack-merge')
const HTMLPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const defaultPlugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
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
    hot: true
}

let config

config = merge(baseConfig, {
  // devtool: '#cheap-module-eval-source-map',
  entry: path.join(__dirname, '../practice/index.js'),
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
  resolve: {
    alias: {
      "vue": path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin()
      // new webpack.NoEmitOnErrorsPlugin()
  ])
})

module.exports = config
