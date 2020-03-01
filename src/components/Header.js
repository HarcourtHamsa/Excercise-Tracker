import React, { Component } from "react";

import img from "../images/download1.png";
import Effect from "./Effect";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <div className="jumbotron bg-light" style={{ height: "450px" }}>
          <div className="container">
            <Effect />
            <img
              src={img}
              className="float-right"
              alt="design"
              width="200px"
              height="200px"
            />
            <div>
              <button
                type="button"
                className="btn btn-success pl-3 pr-3 shadow mb-3"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#invoiceModal"
              >
                Let's collaborate!
              </button>
            </div>
          </div>
        </div>

        {/* Ivoice Modal */}
        <div
          class="modal fade"
          id="invoiceModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="invoiceModalTitle">
                  Get in touch
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
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
                    <textarea
                      className="form-control mb-3"
                      placeholder="Enter Message"
                    />
                    <button className="btn btn-success btn-block shadow mt-2">
                      Message me <i className="fa fa-send"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div class="modal-footer"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
