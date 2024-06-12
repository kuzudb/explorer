const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const DUCKDB_DIST = path.dirname(require.resolve("@duckdb/duckdb-wasm"));
const configureAPI = require("./src/server/Configure");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = defineConfig({
  devServer: {
    onAfterSetupMiddleware: configureAPI,
    historyApiFallback: false,
  },
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/main.js",
      title: "Kùzu Explorer",
    },
  },
  css: {
    loaderOptions: {
      sass: {
        // Globally load bootstrap variables and functions
        additionalData: `
          @import "~/node_modules/bootstrap/scss/_functions.scss";
          @import "~/node_modules/bootstrap/scss/_variables.scss";
          `,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: DUCKDB_DIST,
            to: "js",
          },
        ],
        options: {
          concurrency: 100,
        },
      }),
    ],
  }
});
