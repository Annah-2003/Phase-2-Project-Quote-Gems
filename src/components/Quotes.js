import React from 'react';
import './App.css'; // Import the CSS file

function Quote({ quote }) {
  return (
    <div className="quote"> {/* Apply the 'quote' class */}
      <p>{quote}</p>
    </div>
  );
}

export default Quote;
