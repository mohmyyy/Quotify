import QuoteList from "../Components/quotes/QuoteList";

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
  return <QuoteList quotes = {DummyQuotes} />;
};
export default AllQuote;
