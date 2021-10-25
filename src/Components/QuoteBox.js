import { useState } from "react";

const initial = {
  text: "Here is one quality that one must possess to win, and that is definiteness of purpose, the knowledge of what one wants, and a burning desire to possess it",
  author: 'Napoleon Hill'
}

const QuoteBox = ({ getRandomQuote }) => {
  const [quote, setQuote] = useState(initial)

  const leftQuote = <i className='fa fa-quote-left'></i>
  const rightQuote = <i className='fa fa-quote-right' id='right'></i>
  const twitter = <i className='fa fa-twitter'></i>


  const handleClick = () => {
    const newQuote = getRandomQuote()
    if (!newQuote.author) {
      newQuote.author = 'Anonymous'
    }
    setQuote(newQuote)

  }


  return (
    <div id="quote-box">
      <div id="text">{leftQuote} {quote.text} {rightQuote}</div>
      <div id="author"> - {quote.author}</div>
      <div className="buttons">
        <a href="#" id='tweet-quote'>{twitter}</a>
        <button id='new-quote' onClick={handleClick}>Random</button>
      </div>
    </div>
  )

};

export default QuoteBox