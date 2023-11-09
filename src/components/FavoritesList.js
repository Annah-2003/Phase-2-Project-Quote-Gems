
import React from 'react';

function FavoritesList({ favorites }) {
  return (
    <div className="favorites-list">
      <h2>~Favorites~</h2>
      {favorites.map((favorite, index) => (
        <div key={index} className="favorite-item">
          <p>{favorite.quote}</p>
          <p>- {favorite.author}</p>
        </div>
      ))}
    </div>
  );
}

export default FavoritesList;
