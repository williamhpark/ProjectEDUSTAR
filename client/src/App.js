import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import schoolImage from "./assets/images/school.png";
import HomePage from "./pages/HomePage/HomePage";
import SubmissionsPage from "./pages/SubmissionsPage/SubmissionsPage";
import SchoolInstancePage from "./pages/SchoolInstancePage/SchoolInstancePage";
import UpdateSchoolPage from "./pages/UpdateSchoolPage/UpdateSchoolPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="logo-container">
          <img className="logo-image" src={schoolImage} alt="Logo image" />
          <Link className="link logo-text" to="/">
            Project EDUSTAR
          </Link>
        </div>
        <Switch>
          <Route exact path="/submit">
            <SubmissionsPage />
          </Route>
          <Route exact path="/:id/update">
            {({ match }) => <UpdateSchoolPage match={match} />}
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
