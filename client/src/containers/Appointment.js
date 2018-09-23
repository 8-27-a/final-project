import React, { Component } from "react";
import Axios from "axios";
import AppointmentForm from "../components/Forms/Appointment";
import { API_URL } from "../backend_api";

console.log("API_URL", API_URL);

class Appointment extends Component {
  state = {
    data: {
      date: "",
      time: "",
      mentorId: 2,
      userId: 1,
      comment: ""
    },
    errors: {}
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("mentorId", this.state.data.mentorId);

    const newAppt = {
      date: this.state.date,
      time: this.state.time,
      comment: this.state.comment
    };
    console.log(newAppt);
  };

  render() {
    return (
      <div className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <AppointmentForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                errors={this.state.errors}
                data={this.state.data}
                mentorId={this.state.mentorId}
                studentId={this.state.studentId}
                comment={this.state.comment}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
