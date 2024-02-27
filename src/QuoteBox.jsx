import { FaQuoteLeft, FaQuoteRight, FaTwitter } from "react-icons/fa6";

const QuoteBox = ({ quote, author, setQuoteIndex, indexSpan }) => {
  const newQuote = () => {
    let rando = Math.floor(Math.random() * indexSpan);
    setQuoteIndex(rando);
  };
  return (
    <div id="quote-box" className="quote-box">
      <div className="quote-content">
        <i className="quote-i left">
          <FaQuoteLeft />
        </i>
        <div id="text" className="quote-text">
          {quote}
        </div>
        <i className="quote-i right">
          <FaQuoteRight />
        </i>
        <div id="author" className="quote-author">
          - {author}
        </div>
      </div>
      <div className="button-container">
        <a
          id="tweet-quote"
          className="tweet-quote"
          href="twitter.com/intent/tweet"
          target="_blank"
          title="tweet this quote"
        >
          <i className="twitter-i">
            <FaTwitter />
          </i>
        </a>
        <button
          onClick={newQuote}
          id="new-quote"
          className="new-quote"
          title="show new quote"
        >
          New Quote
        </button>
      </div>
    </div>
  );
};
export default QuoteBox;
