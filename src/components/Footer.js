import React from "react";
import Logo from "./Logo";

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
              <div>
                 <a href="https://www.github.io/harcourthamsa"><i className="fa fa-github p-2"></i></a> 
                 <a href="https://www.twitter.io/harcourthamsa"><i className="fa fa-twitter p-2"></i></a> 
                 <a href="https://www.twitter.io/harcourthamsa"><i className="fa fa-linkedin p-2"></i></a> 
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
