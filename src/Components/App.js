import { getQueriesForElement } from "@testing-library/react";
import QuoteBox from "./QuoteBox";

function App() {
  const [quote, setQuote] = useState({})

  return (
    <main className="App-main">
      <QuoteBox />
    </main>
  );
}

export default App;
