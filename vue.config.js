const { defineConfig } = require("@vue/cli-service");
const configureAPI = require("./src/server/Configure");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = defineConfig({
  devServer: {
    onAfterSetupMiddleware: configureAPI,
    historyApiFallback: false,
  },
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/main.js",
      title: "KùzuExplorer",
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
      new MonacoWebpackPlugin()
    ]
  }
});
