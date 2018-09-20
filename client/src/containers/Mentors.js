import React, { Component } from "react";
import Axios from "axios";
import List from "../components/List";
import { API_URL } from "../backend_api";

class Mentor extends Component {
  state = {
    mentors: [],
    profiles: [],
    isLoaded: false
  };

  componentDidMount = () => {
    Axios.get(`${API_URL}/mentors`).then(res => {
      console.log(res);
      this.setState({ mentor: res.data });
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
                imgUrl={mentor.image}
                userId={mentor.userId}
                first={mentor.firstName}
                last={mentor.lastName}
                email={mentor.email}
                summary={mentor.Profile.summary}
                bio={mentor.Profile.bio}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Mentor;
