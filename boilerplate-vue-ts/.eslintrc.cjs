module.exports = {
  reportUnusedDisableDirectives: true,
  ignorePatterns: ["dist/*"],
  env: { browser: true, es2020: true, node: true },
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
};
