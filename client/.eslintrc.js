module.exports = {
  env: {
    browser: true,
    jest: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
    'prettier',
  ],
  ignorePatterns: [
    '.gitlab/**/*',
    '.next/**/*',
    'build/**/*',
    'coverage/**/*',
    'dist/**/*',
    'docker/**/*',
    'docs/**/*',
    'infra/**/*',
    'out/**/*',
    'public/**/*',
    'storybook-static/**/*',
    '**/moduleFederation/mocks/**/*',
    '**/node_modules/**/*',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'import/no-unresolved': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'react/no-unused-prop-types': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    '@typescript-eslint',
    'testing-library',
  ],
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'], // see https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { classes: false, functions: false, variables: true },
    ],
    'consistent-return': 'off',
    'func-names': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'no-console': 'error',
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'error',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/resolver': {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
  },
};
