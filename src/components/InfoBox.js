import React from "react";

export default function InfoBox() {
  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        className="alert alert-dark alert-dismissible fade show "
        role="alert"
      >
        Thank you for dropping by. Please don't forget to say hi, It means a lot to me <i className="fa fa-heart text-danger"></i>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}
