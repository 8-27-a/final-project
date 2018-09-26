import React, { Component } from "react";
import decode from "jwt-decode";
import Axios from "axios";
import { API_URL } from "../backend_api";
import AppointmentForm from "../components/Forms/Appointment";

console.log("API_URL", API_URL);

class Appointment extends Component {
  state = {
    data: {
      date: "",
      time: "",
      comment: "",
      mentorId: null,
      studentId: null
    },
    errors: {}
  };

  componentDidMount = () => {
    const { userId } = decode(localStorage.getItem("JWT"));
    this.setState({
      data: {
        ...this.state.data,
        mentorId: this.props.match.params.id,
        studentId: userId
      }
    });
  };

  handleChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { date, time, comment, mentorId, studentId } = this.state.data;

    const newAppt = {
      date: `${date} ${time}:00`,
      time,
      comment,
      mentorId,
      studentId
    };

    Axios.post(`${API_URL}/appointments`, newAppt).then(({ data: appt }) => {
      if (appt.success) {
        this.props.history.push("/dashboard");
      }
    });
  };

  render() {
    console.log("data", this.state.data);
    console.log("props", this.props);
    return (
      <div className="bg-navy text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <AppointmentForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                errors={this.state.errors}
                data={this.state.data}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
