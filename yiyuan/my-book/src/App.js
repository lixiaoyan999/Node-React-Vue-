import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/home/home.jsx';
import content from './pages/content/content.jsx';
import list from './pages/list/lists.jsx';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/content/:id/:title" component={content} />
              <Route path="/list/:type/:value" component={list} />
          </div>
      </Router>
    );
  }
}

export default App;
