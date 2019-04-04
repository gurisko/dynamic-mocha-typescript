function anotherTest(message: string) {
  return it(message, () => true);
}

export function exampleTest() {
  describe('Example Test', function() {
    before(() => {
      this.unshiftTests([
        anotherTest('should be 2nd'),
        anotherTest('should be 3rd'),
      ]);
      this.unshiftTest(anotherTest('should be 1st'));
      this.pushTest(anotherTest('should be 5th'));
      this.pushTests([
        anotherTest('should be 6th'),
        anotherTest('should be 7th'),
      ]);
    });

    it('should be 4th (static)', () => true);
  });
}
