import React, { Component } from "react";
import axios from "axios";

export default class ExcerciseList extends Component {
  state = {
    Response: []
  };

  callApi() {
    axios
      .get("http://localhost:5000/excercises/")
      .then(res => this.setState({ Response: res.data }));
  }

  componentDidMount() {
    this.callApi();
  }

  getId = e => {
    console.log(e.target);
  };

  render() {
    return (
      <div className="container">
        <h3 className="mb-5 mt-3">Logged Excercises</h3>
        <table className="table">
          <thead className="thread-light">
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Duration</th>
            </tr>
          </thead>
          {this.state.Response.map(data => {
            return (
              <tbody key={data.id} onClick={this.getId}>
                <td>{data.id}</td>
                <td>{data.desciption}</td>
                <td>{data.duration} minutes</td>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}
