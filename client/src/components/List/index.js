import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const List = ({ userId, first, last, email, imgUrl, role }) => (
  <div className="list-group">
    <Link
      to="#"
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="d-flex w-100 justify-content-between">
        <div className="row">
          <Image
            className="card-img-top img-fluid col-md-3"
            width="50"
            height="465"
            src={imgUrl}
            circle
            alt="Card image"
          />
          <div className="col-md-6">
            <h5 className="mb-1">{first + " " + last}</h5>
            <h3 className="mb-1">skills</h3>
            <small>{role}</small>
            <small>bio</small>
          </div>
          <div className="col-md-3">
            <Link to={`/mentor/${userId}`} className="btn btn-primary">
              More info
            </Link>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default List;
