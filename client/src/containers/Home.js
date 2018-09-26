import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div
        className="container text-center m-10 p-10 mt-20 text-dark"
        style={{ height: "75%" }}
      >
        <Jumbotron title="FIND A MENTOR-4-ME" className="jumbotron text-dark">
          <h5 className="text-center mt-80">
            We are so glad that you are here! The first step for you is to look
            for a mentor.
          </h5>
          <p>
            Mentor4me is an on-demand marketplace for top software engineers,
            developers, consultants, programmers, and tutors. Learn from expert
            mentors with team training & coaching experiences.{" "}
          </p>

          <NavLink className="btn btn-lg btn-danger" to="/mentors">
            Find a mentor
          </NavLink>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
