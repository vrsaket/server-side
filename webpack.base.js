 // Tell webpack to run babel on every file it runs through
module.exports = {
    module:{
        rules:[
            {
               test: /\.js?$/,
               loader: 'babel-loader', //transpiles to ES5 code 
               exclude : /node_modules/,  // not run inside the assigned directories
 
               // options pass with babel-loader
               options:{
               presets:[
                  'react', // handling all jsx and convert to ES5
                  'stage-0', // handling all async code which will be coded further
 
                   // running all the rules fo preset rules needed to run last 2 version of browser
                  ['env', {targets:{ browsers: ["last 2 versions"]}}]
               ]
             }
           }
       ]
     }
}