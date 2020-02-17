import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark p-3 "
        id="navbar"
      >
        <Link to="/" className="navbar-brand">
          Excercise Tracker
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ml-auto">
            <Link to="/" className="nav-item nav-link active">
              Excercises
            </Link>
            <Link to="/delete/" className="nav-item nav-link">
              Delete Excercise
            </Link>
            <Link to="/add" className="nav-item nav-link">
              Create Excercise
            </Link>
            <Link to="/user" className="nav-item nav-link">
              Create User
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
