
import typescript from "rollup-plugin-ts"
import { lezer }  from "@lezer/generator/rollup"





const lang_plugin = {

  input    : "src/fsl.ts",
  external : id => id != "tslib" && !/^(\.?\/|\w:)/.test(id),

  output: [
    { file : "dist/fsl.cjs", format : "cjs" },
    { dir  : "./dist",       format : "es"  }
  ],

  plugins: [ lezer(), typescript() ]

};





export default [ lang_plugin ];
