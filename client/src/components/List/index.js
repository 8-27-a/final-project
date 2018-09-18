import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const List = ({ userId, first, last, imgUrl, summary, bio }) => (
  <div className="list-group">
    <Link
      to={`/mentors/${userId}`}
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="d-flex w-100 justify-content-between">
        <div className="row">
          <Image
            className="card-img-top img-fluid col-md-3"
            height="200"
            src={imgUrl}
            circle
            alt="Card image"
          />
          <div className="col-md-6">
            <h3 className="mb-1">{first + " " + last}</h3>
            <h3 className="mb-1">skills</h3>
            <small>{summary}</small>
            <h4 className="mb-1">bio</h4>
            <small>{bio}</small>
          </div>
          <div className="col-md-3">
            <Link to={`/mentors/${userId}`} className="btn btn-primary">
              More info
            </Link>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default List;
