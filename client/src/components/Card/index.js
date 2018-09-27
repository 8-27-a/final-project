import React from "react";
import { SSL_OP_TLS_ROLLBACK_BUG } from "constants";

const Card = ({ first, last, email, role, imgUrl, summary, bio, userId }) => (
  <div
    className="card card-fluid mt-5"
    style={{
      backgroundColor: "rgba(230, 230, 230, .5)"
    }}
  >
    <h1
      className="card-title"
      style={{
        color: "hsl(0,0%,13%)",
        fontWeight: 700,
        paddingLeft: 22,
        paddingTop: 10
      }}
    >{`${first} ${last}`}</h1>
    <img
      className="mx-auto rounded-circle"
      src={imgUrl ? imgUrl : "/images/no-avatar.png"}
      alt={`${first} ${last}`}
      height="250"
      width="250"
    />
    <div
      className="email text-center"
      style={{ paddingTop: 10, paddingBottom: 5 }}
    >
      <a href="mailto:`${email}`" target="_blank" rel="noopener noreferrer">
        <i className="fa fa-envelope-o"> {`${email}`}</i>
      </a>
    </div>
    <div
      className="card-body"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.7"
      }}
    >
      <h3
        className="card-text"
        style={{
          color: "hsl(0, 0%, 15%)",
          fontWeight: 500,
          paddingBottom: 15
        }}
      >
        {summary}
      </h3>
      <h4
        className="card-text"
        style={{
          color: "hsl(0, 0%, 45%)",
          paddingBottom: 85
        }}
      >
        {bio}
      </h4>
    </div>
  </div>
);

export default Card;
