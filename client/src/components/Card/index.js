import React from "react";
import { Link } from "react-router-dom";

// const Card = ({ imgUrl, first, last, email }) => (
// const Card = () => (
// <div className="card">
//   <img className="card-img-top" src={imgUrl} alt="Card image cap">
//   <div className="card-body">
//     <h5 className="card-title">user first, and last name</h5>
//     <p className="card-text">user bio</p>
//     <Link to="#" className="btn btn-primary">Go somewhere</>
//   </div>
// </div>
// );
const Card = ({ userId, first, last, email, imgUrl, role }) => (
  <div className="card">
    <img className="card-img-top img-fluid" src={imgUrl} alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">{first + " " + last}</h5>
      <p className="card-text">{email}</p>
      <p className="card-text">{role}</p>

      {/* <Link to={`blog/update/${post_id}`} className="btn btn-primary"> */}
      <Link to="#" className="btn btn-primary">
        Book Appointment?
      </Link>
      {/* <button onClick={() => onDelete(post_id)} className="btn btn-danger ml-3">
        Delete
      </button> */}
    </div>
  </div>
);

export default Card;
