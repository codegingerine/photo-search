import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import MainSearch from "View/MainSearch";

import "Styles/reset.scss";
import "Styles/global.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={MainSearch} exact path="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
