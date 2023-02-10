import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const SortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";

  const SortedQuotes = SortQuotes(props.quotes, isSortingAscending);

  // const changeSortingHandler = () => {
  //   history.push(`/quotes?sort=${isSortingAscending ? "disc" : "asc"}`);
  // };
  // const changeSortingHandler = () => {
  //   history.push(`${location.pathname}?sort=${isSortingAscending ? "disc" : "asc"}`);
  // };
  const changeSortingHandler = () => {
    history.push({
      pathname: `${location.pathname}`,
      search: `?sort=${isSortingAscending ? "disc" : "asc"}`,
    });
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          {" "}
          Sort {isSortingAscending ? "Descending" : "Ascending"}{" "}
        </button>
      </div>
      <ul className={classes.list}>
        {SortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
