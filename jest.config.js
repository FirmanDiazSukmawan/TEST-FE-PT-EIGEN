export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      useESM: true, 
    },
  },
  testMatch: ["**/_test_/**/*.test.ts"], 
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
