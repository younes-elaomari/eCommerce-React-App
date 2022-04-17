import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer text-center bg-light py-5">
        <h6 className="display-6">
          MacBook Pro<span className="color-primary">.</span>
        </h6>
        <h6 className="fs-5 fw-light">&copy; Copyright 2018 MacBook Pro.</h6>
      </div>
    );
  }
}

export default Footer;
