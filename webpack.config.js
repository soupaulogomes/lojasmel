/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");

function modify(buffer) {
  let manifest = JSON.parse(buffer.toString());

  manifest = JSON.parse(
    JSON.stringify(manifest).replace(
      /lojasmel1/gi,
      process.env.account.replace(/ /, "")
    )
  );

  manifest_JSON = JSON.stringify(manifest, null, 2);

  return manifest_JSON;
}

module.exports = {
  entry: "./manifest.json",
  output: {
    path: path.resolve(__dirname, "./node_modules"),
    filename: "manifest.js",
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./manifest.json"),
          to: path.resolve(__dirname, "./manifest.json"),
          transform(content, path) {
            return modify(content);
          },
        },
      ],
    }),
  ],
};
