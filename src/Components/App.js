import QuoteBox from "./QuoteBox";
import { useState, useEffect } from 'react'


function App(props) {

  const [length, setLenth] = useState(0)
  const URL = "https://type.fit/api/quotes"

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLenth(data.length)
        return props.addQuotes(data)
      });
  }, [])

  function getRandom() {
    const index = Math.floor(Math.random() * length)
    const rand = props.quotes[index]
    console.log(index)
    return rand
  }

  // const formatJson = (json) => {
  //   return {
  //     quote: json.q,
  //     author: json.a,
  //     html: json.h
  //   }
  // }
  return (
    <div className="App-div">
      <QuoteBox getRandomQuote={getRandom} />
    </div>
  );
}


export default App
