import React from "react";
import { Link } from "react-router-dom";

const Card = ({ first, last, email, role, imgUrl, summary, bio, userId }) => (
  <div className="card">
    <img
      className="mt-5 mx-auto rounded-circle"
      src={imgUrl ? imgUrl : "/images/no+avatar.png"}
      alt={`${first} ${last}`}
      height="250"
      width="250"
    />
    <div className="email text-center">
      <Link to="#" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-envelope-o"> {`${email}`}</i>
      </Link>
    </div>
    <div className="card-body">
      <h1 className="card-title">{`${first} ${last}`}</h1>
      <h3 className="card-text">{summary}</h3>
      <h5 className="card-text">{bio}</h5>
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
