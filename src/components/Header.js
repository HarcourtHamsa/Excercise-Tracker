import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <div className="jumbotron bg-light" style={{ height: "650px" }}>
          <div className="container">
            <p className="h1">Hi, I am Harcourt <b>Hamsa</b></p>
            <p>I help businesses scale using tech.</p>

            <div>
              <a href="/" className="my-shadow btn mr-3">
                A button
              </a>
              <a href="/" className="my-shadow btn ">
                A button
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
