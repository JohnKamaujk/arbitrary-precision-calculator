/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest", // Use ts-jest for handling TypeScript files
  testEnvironment: "node", // Use Node.js environment
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Handle both .ts and .tsx files
  },
};
