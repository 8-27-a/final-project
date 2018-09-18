import React, { Component } from "react";
import Axios from "axios";
import Card from "../components/Card";
import { API_URL } from "../backend_api";

class Mentor extends Component {
  state = {
    mentor: {},
    profile: {},
    isLoaded: false
  };

  componentDidMount = () => {
    Axios.get(`${API_URL}/mentors/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
      this.setState({ mentor: res.data });
    });
  };

  render() {
    const { mentor } = this.state;
    console.log("mentor", this.state.mentor);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3>{mentor.first + " " + mentor.last}</h3>
            <Card
              imgUrl={mentor.imgUrl}
              userId={mentor.userId}
              first={mentor.first}
              last={mentor.last}
              email={mentor.email}
              summary={mentor.Profile.summary}
              bio={mentor.Profile.bio}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Mentor;
