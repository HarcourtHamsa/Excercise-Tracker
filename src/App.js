import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExcerciseList from "./components/ExcerciseList";
import CreateExcercise from "./components/CreateExcercise";
import EditExcercises from "./components/EditExcercises";
import CreateUser from "./components/CreateUser";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/" component={ExcerciseList} />
          <Route exact path="/add" component={CreateExcercise} />
          <Route exact path="/edit/:id" component={EditExcercises} />
          <Route exact path="/user" component={CreateUser} />
      </Switch>
    </Router>
  );
}

export default App;
