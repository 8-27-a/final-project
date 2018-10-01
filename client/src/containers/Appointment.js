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
    const errors = this.validate({ time });
    this.setState({ errors });

    const newAppt = {
      date: `${date} ${time}:00`,
      time,
      comment,
      mentorId,
      studentId
    };

    if (Object.keys(errors).length === 0) {
      Axios.post(`${API_URL}/appointments`, newAppt).then(({ data: appt }) => {
        if (appt.success) {
          this.props.history.push("/dashboard");
        } else {
          this.setState({
            errors: { ...this.state.errors, global: appt.data.message }
          });
          console.log("errors", errors);
        }
      });
    }
  };

  validate = data => {
    const errors = {};
    const now = new Date().toLocaleString();

    // if (data.date != null || (data.date != " " && now.isAfter(data.date)))
    //   errors.date = "Please choose a date after today";
    if (!data.date) errors.date = "Please choose a date";
    if (!data.time) errors.time = "Please choose a time and am/pm ";

    return errors;
  };

  render() {
    return (
      <div
        className="bg-navy text-white py-5"
        style={{ minHeight: 750, marginTop: 20 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto mt-10">
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
