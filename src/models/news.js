var News = (function () {

var newsContent = [];

  function findNewsSection() {
    var dropDown = document.getElementById("newsSection");
    var newsSection = dropDown.options[dropDown.selectedIndex].value;
    return newsSection;
  }

  function requestURL() {
    return "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=" + findNewsSection() + "&show-fields=body&show-editors-picks=true";
  }

  return {
    getNews: function() {
        newsContent = [];
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
              newsContent.push(JSON.parse(xhttp.responseText));
          }
        };
        xhttp.open("GET",requestURL());
        xhttp.send();
    },

    readNewsContent: function() {
      return newsContent[0].response.results;
    }
  };
})();
