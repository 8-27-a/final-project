import React, { Component } from "react";
import decode from "jwt-decode";

class Dashboard extends Component {
  componentWillMount = () => {
    if (!localStorage.getItem("JWT")) {
      this.props.history.push("/login");
    }
  };

  render() {
    const payload = decode(localStorage.getItem("JWT"));

    // console.log("payload", payload);

    return (
      <div>
        <h1>Dashboard</h1>
        {payload.role === "mentor" ? (
          <h1>I'm a mentor</h1>
        ) : (
          <h1>I'm a student</h1>
        )}
      </div>
    );
  }
}

export default Dashboard;
