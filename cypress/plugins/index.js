const webpack = require("cypress-webpack-preprocessor-v5");

module.exports = on => {
  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "babel-loader",
                  options: {
                    presets: [
                      "@babel/preset-env",
                      "@babel/preset-react",
                      "@babel/preset-typescript",
                    ],
                    babelrc: false,
                  },
                },
              ],
            },
            {
              test: /\.js?$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "babel-loader",
                },
              ],
            },
          ],
        },
        resolve: {
          extensions: [".js", ".ts", ".tsx", ".json"],
        },
      },
    }),
  );

  on("task", {
    log(message) {
      // eslint-disable-next-line no-console
      console.log("        Log Message:", message);
      return null;
    },

    table(message) {
      // eslint-disable-next-line no-console
      console.table(message);

      return null;
    },
  });
};
