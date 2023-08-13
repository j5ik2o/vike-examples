module.exports = {
  rules: {},
  reportUnusedDisableDirectives: true,
  ignorePatterns: ["dist/*"],
  env: { browser: true, es2020: true, node: true },
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {},
  plugins: [],
  extends: ["eslint:recommended"],
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        // TypeScriptに関するカスタムルールをここに追加できます
      },
    },
  ],
};
