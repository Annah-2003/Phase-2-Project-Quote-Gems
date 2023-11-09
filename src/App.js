// Imports components
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Quotes from './components/Quotes';
import Author from './components/Author';
import Footer from './components/Footer';
import Button from './components/Button';
import FavoriteButton from './components/FavoriteButton';
import FavoritesList from './components/FavoritesList'; 

// Main App Component
function App() {
  // State to hold the current quote data and favorite quotes
  const [quoteData, setQuoteData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Function fetches a random quote from the quotable API
  const fetchRandomQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.content && data.author) {
          setQuoteData({ quote: data.content, author: data.author });
        } else {
          console.error('No quotes available in the data.');
        }
      })
      .catch((error) => console.error(error));
  };

  // adds the current quote to list of favorites
  const addToFavorites = () => {
    if (quoteData) {
      setFavorites([...favorites, quoteData]);
      console.log('Quote added to favorites:', quoteData);
    }
  };

  // Fetches a random quote 
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  // JSX structure for App component
  return (
    <div className="App">
      <Header />
      {/* Display quote-related componen quote is available */}
      {quoteData && (
        <>
          <Quotes quote={quoteData.quote} />
          <Author author={quoteData.author} />
          <Button onClick={fetchRandomQuote} label="Get Another Quote" />
          <FavoriteButton onClick={addToFavorites} />
          <FavoritesList favorites={favorites} />
        </>
      )}
      <Footer />
    </div>
  );
}

// Exports App component
export default App;
