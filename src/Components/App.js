import { getQueriesForElement } from "@testing-library/react";
import QuoteBox from "./QuoteBox";
import { useState } from 'react'

function App() {
  const [quote, setQuote] = useState({})
  const [error, seterror] = useState('')
  const URL = "https://type.fit/api/quotes"
  const getQuote = () => {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
      });
  }


  // const formatJson = (json) => {
  //   return {
  //     quote: json.q,
  //     author: json.a,
  //     html: json.h
  //   }
  // }
  return (
    <main className="App-main">
      <QuoteBox apiCallBack={getQuote} />
    </main>
  );
}

export default App;
