const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base")
const webPackNodeExternals = require("webpack-node-externals")

const config = {
    // inform webpack about we are building a bundle for nodeJS rather than browser
    target:'node', 

    // tell webpack about root file of our server application
    entry: ["regenerator-runtime/runtime.js", "./src/index.js"],

    // tell webpack where to put file that is generated
    output:{
        filename : "bundle.js",
        path: path.resolve(__dirname, "build") ,// will create build folder
    },

    externals: [webPackNodeExternals()]
     
}

module.exports = merge(baseConfig, config);