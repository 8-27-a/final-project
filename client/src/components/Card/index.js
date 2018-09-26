import React from "react";

const Card = ({ first, last, email, role, imgUrl, summary, bio, userId }) => (
  <div
    className="card card-fluid mt-5"
    style={{
      width: "100%",
      backgroundColor: "rgba(230, 230, 230, .2)",
      color: "white"
    }}
  >
    <h1 className="card-title" ml-3>{`${first} ${last}`}</h1>
    <img
      className="mx-auto rounded-circle"
      src={imgUrl ? imgUrl : "/images/no+avatar.png"}
      alt={`${first} ${last}`}
      height="250"
      width="250"
    />
    <div className="email text-center">
      <a href="mailto:`${email}`" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-envelope-o"> {`${email}`}</i>
      </a>
    </div>
    <div
      className="card-body"
      style={{ backgroundColor: "white", color: "black" }}
    >
      <h3 className="card-text">{summary}</h3>
      <h5 className="card-text">{bio}</h5>
    </div>
  </div>
);

export default Card;
