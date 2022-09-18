
import nodeResolve from '@rollup/plugin-node-resolve';



const demo_site = {

  input   : "demo/index.js",
  output  : [ { format : "iife", name: "demo", file: "./docs/demo.js" } ],

  plugins : [

    nodeResolve({
      mainFields     : ['module', 'main'],
      browser        : true,
      extensions     : [ '.js' ],
      preferBuiltins : false
    })

  ]

};



export default [ demo_site ];
