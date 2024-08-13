const nextJest = require("next/jest");
const env = require("dotenv").config({ path: ".env.development" });

const creatJestConfig = nextJest({
  dir: ".",
});
const jestConfig = creatJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
  testTimeout: 60000,
});

// console.log(process.env.NODE_ENV);
// console.log(env.parsed);

module.exports = jestConfig;
