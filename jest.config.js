/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  testTimeout: 8000000,
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  
};