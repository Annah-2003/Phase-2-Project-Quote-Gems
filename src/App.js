// App.js
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Quotes from './components/Quotes';
import Author from './components/Author';
import Footer from './components/Footer';
import Button from './components/Button';
import FavoriteButton from './components/FavoriteButton';
import FavoritesList from './components/FavoritesList'; 

function App() {
  const [quoteData, setQuoteData] = useState(null);
  const [favorites, setFavorites] = useState([]);

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

  const addToFavorites = () => {
    if (quoteData) {
      setFavorites([...favorites, quoteData]);
      console.log('Quote added to favorites:', quoteData);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="App">
      <Header />
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

export default App;
