import { Fragment } from "react";
import { Link, Route, useParams,useRouteMatch } from "react-router-dom";
import Comments from "../Components/Comments/Comments";
import HighlightedQuote from "../Components/quotes/HighlightedQuote";

const QuoteDetail = () => {
  const match = useRouteMatch();
  console.log(match)
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
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load Comment
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
