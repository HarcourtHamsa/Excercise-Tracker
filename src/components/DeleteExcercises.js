import React, { Component } from "react";
import axios from "axios";

export default class DeleteExcercises extends Component {
  state = {
    id: ""
  };

  handleChange = e => {
    e.preventDefault();
    // Code snippet
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {id } = this.state;

    // Code snippet
    axios
      .delete(`http://localhost:5000/excercises/delete/${id}`)
      .then(this.setState({id: ""}))
      .then(window.location ="/")
      .catch(err => console.log(err));
  };
  render() {
    return (
      <React.Fragment>
        <p className="h3 mt-3 ml-5">Delete Excercises</p>

        <form onSubmit={this.handleSubmit} className="mt-5 container">
          <div className="form-control-group">
            <input
              type="number"
              className="form-control mb-3"
              name="id"
              placeholder="Enter ID"
              value={this.state.id}
              onChange={this.handleChange}
            />

            <button type="submit" className="btn btn-danger mt-3 shadow">
              Delete Excercise <i className="fa fa-send"></i>
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
