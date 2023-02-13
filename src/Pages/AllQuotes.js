import QuoteList from "../Components/quotes/QuoteList";
import useHttp from "../Components/Hooks/use-http";
import { getAllQuotes } from "../Components/lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../Components/UI/LoadingSpinner";
import NoQuotesFound from '../Components/quotes/NoQuotesFound'
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

const AllQuote = () => {
  const {
    sendRequest,
    status,
    error,
    data: loadedQuote,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if(status==='completed' && (!loadedQuote || loadedQuote.length === 0)){
    return <NoQuotesFound />
  }

  return <QuoteList quotes={loadedQuote} />;
};
export default AllQuote;
