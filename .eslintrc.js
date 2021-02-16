module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ['airbnb-typescript-prettier'], //, 'react-native-wcandillon'],
  // plugins: ['reanimated'],
  // parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   project: './tsconfig.json',
  // },
  // plugins: ['@typescript-eslint'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'prettier/prettier': 'error',
    'import/no-unresolved': 1,
    'global-require': 0,
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 1,
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 1,
    'react/require-default-props': 0,
    'react/no-array-index-key': 0,
    '@typescript-eslint/ban-types': 1,
    'no-nested-ternary': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off',
    'no-param-reassign': 'warn',
    '@typescript-eslint/no-unused-vars': 0,
    // 'reanimated/js-function-in-worklet': 2,
  },
  ignorePatterns: ['.eslintrc.js', 'prettier.config.js'],
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
      node: {
        paths: ['./src'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
