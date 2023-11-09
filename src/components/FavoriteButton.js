// FavoriteButton.js
import React from 'react';

function FavoriteButton({ onClick }) {
  return (
    <button className="favorite-button" onClick={onClick}>
     Add to Favorites
    </button>
  );
}

export default FavoriteButton;
