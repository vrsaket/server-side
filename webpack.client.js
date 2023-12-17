const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base")

const config = { 
    // tell webpack about root file of our server application
    entry: ["regenerator-runtime/runtime.js", "./src/client/client.js"],

    // tell webpack where to put file that is generated
    output:{
        filename : "bundle.js",
        path: path.resolve(__dirname, "public") ,// will create build folder
    },
}

module.exports = merge(baseConfig, config);