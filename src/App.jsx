import { useState } from "react";
import "./App.css";
import QuoteBox from "./QuoteBox";
import quotes from "./quotes";

function App() {
  const randomBumber = Math.floor(Math.random() * quotes.length);
  const [quoteIndex, setQuoteIndex] = useState(randomBumber);
  const { quote, author } = quotes[quoteIndex];
  return (
    <main>
      <QuoteBox
        quote={quote}
        author={author}
        setQuoteIndex={setQuoteIndex}
        indexSpan={quotes.length}
      />
    </main>
  );
}

export default App;
