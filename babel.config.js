module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [
            ".ios.js",
            ".android.js",
            ".js",
            ".ts",
            ".tsx",
            ".json",
            ".min.js",
            "production.min.js",
            "cjs.production.min.js",
          ],
          alias: {
            components: "./app/components",
            constant: "./app/constant",
            ducks: "./app/states/ducks",
            states: "./app/states",
            interfaces: "./app/interfaces",
            screens: "./app/screens",
            navigation: "./app/navigation",
            style: "./app/style",
            utils: "./app/utils",
            network: "./app/network",
            hooks: "./app/hooks",
          },
        },
      ],
    ],
  };
};
