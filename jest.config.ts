export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  preset: 'ts-jest',
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/test/**/*.test.ts",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/']
};
