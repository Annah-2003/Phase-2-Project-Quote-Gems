import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuoteList from './ routes/QuotesLIst';
import AuthorList from './ routes/ AuthorList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/quotes" component={QuoteList} />
            <Route path="/authors" component={AuthorList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
