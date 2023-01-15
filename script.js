const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote-button');
const body = document.querySelector('body');
body.style.backgroundImage = `url('philosophy.jpg')`;


function getQuote() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      quoteText.innerText = data.content;
      authorText.innerText = '- ' + data.author;
    });
}

getQuote();

