import './App.css';
import { useState } from 'react';

const quotes = [["'Fight for all that is beautiful in this world'", "miHoYo"], ["'May you the beauty of this world always shine'", "Hoyoverse"], ["'Just Do It'", "Nike"], ["'This is the beginning and the end'", "Nameless Deity"], ["'Nah, I don't really feel like it.'", "Spongebob"], ["'I will end this imperfect story into how we always wanted it to be.'", "Kiana Kaslana"]]

function App() {
  const newQuote = Math.floor(Math.random() * 6);
  const quoteNumber = quotes[newQuote]
  const [quote, setQuote] = useState(quoteNumber[0]);
  const [author, setAuthor] = useState(quoteNumber[1]);
  const [tweet, setTweet] = useState(`https://twitter.com/intent/tweet?text=${quoteNumber[0]}, ${quoteNumber[1]}`)
  function quoteGenerator() {
    const quoteNumber = Math.floor(Math.random() * 6);
    const chosenQuote = quotes[quoteNumber]
    setQuote(chosenQuote[0]);
    setAuthor(chosenQuote[1]);
    setTweet(`https://twitter.com/intent/tweet?text=${chosenQuote[0]}, ${chosenQuote[1]}`)
  }
  return (
    <div id="quote-box">
      <p id='text'>{quote}</p>
      <p id='author'>{author}</p>
      <button id='new-quote' onClick={quoteGenerator}>New quote</button>
      <a id="tweet-quote" href={tweet} target="_top"><button>Tweet this quote</button></a>
    </div>
  );
}

export default App;
