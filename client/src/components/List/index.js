import React from "react";
import { Link } from "react-router-dom";

const List = ({ userId, first, last, imgUrl, summary, bio }) => (
  <div className="list-group rounded mb-3">
    <Link
      to={`/mentor/${userId}`}
      className="list-group-item list-group-item-action"
    >
      <div className="row">
        <div className="col-md-4">
          <img
            className="rounded-circle d-block w-100"
            src={imgUrl ? imgUrl : "/images/no+avatar.png"}
            alt={`${first} ${last}`}
          />
        </div>
        <div className="col-md-8">
          <h1>{`${first} ${last}`}</h1>
          <h3>{summary}</h3>
          <h>{bio}</h>
        </div>
        {/* <div className="col-md-3">
          <Link to={`/mentor/${userId}`} className="btn btn-secondary">
            Mentor Profile
          </Link>
        </div> */}
      </div>
    </Link>
  </div>
);

export default List;
