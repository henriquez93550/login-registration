import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav className="nav-brand">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col-md-5"
            >
              <i className="material-icons">code</i>
              MERN
            </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
