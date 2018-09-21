import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <Jumbotron
          title="It's time to look for a mentor!"
          className="text-center"
        >
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
      </div>
    );
  }
}

export default Home;
