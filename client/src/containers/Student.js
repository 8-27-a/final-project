import React, { Component } from "react";
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
        </div>
      </div>
    );
  }
}

export default Student;
