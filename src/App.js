import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuoteList from './ routes/QuotesLIst';
import AuthorList from './ routes/ AuthorList';
import './App.css';
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('http://localhost:3000/quotes')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/quotes" element={<QuoteList data={data} />} />
          <Route path="/authors" element={<AuthorList data={data} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
