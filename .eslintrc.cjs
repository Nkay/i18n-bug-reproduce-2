module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    '@chax-at/eslint-config',
    'plugin:astro/recommended',
    'prettier'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
    mocha: true,
  },
  ignorePatterns: ['.eslintrc.cjs'],
  rules: {
    'quotes': [
      'error',
      'single',
    ],
    'object-shorthand': [
      'error',
      'consistent-as-needed',
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "FunctionDeclaration": {
          "parameters": "first"
        },
        "FunctionExpression": {
          "parameters": "first"
        },
        "ArrayExpression": "first",
        "CallExpression": {
          "arguments": "first"
        },
        "ObjectExpression": "first"
      }
    ],
    "@typescript-eslint/indent": ["off"],
    "@typescript-eslint/no-unnecessary-type-assertion": ["warn"],
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ["*.astro"],
      // Allows Astro components to be parsed.
      parser: "astro-eslint-parser",
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
  ],
};
