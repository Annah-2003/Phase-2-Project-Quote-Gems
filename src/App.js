import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuoteList from './ routes/QuotesLIst'; 
import AuthorList from './ routes/ AuthorList'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/quotes" element={<QuoteList />} />
          <Route path="/authors" element={<AuthorList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
