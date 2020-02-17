import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExcerciseList from "./components/ExcerciseList";
import CreateExcercise from "./components/CreateExcercise";
import DeleteExcercises from "./components/DeleteExcercises";
import CreateUser from "./components/CreateUser";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/" component={ExcerciseList} />
          <Route exact path="/add" component={CreateExcercise} />
          <Route exact path="/delete/" component={DeleteExcercises} />
          <Route exact path="/user" component={CreateUser} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
