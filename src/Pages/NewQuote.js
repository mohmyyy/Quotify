import { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../Components/quotes/QuoteForm";
import useHttp from "../Components/Hooks/use-http";
import { addQuote } from "../Components/lib/api";
const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(()=>{
    if(status==='completed'){
      history.push('/quotes')
    }
  },[status,history])

  const addNewQuote = (quoteData) => {
    sendRequest(quoteData);
  };

  return (
    <Fragment>
      <QuoteForm isLoading={status==='pending'} onAddQuote={addNewQuote} />
    </Fragment>
  );
};
export default NewQuote;
