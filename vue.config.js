const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const DUCKDB_DIST = path.dirname(require.resolve("@duckdb/duckdb-wasm"));
const KUZUDB_WASM_DIST = path.dirname(require.resolve("kuzu-wasm"));
const configureAPI = require("./src/server/Configure");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BASE_URL = require("./src/server/Utils/BaseURL");

module.exports = defineConfig({
  devServer: {
    onAfterSetupMiddleware: configureAPI,
    historyApiFallback: false,
  },
  transpileDependencies: true,
  publicPath: BASE_URL,
  pages: {
    index: {
      entry: "src/main.js",
      title: "Kuzu Explorer",
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
      new CopyWebpackPlugin({
        patterns: [
          {
            from: KUZUDB_WASM_DIST,
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
