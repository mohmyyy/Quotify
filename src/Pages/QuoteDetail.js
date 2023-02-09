import { Fragment } from "react";
import { Link, Route, useParams } from "react-router-dom";
import Comments from "../Components/Comments/Comments";
import HighlightedQuote from "../Components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const DummyQuotes = [
    {
      id: "m1",
      text: "The most superior among you (Muslims) are those who learn the Qur'an and teach it. ...",
      author: "Prophet Muhammed PBUH",
    },
    {
      id: "m2",
      text: "No man is a true believer unless he desires for his brother that, what he desires for himself",
      author: "Prophet Muhammed PBUH",
    },
  ];

  const param = useParams();
  const quote = DummyQuotes.find((quote) => quote.id === param.quoteId);
  if (!quote) {
    return (
      <HighlightedQuote text="No Results Found" author="No Author found" />
    );
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${param.quoteId}`} exact>
        <div className="centered">
          <Link to={`/quotes/${param.quoteId}/comments`}>
            <button className="btn--flat">Show Comment</button>
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
