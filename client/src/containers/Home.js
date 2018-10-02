import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      // <div className="container text-center text-dark">
      <div className="home-image">
        <div className="home-text">
          <h1 className="title">FIND A MENTOR-4-ME</h1>
          <h3 className="subtitle">
            We are so glad that you are here! The first step for you is to look
            for a mentor.
          </h3>
          <h5 className="paragraph">
            Mentor4me is an on-demand marketplace for top software engineers,
            developers, consultants, programmers, and tutors. Learn from expert
            mentors with team training & coaching experiences.
          </h5>
          <Link className="btn btn-lg btn-info" to="/mentors">
            Find a mentor
          </Link>
        </div>
      </div>
      // </div>
    );
  }
}

export default Home;
