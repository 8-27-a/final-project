import React, { Component } from "react";
import Axios from "axios";
import Card from "../components/Card";
import List from "../components/List";

class Mentor extends Component {
  state = {
    mentors: [],
    isLoaded: false
  };

  componentDidMount = () => {
    Axios.get("http://localhost:5000/v1/mentors").then(res => {
      console.log(res);
      this.setState({ mentors: res.data });
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>Find a mentor</h3>

          {this.state.mentors.reverse().map(mentor => (
            <div className="col-md-12" key={mentor.userId}>
              <List
                imgUrl={mentor.imgUrl}
                userId={mentor.userId}
                first={mentor.first}
                last={mentor.last}
                email={mentor.email}
              />
              {/* <h3>{mentor.first + " " + mentor.last}</h3> */}
              {/* <Card
                imgUrl={mentor.imgUrl}
                userId={mentor.userId}
                first={mentor.first}
                last={mentor.last}
                email={mentor.email}
              /> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Mentor;
