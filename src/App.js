import React, { useEffect, useState } from 'react';
import Header from './Header';
import Quote from './Quote';
import Author from './Author';
import Footer from './Footer';

function App() {
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/quotes')
      .then((response) => response.json())
      .then((data) => {
        // Get a random quote from the array
        const randomIndex = Math.floor(Math.random() * data.quotes.length);
        setQuoteData(data.quotes[randomIndex]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <Header />
      {quoteData && (
        <>
          <Quote quote={quoteData.quote} />
          <Author author={quoteData.author} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
