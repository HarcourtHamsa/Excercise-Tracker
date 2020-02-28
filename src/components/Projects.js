import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className=" p-5 mt-3 mb-5 border">
        <div className="row container">
          <div className="col-xl-8">
            <p className="h5">BuyPrime</p>
            <p>
              It correctly bundles React in production mode and optimizes the
              build for the best performance. The build is minified and the
              filenames include the hashes.
              <br />
              Your app is ready to be deployed!
            </p>
          </div>
          <div className="col-xl-4">
              <img src="" alt="my_image"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
