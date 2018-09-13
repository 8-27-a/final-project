import React from "react";

const Jumbotron = props => (
  <div className="jumbotron">
    <h1>{props.title}</h1>
    {props.children}
  </div>
);

export default Jumbotron;
