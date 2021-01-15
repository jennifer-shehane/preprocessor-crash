/* eslint-disable no-template-curly-in-string */
const nodeEnv = process.env.NODE_ENV || "development";
const config = parser => {
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          corejs: { version: 3 },
          useBuiltIns: "usage",
        },
      ],
      "@babel/preset-react",
      parser === "typescript" && "@babel/preset-typescript",
    ].filter(Boolean),
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "react-redux-consumer": "react-redux",
            "react-redux-dealer": "react-redux",
            "reselect-consumer": "reselect",
            "reselect-dealer": "reselect",
          },
        },
      ],
      "@loadable/babel-plugin",
      parser === "flow" && "@babel/plugin-transform-flow-strip-types",
      ["@babel/plugin-proposal-optional-chaining", { loose: true }],
      ["@babel/plugin-proposal-nullish-coalescing-operator", { loose: true }],
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-syntax-dynamic-import",
      parser === "typescript" &&
      nodeEnv === "development" && "@babel/plugin-transform-react-jsx-source",
      nodeEnv === "test" && "babel-plugin-dynamic-import-node",
      nodeEnv !== "test" && [
        "babel-plugin-transform-imports",
        {
          recompose: {
            transform: "recompose/${member}",
            preventFullImport: true,
          },
          reactstrap: {
            transform: "reactstrap/lib/${member}",
            preventFullImport: true,
          },
          lodash: {
            transform: "lodash/${member}",
            preventFullImport: true,
          },
        },
      ],
    ].filter(Boolean),
    sourceType: "unambiguous",
  };
};

module.exports = {
  ...config("flow"),
  sourceMaps: "inline",
  overrides: [{ test: ["./**/*.ts", "./**/*.tsx"], ...config("typescript") }],
};
