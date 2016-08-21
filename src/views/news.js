var NewsView = function() {

  return {
    generateHTML: function(newsArray) {
        var htmlString = "<ul>";
        for (var i=0; i < newsArray.length; i++) {
          htmlString += "<li>" + newsArray[i].webTitle + "</li>";
        }
        return htmlString + "</ul>";
    },
    render: function(newsArray) {
      var element = document.getElementById('news');
      element.innerHTML = NewsView.generateHTML(newsArray);
    }

  };


}();
