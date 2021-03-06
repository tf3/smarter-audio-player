module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'object-curly-newline': 'off',
    'comma-dangle': 'off',
    camelcase: 'off',
    'arrow-parens': 'off',
    'no-console': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'max-len': 'off',
    'import/prefer-default-export': 'off'
  }
};
