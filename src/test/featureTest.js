describe('BrewYourNews App', function() {

  describe('DOM structure', function() {
    it("has a div element with the id 'news'", function() {
      expect(document.getElementById("news") !== null).toBeTrue();
    });

  describe('Find news', function() {
    it('prints the headlines requested', function() {
      document.getElementById("getNews").click();
      window.setTimeout(function() {
        expect(document.getElementbyId('news').textContent.indexOf(''))
      })

    });

  });

  });
});
