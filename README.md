# MicroFrontEnd
  - Create MFE Folder
  - Go to folder path and run below command for create package.json file
    -  npm init -y
  - Install below some dependency about webpack
    - npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
    - After installation check your package.json file and run npm install
  - Create src folder and inside create new index.js file
  - write some code like console.log("MFE1")
  - Create public folder and inside create new index.html file 
  - write some code like html5 create body part and take one div with id
  - create webpack.config.js below code

    const HtmlWebpackPlugin = require("html-webpack-plugin")
    const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
    module.exports = {
        mode:"development",
        devServer : {
            port:3002
        },
        plugins:[
            new HtmlWebpackPlugin({
                template:"./public/index.html"
            }),
            new ModuleFederationPlugin({
                name:"cart",
                filename:"remoteEntry.js",
                exposes:{
                    "./CartIndex":"./src/index.js"
                }
            })
        ]
    }

    - after chnage your package.json file :
      "scripts": {
          "start": "webpack serve"
          },
    - npm start
    -  
