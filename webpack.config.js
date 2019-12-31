const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
         options: {
           modifyVars: {
             'primary-color': '#1DA57A',
             'link-color': '#1DA57A',
             'border-radius-base': '2px',
             // or
             'hack': `true; @import "your-less-file-path.less";`, // Override with less file
           },
           javascriptEnabled: true,
         },
        }],
        // ...other rules
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
        {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      
        
      
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
       template: "./src/index.html",
       filename: "./index.html"
     })
  ],
  devServer: {
    historyApiFallback: true,
    port: 5000
},
};