import React from "react";

const AppointmentForm = ({ onChange, onSubmit, data, errors }) => (
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
        value={data.date}
        onChange={onChange}
      />
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

    <button type="submit" className="btn btn-primary" onClick={onSubmit}>
      SUBMIT APPOINTMENT
    </button>
  </form>
);

export default AppointmentForm;
