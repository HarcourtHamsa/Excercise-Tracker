import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="mt-3 mb-5 border">
        <div className="card shadow border-left-danger">
          <div className="card-body">
            <p className="h5 text-danger">Upcoming Projects</p>
            <p>
              It correctly bundles React in production mode and optimizes the
              build for the best performance. The build is minified and the
              filenames include the hashes.
              <br />
              Your app is ready to be deployed!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
