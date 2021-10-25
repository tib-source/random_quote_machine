const QuoteBox = ({ apiCallBack }) => {
  return (
    <div id="quote-box">
      this is random info
      <button onClick={apiCallBack}>Random</button>
    </div>
  )

};

export default QuoteBox