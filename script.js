const quoteText = document.querySelector(".quote");
authorName = document.querySelector(".author .name");
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");
//  Random quote function
function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  // Fetching random quotes/ data from the API and parsing it into JavaScript object
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", () => {
  // SpeechSynthesisUtterance is a Web speech API that represents a speech request
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.innerText} by ${authorName.innerText}`
  );
  speechSynthesis.speak(utterance); //Speak method of speechSynthesis speaks the utterance
});

copyBtn.addEventListener("click", () => {
  // copying the quote text on copyBtn click
  // writeText() property writes the specified text string to the system clipboard.
  navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweetUrl, "_blank"); //opening a new twitter tab with passing quote in the url
});

quoteBtn.addEventListener("click", randomQuote);
