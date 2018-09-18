import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

const Card = ({ first, last, imgUrl, summary, bio }) => (
  <div className="card">
    <Image
      className="card-img-top img-fluid"
      src={imgUrl}
      circle
      alt="Card image"
    />
    <div className="card-body">
      <h5 className="card-title">{first + " " + last}</h5>
      <p className="card-text">
        {summary}
        {/* 15+ years, Full-stack Javascript Developer. I enjoy explaining */}
        {/* basics patiently, or move to advanced topics in my expertise anytime. */}
      </p>
      <p className="card-text">
        {bio}
        {/* BUILD & LEARN — one-on-one pair-coding learning experience with a
        mentor! Web development is my life, since 2002. For over decade I'm
        excited to work on the full stack of web sites and applications. With
        more focus on Front-end and Javascript full stack in recent years. My
        focus: ● HTML, CSS ● Javascript, ES6 ● ⚛ React, JSX, React-Router,
        Redux, Material-UI ● Firebase for Web: Database, Auth, Storage, Hosting,
        Functions ● jQuery, Backbone, Marionette ● AJAX, Axios, fetch ● async ●
        Git, Github ● npm, yarn ● Chrome DevTools ● CSS Frameworks, Bootstrap,
        Bulma, Foundation, Semantic-UI, SASS ● Handlebars ● NodeJS, ExpressJS,
        MongoDB ● Webpack, Browserify, Gulp, Bower, Require.js ● Jekyll ● */}
      </p>

      {/* <Link to={`blog/update/${post_id}`} className="btn btn-primary"> */}
      <Link to="#" className="btn btn-primary">
        Book Appointment?
      </Link>

      <Link to="/mentors" className="btn btn-primary">
        Back
      </Link>
    </div>
  </div>
);

export default Card;
