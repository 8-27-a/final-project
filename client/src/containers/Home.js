import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import Register from "../containers/Register";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <Jumbotron title="Mentor4me">
          <h3>
            Find your tutor and get the help you need to become a successful
            programmer!
          </h3>
          <p>
            Mentor4me is an on-demand marketplace for developers, consultants,
            programmers, and tutors. Learn from expert mentors with team
            training & coaching experiences.
          </p>
        </Jumbotron>
        {/* <Register /> */}
        <div className="col-md-4 mx-auto">
          <a className="btn btn-info mx-auto" href="/register" role="button">
            Sign up today
          </a>
          <a className="btn btn-info mx-auto" href="/login" role="button">
            Login
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
