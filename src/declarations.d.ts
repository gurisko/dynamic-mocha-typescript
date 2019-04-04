declare namespace Mocha {
  export interface Suite {
    pushTest(test: Mocha.Test): this;
    pushTests(tests: Mocha.Test[]): this;
    unshiftTest(test: Mocha.Test): this;
    unshiftTests(test: Mocha.Test[]): this;
  }
}
