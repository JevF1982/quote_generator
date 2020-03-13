$(document).ready(function() {
  let quotesData = [];
  let randomNumber = 0;

  function getQuotes() {
    return $.ajax({
      headers: {
        Accept: "application/json"
      },
      url:
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
      success: function(jsonQuotes) {
        if (typeof jsonQuotes === "string") {
          quotesData = JSON.parse(jsonQuotes);
          console.log(quotesData);
          randomNumber = Math.floor(Math.random() * quotesData.quotes.length);
          // put random quote in on load

          $("#text").text(
            "'" + " " + quotesData.quotes[randomNumber].quote + " " + "'"
          );
          $("#author").text(
            "- " + quotesData.quotes[randomNumber].author + " -"
          );
        }
      }
    });
  }

  getQuotes();

  $("#new-quote").on("click", () => {
    randomNumber = Math.floor(Math.random() * quotesData.quotes.length);
    $("#text").text(
      "'" + " " + quotesData.quotes[randomNumber].quote + " " + "'"
    );
    $("#author").text("- " + quotesData.quotes[randomNumber].author + " -");
  });

  $("#tweet-quote").on("click", () => {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        "'" +
        " " +
        quotesData.quotes[randomNumber].quote +
        " " +
        "'" +
        "  " +
        "- " +
        quotesData.quotes[randomNumber].author +
        " -"
    );
  });
});
