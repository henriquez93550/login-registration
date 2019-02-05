import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md">
        <div className="container">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <Link className="brand navbar-brand title" to="/home">
            Web Dev Point
          </Link>
          <Link className="navbar-brand text" to="/html">
            HTML
          </Link>
          <Link className="navbar-brand text" to="/css">
            CSS
          </Link>
          <Link className="navbar-brand text" to="/javascript">
            JAVASCRIPT
          </Link>
          <Link className="navbar-brand text" to="/bootstrap">
            BOOTSTRAP
          </Link>
          <Link className="navbar-brand text" to="/node">
            NODE.JS
          </Link>
          <Link className="navbar-brand text" to="/react">
            REACT
          </Link>

          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              {/* <form className="form-inline form">
                <input className="form-control col-7" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success col-4" type="submit">Search</button>
                </form> */}

              <li className="nav-item">
                <Link className="nav-link" id="login-page" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="forum-page" to="/">
                  Forum
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
