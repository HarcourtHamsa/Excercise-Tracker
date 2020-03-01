import React, { Component } from "react";
import Form from "./Form";

class Section extends Component {
  render() {
    return (
      <div>
        <div className="card shadow border-left-success">
          <div className="card-body">
            <p className="h3 text-success">About me</p>
            <p>
              It correctly bundles React in production mode and optimizes the
              build for the best performance. The build is minified and the
              filenames include the hashes.
              <br />
              Your app is ready to be deployed!
            </p>
            <p className="h3 text-success">Education</p>
            <p>
              It correctly bundles React in production mode and optimizes the
              build for the best performance. The build is minified and the
              filenames include the hashes.
              <br />
              Your app is ready to be deployed!
            </p>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
