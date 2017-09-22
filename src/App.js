// React Common Modules
import React, { Component } from 'react';
// React Router
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Own Modules
import { MainPage } from './Pages/';


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={MainPage}/>
        </Route>
      </Router>
    );
  }
}

export default App;
