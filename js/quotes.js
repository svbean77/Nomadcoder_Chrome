const quotes = [
  {
    quote: "Life is either a great adventure or nothing.",
    author: "Helen Keller",
  },
  {
    quote: "Keep your eyes on the stars and your feet on the ground.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "Success is going from failure to failure without a loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote:
      "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote: "Do not be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas Edison",
  },
  {
    quote:
      "Some people dream of success, while other people get up every morning and make it happen.",
    author: "Wayne Huizenga",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

console.log(quote, author);

//명언을 랜덤으로 보이기 위한 난수 생성
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
