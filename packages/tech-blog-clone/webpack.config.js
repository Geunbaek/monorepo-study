const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { FederatedTypesPlugin } = require("@module-federation/typescript");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const Dotenv = require("dotenv-webpack");
const deps = require("./package.json").dependencies;

const federationConfig = {
  name: "tech_blog_clone",
  filename: "remoteEntry.js",
  remotes: {
    lib: "lib@http://localhost:3001/remoteEntry.js",
  },
  exposes: {},
  shared: {
    ...deps,
  },
};

module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3000/",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets",
          to: "assets",
        },
      ],
    }),
    new ModuleFederationPlugin(federationConfig),
    new FederatedTypesPlugin({ federationConfig }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv(),
  ],
});
