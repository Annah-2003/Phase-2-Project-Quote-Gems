import React from 'react';
import Quote from '../components/Quotes';
import Button from '../components/Footer';

const QuoteList = ({ data }) => {
  return (
    <div>
      {data.map((quote, index) => (
        <Quote key={index} text={quote.text} />
      ))}
      <Button action="generate" />
      <Button action="share" />
    </div>
  );
};

export default QuoteList;
