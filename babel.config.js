module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./app"],
        alias: {
          assets: "./app/assets",
          routes: "./app/routes",
          components: "./app/components",
          screens: "./app/screens",
          hooks: "./app/hooks",
          services: "./app/services",
          layouts: "./app/layouts",
          configs: "./app/configs",
          icons: "./app/icons",
          utils: "./app/utils",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
