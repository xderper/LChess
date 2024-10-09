const path = require('path')

module.exports = {
  
    watch: true,
    entry: {game: './src/game.js', login: './src/login.js'},
    mode: 'development',
    module: {
      rules: [
        { test: /\.svg$/, use: 'svg-inline-loader' },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      ]
    },
    output: {
      path: path.resolve(__dirname, 'webpack'),
      filename: '[name].js'
    }
}
// {
//   watch: true,
//   entry: './admin/src/admin_panel.js',
//   mode: 'development',
//   module: {
//     rules: [
//       { test: /\.svg$/, use: 'svg-inline-loader' },
//       { test: /\.css$/, use: ['style-loader', 'css-loader'] },
//     ]
//   },
//   output: {
//     path: path.resolve(__dirname, 'webpack'),
//     filename: 'admin_login.js'
//   },
//   // resolve: {
//   //   fallback: {
//   //     url: false,
//   //     timers: false,
//   //   },
//   // }
// }
// ]