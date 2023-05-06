module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-puls`
  extends: ["puls"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
