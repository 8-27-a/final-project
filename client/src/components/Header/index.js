import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ brand }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <NavLink className="navbar-brand" to="/">
        {brand}
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample07"
        aria-controls="navbarsExample07"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample07">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/mentor">
              Find a mentor
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/student">
              Student
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/community">
              Community
            </NavLink>
          </li>
          {localStorage.getItem("JWT") ? (
            <React.Fragment>
              <li className="nav-item">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    localStorage.removeItem("JWT");
                    console.log("User logged out");
                  }}
                >
                  Log Out
                </button>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li className="nav-item">
                <NavLink to="/login" className="btn btn-outline-primary mr-3">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="btn btn-primary mr-3">
                  Sign Up
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
