   
  module.exports = {
    testPathIgnorePatterns: ['./.next/', './node_modules/', './tests/e2e/'],
    setupFilesAfterEnv: ['./jest.setup.js'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': './node_modules/babel-jest',
      // '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
  };