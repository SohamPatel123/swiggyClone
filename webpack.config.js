const path = require('path');
module.exports = {
"mode": "none",
"entry": "./src/index.js",
"output": {
   "path": __dirname + '/dist',
   "filename": "bundle.js"
},
devServer: {
    static: path.join(__dirname, 'dist')
},


"module": {

    "rules": [

      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },

      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },

      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },

      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.css$/,
         "use": [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ]
  }
}


