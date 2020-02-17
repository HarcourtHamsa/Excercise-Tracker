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

  render() {
    return (
      <div className="container">
        <h3 className="mb-3">All Excercises</h3>
        {this.state.Response.map(data => {
          return (
            <div key={data.id}>
              {data.desciption}
              <p>{data.date}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
