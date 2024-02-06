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
  // State to hold the current quote data, favorite quotes, and loading status
  const [quoteData, setQuoteData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  // Function fetches a random quote from the quotable API
  const fetchRandomQuote = () => {
    setLoading(true);

    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.content && data.author) {
          setQuoteData({ quote: data.content, author: data.author });
          setDataLoaded(true);
        } else {
          console.error('No quotes available in the data.');
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  // Function to check if a quote already exists in favorites
  const isQuoteInFavorites = (quote) => {
    return favorites.some((favorite) => favorite.quote === quote);
  };

  // Adds the current quote to the list of favorites if it's not already there
  const addToFavorites = () => {
    if (quoteData && !isQuoteInFavorites(quoteData.quote)) {
      setFavorites([...favorites, quoteData]);
      console.log('Quote added to favorites:', quoteData);
    } else {
      console.log('Quote already exists in favorites:', quoteData);
    }
  };

  // Fetches a random quote on initial render
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  // JSX structure for App component
  return (
    <div className="App">
      <Header />
      {/* Display quote-related components if a quote is available */}
      {quoteData && dataLoaded && (
        <>
          <Quotes quote={quoteData.quote} />
          <Author author={quoteData.author} />
          <div className="button-container">
            <Button onClick={fetchRandomQuote} label="Get Another Quote" loading={loading} />
            {/* Display loading spinner if data is being loaded */}
            {loading && (
              <div className="loading-spinner"></div>
            )}
          </div>
          <FavoriteButton onClick={addToFavorites} disabled={loading} />
          {loading ? <p>Loading..</p> : null}
          <FavoritesList favorites={favorites} />
        </>
      )}
      <Footer />
    </div>
  );
}

// Exports App component
export default App;
