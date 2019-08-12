var path = require('path')
var webpack = require('webpack')
// var px2rem = require('postcss-pxtorem')
// var px2rem = require('postcss-px2rem')

module.exports = {
  entry: './src/main.js',
  // entry: './src/lib/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'muh.js', // 我们可不想打包后叫build.js 多low啊 起一个与项目相对应的
    library: 'Muh', // library指定的就是你使用require时的模块名，这里便是require("PayKeyboard")
    libraryTarget: 'umd', //libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
  },
  module: {
//  loaders: [
//    {
//      test: /\.css$/,
//      loader: "style-loader!css-loader!postcss-loader"
//    }
//  ],
//  postcss: function() {
//    return [px2rem({remUnit: 75})] // 设置基准值，75是以iphone6的标准
//  },
//  plugins: {
//    'autoprefixer': {},
//    'postcss-pxtorem': {
//      'rootValue': 750,
//      'propList': ['*']
//      //  "postcss-loader": "^3.0.0",
//      //  "postcss-px2rem": "^0.3.0",
//    }
//  },
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: '.postcssrc.js'
              }
            }
          }
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax',
          'postcss-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: '.postcssrc.js'
              }
            }
          }
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  config: {
                    path: '.postcssrc.js'
                  }
                }
              }
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  config: {
                    path: '.postcssrc.js'
                  }
                }
              }
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
