import React from 'react';

const Button = ({ action }) => (
  <button>{action === 'generate' ? 'Generate New Quote' : 'Share on Social Media'}</button>
);

export default Button;
