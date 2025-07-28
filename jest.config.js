export default {
  transform: {},
  testMatch: [
    "<rootDir>/tests/5kyu/**/*.test.js",
    "<rootDir>/tests/6kyu/**/*.test.js",
    "<rootDir>/tests/8kyu/**/*.test.js",
  ],
  moduleNameMapper: {
    "^@5kyu/(.*)$": "<rootDir>/src/5kyu/$1.js",
    "^@6kyu/(.*)$": "<rootDir>/src/6kyu/$1.js",
  },
};
