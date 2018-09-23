import React from "react";
import { Link } from "react-router-dom";

const Card = ({ first, last, role, imgUrl, summary, bio, userId }) => (
  <div className="card">
    <img
      className="mt-5 mx-auto rounded-circle"
      src={imgUrl ? imgUrl : "/images/no-avatar.png"}
      alt={`${first} ${last}`}
      height="250"
      width="250"
    />
    <div className="card-body">
      <h5 className="card-title">{`${first} ${last}`}</h5>
      <p className="card-text">{summary}</p>
      <p className="card-text">{bio}</p>
      {/* <Link to={`/mentor/${userId}/appt`} className="btn btn-primary">
        Book Appointment?
      </Link>

      <Link to="/mentors" className="btn btn-outline-primary ml-3">
        Back
      </Link> */}
    </div>
  </div>
);

export default Card;
