import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuoteList from './ routes/QuotesLIst';
import AuthorList from './ routes/ AuthorList';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from 'http://localhost:3001' or your API endpoint
    fetch('http://localhost:3001')
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
