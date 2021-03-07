import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import SubmissionsPage from "./pages/SubmissionsPage/SubmissionsPage";
import SchoolInstancePage from "./pages/SchoolInstancePage/SchoolInstancePage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Link className="logo" to="/">
          Project Edustar
        </Link>
        <Switch>
          <Route exact path="/submit">
            <SubmissionsPage />
          </Route>
          <Route exact path="/:id">
            {({ match }) => <SchoolInstancePage match={match} />}
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
