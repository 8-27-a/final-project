import React, { Component } from "react";

class AppointmentForm extends Component {
  // state = {
  //   date: null,
  //   focused: null
  // };

  // handleDateChange = date => {
  //   console.log("date", new Date(date).getFullYear());
  // };

  render() {
    return (
      <form>
        <div className="form-group">
          <h2 className="text-center mb-3">Create an Appointment</h2>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            // value={this.state.date}
            // onChange={props.onChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            className="form-control"
            // value={this.state.time}
            // onChange={props.onChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Comment</label>
          <textarea
            id="comment"
            name="comment"
            className="form-control"
            // value={this.state.comment}
            // onChange={props.onChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          // onClick={this.handleSubmit}
        >
          SUBMIT APPOINTMENT
        </button>
      </form>
    );
  }
}

export default AppointmentForm;
