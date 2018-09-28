import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Card from "../components/Card";
import { API_URL } from "../backend_api";

class Mentor extends Component {
  state = {
    mentor: {},
    Profile: {},
    isLoaded: false
  };
  componentWillMount = () => {
    if (!localStorage.getItem("JWT")) {
      this.props.history.push("/login");
    }
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
      <div className="container pt-15" style={{ minHeight: 800 }}>
        <div className="row">
          <div className="col-md-12">
            <Card
              userId={mentor.userId}
              first={mentor.firstName}
              last={mentor.lastName}
              imgUrl={mentor.image}
              email={mentor.email}
              summary={mentor.summary}
              bio={mentor.bio}
            />
          </div>
          <Link
            to={`/mentor/${this.props.match.params.id}/appt`}
            className="btn btn-secondary mt-2 ml-3"
          >
            Book Appointment
          </Link>
          <Link to="/mentors" className="btn btn-outline-secondary mt-2 ml-5">
            Back
          </Link>
          <Link to="/dashboard" className="btn btn-secondary ml-5 mt-2">
            Dashboard
          </Link>
        </div>
      </div>
    );
  }
}

export default Mentor;
