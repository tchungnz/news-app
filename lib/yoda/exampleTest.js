function beforeEach() {
  x = "hey there";
}

describe('Yoda Testing Framework', function() {

  describe('Example tests:', function() {

    it('hello equals hello', function() {
      expect("hello").toEqual("hello");
    });
    it('hello does not equal hi', function() {
      expect("hello").toEqual("hi");
    });

    it('true to be true', function() {
      expect(true).toBeTrue();
    });

    it('true to be false', function() {
      expect(true).toBeFalse();
    });

    it("beforeEach function creates variable x 'hey there'", function() {
      expect(x).toEqual("hey there");
    });

  });
});
