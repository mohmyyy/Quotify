import { Fragment, useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../Components/Comments/Comments";
import HighlightedQuote from "../Components/quotes/HighlightedQuote";
import useHttp from "../Components/Hooks/use-http";
import { getSingleQuote } from "../Components/lib/api";
import LoadingSpinner from "../Components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const match = useRouteMatch();

  const param = useParams();
  const { quoteId } = param;

  const {
    sendRequest,
    data: loadedData,
    error,
    status,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (!loadedData.text) {
    return <p>No Quote Found!</p>;
  }
  console.log(loadedData);

  return (
    <Fragment>
      <HighlightedQuote text={loadedData.text} author={loadedData.author} />
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
