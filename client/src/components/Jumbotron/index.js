import React from "react";

const Jumbotron = props => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  </div>
);

export default Jumbotron;
