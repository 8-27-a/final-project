import React, { Component } from "react";
import decode from "jwt-decode";
import Axios from "axios";
import { API_URL } from "../backend_api";
import "./Dashboard.css";

class Dashboard extends Component {
  state = {
    appointments: [],
    role: "",
    errors: {}
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
  // --------------------------

  // handleApprove = e => {
  //   e.preventDefault();

  //     Axios.put(`${API_URL}/appointment/${apptId}`, {
  //       status,
  //       comment
  //     }).then(appt = {
  //       if (res.data.updated){
  //         this.setState({ success: "Appointment Accepted"}
  //       })
  //     }

  //     );
  //   }
  // };

  // ---------
  render() {
    console.log("state", this.state);

    return (
      <div className="container bg-light">
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
                {this.state.role === "mentor" && (
                  <td scope="col">
                    <button
                      className="btn btn-danger"
                      onClick={this.handleDecline}
                    >
                      Decline
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={this.handleAccept}
                    >
                      Accept
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;
