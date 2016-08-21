describe('NewsView', function() {

  describe('Render', function () {
    it('returns a <ul> of news headlines', function() {
      var newsDouble = ["headline1", "headline2"];
      expect(NewsView.render(newsDouble)).toEqual("<ul><li>headline1</li><li>headline2</li></ul>");
    });
  });


});
