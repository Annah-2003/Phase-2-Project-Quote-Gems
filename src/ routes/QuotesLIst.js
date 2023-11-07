import React from 'react';
import Quote from '../components/Quote';
import Button from '../components/Button';

const QuoteList = () => {
  // Fetch or generate quotes data here
  const quotes = []; // Your quotes data goes here

  return (
    <div>
      {quotes.map((quote, index) => (
        <Quote key={index} text={quote.text} />
      ))}
      <Button action="generate" />
      <Button action="share" />
    </div>
  );
};

export default QuoteList;
