import React from "react";
import Logo from "./Logo";
import MediaIcons from "./MediaIcons";

const Footer = () => {
  return (
    <div className="bg-light p-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <Logo />
            <p>Email: hamsaharcourt@gmail.com</p>
            <p>Phone: +234 807 533 9205</p>
          </div>
          <div className="col-xl-4">
            <p className="h5">Social Links</p>
            <MediaIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
