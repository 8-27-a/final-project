import React from "react";

const Card = ({ first, last, email, role, imgUrl, summary, bio, userId }) => (
  <div
    className="card"
    style={{
      marginTop: 10
    }}
  >
    <h2
      className="card-title text-dark"
      style={{
        // color: "rgba(255,255,255, 1)",
        fontWeight: 700,
        paddingLeft: 22,
        paddingTop: 10
      }}
    >{`${first} ${last}`}</h2>
    <img
      className="mx-auto rounded-circle"
      src={imgUrl ? imgUrl : "/images/no-avatar.png"}
      alt={`${first} ${last}`}
      height="275"
      width="275"
    />
    <div
      className="email text-center"
      style={{
        paddingTop: 10,
        paddingBottom: 5,
        color: "rgba(49, 205, 232, 1)"
        // backgroundColor: "rgba(255, 255, 255, 0.7)"
      }}
    >
      <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-envelope-o"> {`${email}`}</i>
      </a>
    </div>
    <div
      className="card-body"
      style={{
        backgroundColor: "rgba(49, 205, 232, .4)"
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
      <h5
        className="card-text"
        style={{
          color: "hsl(0, 0%, 45%)",
          paddingBottom: 70
        }}
      >
        {bio}
      </h5>
    </div>
  </div>
);

export default Card;
