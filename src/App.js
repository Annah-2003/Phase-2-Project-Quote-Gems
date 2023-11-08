import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Quotes from './components/Quotes';
import Author from './components/Author';
import Footer from './components/Footer';

function App() {
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/quotes')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Add this line to inspect the data
        if (data.quotes && data.quotes.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.quotes.length);
          setQuoteData(data.quotes[randomIndex]);
        } else {
          console.error("No quotes available in the data.");
        }
      })
      
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <Header />
      {quoteData && (
        <>
          <Quotes quote={quoteData.quote} />
          <Author author={quoteData.author} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
