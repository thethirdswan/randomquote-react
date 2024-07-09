import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const quotes = [["'Fight for all that is beautiful in this world'", "miHoYo"], ["'May you the beauty of this world always shine'", "Hoyoverse"], ["'Just Do It'", "Nike"], ["'This is the beginning and the end'", "Nameless Deity"], ["'Nah, I don't really feel like it.'", "Spongebob"]]

function App() {
  return (
    <div id="quote-box">
      <p id='text'></p>
      <p id='author'></p>
      <button id='new-quote' onClick={quoteGenerator}>New quote</button>
      <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_top"><button>Tweet this quote</button></a>
    </div>
  );
}

function quoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const quoteNumber = Math.floor(Math.random() * 6);
  const chosenQuote = quotes[quoteNumber]
  setQuote(chosenQuote[0]);
  setAuthor(chosenQuote[1]);
  const url = `https://twitter.com/intent/tweet?text=${chosenQuote[0]}, ${chosenQuote[1]}`
}

export default App;
