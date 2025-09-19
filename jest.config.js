export default {
  preset: "ts-jest",
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  testMatch: [
    "<rootDir>/tests/5kyu/**/*.test.ts",
    "<rootDir>/tests/5kyu/**/*.test.js",
    "<rootDir>/tests/6kyu/**/*.test.ts",
    "<rootDir>/tests/6kyu/**/*.test.js",
    "<rootDir>/tests/7kyu/**/*.test.ts",
    "<rootDir>/tests/7kyu/**/*.test.js",
    "<rootDir>/tests/8kyu/**/*.test.ts",
    "<rootDir>/tests/8kyu/**/*.test.js",
  ],
  moduleNameMapper: {
    "^@5kyu/(.*)$": "<rootDir>/src/5kyu/$1",
    "^@6kyu/(.*)$": "<rootDir>/src/6kyu/$1",
    "^@7kyu/(.*)$": "<rootDir>/src/7kyu/$1",
  },
};
