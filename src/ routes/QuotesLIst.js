import React from 'react';
import Quote from '../components/Quote';
import Button from '../components/Button';

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
