const _ = require('lodash');
console.log("Running simulated tests...");

if (_.isString("Hello World")) {
  console.log("Test Passed!");
  process.exit(0);
} else {
  console.error("Test Failed!");
  process.exit(1);
}
