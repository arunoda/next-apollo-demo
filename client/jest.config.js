module.exports = {
  moduleNameMapper: {
    "^.+\\.(css|sass|scss)$": "<rootDir>/scssStub.js",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
