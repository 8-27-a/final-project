import React from "react";

const Appointment = ({ onChange, onSubmit, data, props }) => (
  <form>
    <div className="form-group">
      <h2 className="text-center">Create an Appointment</h2>
    </div>
    <div className="form-group">
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        name="date"
        className="form-control"
        value={data.date}
        onChange={onChange}
      />
      {/* {props.errors.date && (
        <small className="text-danger">{props.errors.date}</small>
      )} */}
    </div>
    <div className="form-group">
      <label htmlFor="time">Time</label>
      <input
        type="time"
        id="time"
        name="time"
        className="form-control"
        value={data.time}
        onChange={onChange}
      />
      {/* {props.errors.time && (
        <small className="text-danger">{props.errors.time}</small>
      )} */}
    </div>
    <div className="form-group">
      <label htmlFor="time">Comment</label>
      <textarea
        id="comment"
        name="comment"
        className="form-control"
        value={data.comment}
        onChange={onChange}
      />
    </div>
    <button type="submit" className="btn btn-secondary mt-5" onClick={onSubmit}>
      SUBMIT APPOINTMENT
    </button>
    {/* {!!props.errors.global && (
        <div className="alert alert-danger">{props.errors.global}</div>
      )} */}
  </form>
);

export default Appointment;
