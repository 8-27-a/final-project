import React from "react";

const Jumbotron = props => (
  <div
    className="jumbotron jumbotron-fluid"
    style={{ backgroundImage: `url(require("images/tech4.gif"))` }}
  >
    <div className="container">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  </div>
);

export default Jumbotron;
