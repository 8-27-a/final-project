import React, { Component } from "react";
import decode from "jwt-decode";
import Axios from "axios";
import { API_URL } from "../backend_api";

class Dashboard extends Component {
  state = {
    appointments: [],
    role: ""
  };
  componentWillMount = () => {
    if (!localStorage.getItem("JWT")) {
      this.props.history.push("/login");
    }
  };

  componentDidMount = () => {
    const { userId, role } = decode(localStorage.getItem("JWT"));
    Axios.get(`${API_URL}/appointments/${userId}`).then(({ data: appts }) =>
      this.setState({ appointments: appts, role })
    );
  };

  render() {
    console.log("state", this.state);

    return (
      <div className="container bg-white">
        <h1>Dashboard</h1>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">
                {this.state.role === "mentor" ? "Student" : "Mentor"}
              </th>
              <th scope="col">Status</th>
              {this.state.role === "mentor" && <th scope="col">Action</th>}
            </tr>
          </thead>
          <tbody>
            {this.state.appointments.map(appt => (
              <tr>
                <th scope="row">-</th>
                <td>{new Date(appt.date).toLocaleString()}</td>
                <td>
                  {appt.User.first} {appt.User.last}
                </td>
                <td>{appt.status}</td>
              {this.state.role === "mentor" && <td scope="col"><button className="btn btn-danger">Decline</button><button className="btn btn-success">Approve</button></td>}

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;
