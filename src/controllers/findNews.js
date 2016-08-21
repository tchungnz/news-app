(function clickGetNews() {
  document.getElementById('getNews').addEventListener('click', function() {
    event.preventDefault();
    var newsArray;
    News.getNews();
    setTimeout(function() {
      newsArray = News.readNewsContent();
    }, 1500);
    setTimeout(function() {
      NewsView.render(newsArray);
    }, 3000);
});
})();
