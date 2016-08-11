function changeColor() {

      var colors = ["#E2DFDC", "#EED6A9", "#7DB18D", "#377898", "#161818", "#D85954", "#F39874", "#2325B4", "#2E4ED", "#97CE7A"];
  var col = document.getElementById("test");
  var quote = document.getElementById("quote");
  var author = document.getElementById("author");
  var button = document.getElementById("new-quote");
  var buttonT = document.getElementById("tweet-quote");

    var color = colors[Math.floor(Math.random() * colors.length)];

    col.style.backgroundColor = color;
    quote.style.color = color;
    author.style.color = color;
    button.style.backgroundColor = color;
    buttonT.style.backgroundColor = color;

  }

  var theQuote = '';
  var theAuthor = '';
  var tweet = '';
  createQuote();

  function createQuote() {
    $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // The URL to the API. You can get this in the API page of the API you intend to consume
      type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
      data: {}, // Additional parameters here
      dataType: 'json',
      success: function(data) {

        theQuote = data.quote;
        theAuthor = data.author;

        document.getElementById('quote').innerHTML = theQuote;
        document.getElementById('author').innerHTML = "- " + theAuthor + " -";

        tweet = "https://twitter.com/intent/tweet?text=" + theQuote + " -" + theAuthor;

      },
      error: function(err) {
        alert(err);
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "6koKsM4RKLmshF8R0i2xObWHDSnhp1bKRbTjsnJbwRVd1hg4dg"); // Enter here your Mashape key
      }

    });
  }



$(document).ready(function() {

  $('#new-quote').on("click", function() {
    createQuote();
    changeColor();
  });

 $('#tweet-quote').on('click', function() {

   $("#tweet-quote").attr('href', tweet);


  });
});
