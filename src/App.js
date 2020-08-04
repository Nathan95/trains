import React from "react";
import SearchAndDisplay from "./components/SearchAndDisplay";
import Departures from "./components/Departures";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./css/main.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SearchAndDisplay} />
          <Route exact path="/departures/:code" component={Departures} />
          <SearchAndDisplay />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
