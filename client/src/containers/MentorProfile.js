import React, { Component } from "react";
import Axios from "axios";
import Card from "../components/Card";

class MentorProfile extends Component {
  state = {
    mentors: [],
    isLoaded: false
  };

  componentDidMount = () => {
    Axios.get(
      `http://localhost:5000/v1/mentors/${this.props.match.params.post_id}`
    ).then(res => {
      console.log(res.data);
      this.setState({ mentors: res.data });
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.mentors.map(mentor => (
            <div className="col-md-12" key={mentor.userId}>
              <h3>{mentor.first + " " + mentor.last}</h3>
              <Card
                imgUrl={mentor.imgUrl}
                userId={mentor.userId}
                first={mentor.first}
                last={mentor.last}
                email={mentor.email}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MentorProfile;
