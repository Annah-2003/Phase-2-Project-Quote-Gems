import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Quotes from './components/Quotes';
import Author from './components/Author';
import Footer from './components/Footer';
import Button from './components/Button';
import FavoriteButton from './components/FavoriteButton';
import FavoritesList from './components/FavoritesList';

function App() {
  // State variables to manage quote data, favorites, and loading status
  const [quoteData, setQuoteData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch a random quote from the API
  const fetchRandomQuote = () => {
    setLoading(true);
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        if (data.content && data.author) {
          setQuoteData({ quote: data.content, author: data.author });
        } else {
          console.error('No quotes available in the data.');
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  // Function to add the current quote to favorites
  const addToFavorites = () => {
    if (quoteData && !favorites.some((favorite) => favorite.quote === quoteData.quote)) {
      setFavorites([...favorites, quoteData]);
      console.log('Quote added to favorites:', quoteData);
    } else {
      console.log('Quote already exists in favorites:', quoteData);
    }
  };

  // Fetch a random quote on initial render
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="App">
      {/* Header component */}
      <Header />

      {/* Render quote-related components if a quote is available */}
      {quoteData && (
        <>
          <Quotes quote={quoteData.quote} />
          <Author author={quoteData.author} />
          <div className="button-container">
            <Button onClick={fetchRandomQuote} label="Get Another Quote" loading={loading} />
            {/* Display loading spinner if data is being loaded */}
            {loading && <div className="loading-spinner"></div>}
          </div>

          {/* Button to add the current quote to favorites */}
          <FavoriteButton onClick={addToFavorites} disabled={loading} />
          {/* Display loading text if data is being loaded */}
          {loading ? <p>Loading..</p> : null}

          {/* Display list of favorite quotes */}
          <FavoritesList favorites={favorites} />
        </>
      )}

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
