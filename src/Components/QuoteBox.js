import { useState } from "react";

const QuoteBox = ({ getRandomQuote, initial }) => {
  const [quote, setQuote] = useState({ text: 1, author: 2 })
  const handleClick = () => {
    const newQuote = getRandomQuote()
    const text = document.querySelector('#text')
    const author = document.querySelector('#author')
    text.innerHTML = newQuote.text
    author.innerHTML = newQuote.author
  }
  return (
    <div id="quote-box">
      <div id="text">{quote.text}</div>
      <div id="author">{quote.author}</div>
      <a href="#" id='tweet-quote'>tweet</a>
      <button id='new-quote' onClick={handleClick}>Random</button>
    </div>
  )

};

export default QuoteBox