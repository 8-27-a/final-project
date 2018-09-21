import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const List = ({ userId, first, last, imgUrl, summary, bio }) => (
  <div className="list-group ">
    <Link
      to={`/mentor/${userId}`}
      className="list-group-item list-group-item-action"
    >
      <div className="row">
        <div className="col-md-3">
          <img
            className="rounded-circle d-block w-100"
            src={imgUrl}
            alt={`${first} ${last}`}
          />
        </div>
        <div className="col-md-6">
          <h3 className="mb-4">{`${first} ${last}`}</h3>
          <h5 className="mb-2">{summary}</h5>
          <small>{bio}</small>
        </div>
        <div className="col-md-3">
          <Link to={`/mentor/${userId}`} className="btn btn-primary">
            Mentor Profile
          </Link>
        </div>
      </div>
    </Link>
  </div>
);

export default List;
