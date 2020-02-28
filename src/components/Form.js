import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div className="mt-5">
        <div>
          <p className="h3">Say Hi!</p>
          <form>
            <div className="form-control-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Name"
              />
              <label>Email</label>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Email"
              />
              <label>Mesage</label>
              <textarea className="form-control mb-3" placeholder="Enter Message"/>
              <button className="btn btn-success btn-block shadow mt-2">
                Message me <i className="fa fa-send"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
