import React, { Component } from "react";
import axios from "axios";

export default class CreateExcercise extends Component {
  state = {
    duration: "",
    description: "",
    date: ""
  };

  handleChange = e => {
    e.preventDefault();
    // Code snippet
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { duration, description, date } = this.state;

    // Code snippet
    axios
      .post("http://localhost:5000/excercises/add", {
        duration,
        description,
        date
      })
      .then(res => console.log(res.data))
      .then(this.setState({ duration: "", description: "", date: "" }))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="mt-5">
          <div className="form-control-group">
            <input
              type="number"
              className="form-control mb-3"
              name="duration"
              placeholder="Enter Duration in minutes"
              value={this.state.duration}
              onChange={this.handleChange}
            />

            <input
              type="text"
              className="form-control mb-3"
              name="description"
              placeholder="Enter Description"
              value={this.state.description}
              onChange={this.handleChange}
            />

            <input
              type="date"
              className="form-control"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />

            <button type="submit" className="btn btn-success mt-3 shadow">
              Ceate Excercise <i className="fa fa-flag"></i>
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
