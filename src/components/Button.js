// Button.js
import React from 'react';

function Button({ onClick, label, loading }) {
  return (
    <button className="button" onClick={onClick} disabled={loading}>
      {loading ? 'Loading...' : label}
    </button>
  );
}

export default Button;
