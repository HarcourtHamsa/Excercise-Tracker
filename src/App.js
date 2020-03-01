import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import MyProjects from "./components/MyProjects";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={MyProjects} />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};

export default App;
