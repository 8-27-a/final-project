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
    console.log("mentor", mentor);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Card
              imgUrl={mentor.imgUrl}
              userId={mentor.userId}
              first={mentor.firstName}
              last={mentor.lastName}
              email={mentor.email}
              summary={mentor.summary}
              bio={mentor.bio}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Mentor;
