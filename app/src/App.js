import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "View/Main";
import Search from "View/Search";

import "Styles/reset.scss";
import "Styles/global.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route component={Main} exact path="/" />
          <Route component={Search} path="/search" />
        </Switch>
      </Router>
    );
  }
}

export default App;
