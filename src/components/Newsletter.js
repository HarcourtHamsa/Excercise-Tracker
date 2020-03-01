import React, { Component } from "react";

class Newsletter extends Component {
  render() {
    return (
      <div>
        <div className="card shadow border-left-success">
          <div className="card-body">
            <p className="h3 text-success">Newsletter</p>
            <p>
              It correctly bundles React in production mode and optimizes the
              build for the best performance. The build is minified and the
              filenames include the hashes.
            </p>
            <form>
              <input type="text" className="form-control" placeholder="Enter Email" />
              <button className="btn btn-success btn-block shadow mt-2">Subscribe to newsletter</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;
