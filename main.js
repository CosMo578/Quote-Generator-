import { quote, author } from '/data.js'

let button = document.getElementById('btn');
let quoteHolder = document.getElementById('quote');
let authorHolder = document.getElementById('author');

button.addEventListener('click', function generate() {
  var random = Math.floor(Math.random() * quote.length);
  quoteHolder.innerHTML = quote[random].text;
  authorHolder.innerHTML = author[random].name;
})