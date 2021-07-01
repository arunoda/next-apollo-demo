module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/tests/e2e/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    // '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};
