module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["plugin:@typescript-eslint/recommended"],
  ignorePatterns: ["node_modules/"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
