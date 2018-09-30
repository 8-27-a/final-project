import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import Card from "../components/Card";
import { API_URL } from "../backend_api";

class Student extends Component {
  state = {
    student: {},
    Profile: {},
    isLoaded: false
  };

  componentDidMount = () => {
    Axios.get(`${API_URL}/students/${this.props.match.params.id}`).then(res => {
      console.log(res.data);
      this.setState({ student: res.data });
    });
  };

  render() {
    const { student } = this.state;
    console.log("student", student);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Card
              userId={student.userId}
              first={student.firstName}
              last={student.lastName}
              imgUrl={student.image}
              email={student.email}
              summary={student.summary}
              bio={student.bio}
            />
          </div>
          <Link to="/profile" className="btn btn-secondary mt-2 ml-3">
            Back
          </Link>
          <Link to="/" className="btn btn-outline-secondary mt-2 ml-3">
            Home
          </Link>
          <Link to="/dashboard" className="btn btn-info ml-3 mt-2">
            Dashboard
          </Link>
        </div>
      </div>
    );
  }
}

export default Student;
