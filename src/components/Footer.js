import React from 'react';
import './App.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer"> {/* Apply the 'footer' class */}
      <p>&copy; {new Date().getFullYear()} Quote of the Day</p>
    </footer>
  );
}

export default Footer;
