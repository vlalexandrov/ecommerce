module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  settings: {
    // react: {
    //   version: 'latest',
    // },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {},
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json', './pkg/*/tsconfig.json'],
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'react-hooks', '@emotion', 'import'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        cypress: 'off',
        'react/no-unescaped-entities': 'off',
      },
    },
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 100,
        tabWidth: 2,
        arrowParens: 'avoid',
        jsxSingleQuote: false,
        jsxBracketSameLine: false,
      },
    ],
    // next.js automatically adds React to jsx/tsx scope.
    'react/react-in-jsx-scope': 0,
    'import/no-named-as-default': 0,
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/no-require-imports': 'warn',
    // Disabled for now because of yelling on every React component
    '@typescript-eslint/naming-convention': 'off',
    // Disabled prop-types rule for the React components because we already did specify it by typescript
    'react/prop-types': 'off',
    // Disable because just duplicates "@typescript-eslint/no-unused-vars" rule
    'no-unused-vars': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
  },
};
