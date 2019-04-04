import * as Mocha from 'mocha';

Mocha.Suite.prototype.pushTest = Mocha.Suite.prototype.addTest;

Mocha.Suite.prototype.pushTests = function(tests) {
  for (const test of tests) {
    this.addTest(test);
  }
  return this;
};

Mocha.Suite.prototype.unshiftTest = function(test) {
  this.addTest(test);
  const transformedTest = this.tests.pop();
  this.tests.unshift(transformedTest);
  return this;
};

Mocha.Suite.prototype.unshiftTests = function(tests) {
  for (let i = tests.length - 1; i >= 0; i -= 1) {
    this.unshiftTest(tests[i]);
  }
  return this;
};
