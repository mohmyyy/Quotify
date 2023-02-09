import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from '../Components/quotes/QuoteForm'

const NewQuote = () => {
  const history = useHistory();
  
  const addNewQuote = (quote)=>{
    console.log(quote)
    history.push('/quotes')
    
  }
  return <Fragment>
    <QuoteForm onAddQuote = {addNewQuote}/>
  </Fragment>;
};
export default NewQuote;
