import { useState } from "react";

const initial = {
  text: "Here is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants, and a burning desire to possess it",
  author: 'Napoleon Hill'
}

const QuoteBox = ({ getRandomQuote }) => {
  const [quote, setQuote] = useState(initial)
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