const path = require('path');
const { PassThrough } = require('stream');

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: pass.resolve(__dirname, "src/index.ts"),
  module: {
    rules: [
      {
        test: /\.tsx?$/, //정규식
        use: "ts-loader",
        exclude: /node-modules/,
      },
    ],
  },
  resolve: {
    extensions:[".tsx", ".ts", ".js"],
  },
  watch:true,
  output: {
    path: path.resolve(__dirname, "dist/source/"),
    filename: "index.bundle.js"
  }
}