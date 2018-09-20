import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import decode from "jwt-decode";

class Header extends Component {
  state = {
    isAuth: false,
    token: null,
    avatarUrl: null
  };

  componentWillMount = () => {
    const jwt = localStorage.getItem("JWT");
    if (jwt) {
      const payload = decode(jwt);
      this.setState({ isAuth: true, token: jwt, avatarUrl: payload.avatar });
    }
  };

  logOut = () => {
    localStorage.removeItem("JWT");
    this.setState({ isAuth: false });
  };

  render() {
    const { brand } = this.props;

    // const { avatar: avatarUrl } = decode(localStorage.getItem("JWT"));
    const avatarUrl = "";
    return (
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
                <NavLink className="nav-link" to="/mentors">
                  Find a mentor
                </NavLink>
              </li>
              {localStorage.getItem("JWT") ? (
                <React.Fragment>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        height="30"
                        className="rounded-circle"
                        src={
                          this.state.avatarUrl
                            ? this.state.avatarUrl
                            : "/images/no-avatar.png"
                        }
                        alt=""
                      />
                    </a>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/dashboard">
                        Dashboard
                      </Link>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <div className="dropdown-divider" />
                      {/* <button className="dropdown-item" onClick={this.logOut}>
                        Log Out
                      </button> */}
                      <NavLink
                        to="/"
                        className="btn btn-outline-primary ml-3"
                        onClick={() => this.logOut()}
                      >
                        Log Out
                      </NavLink>
                    </div>
                  </li>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="btn btn-outline-primary mr-3"
                    >
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
  }
}

export default Header;
