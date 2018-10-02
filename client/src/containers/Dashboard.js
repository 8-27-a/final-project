import React, { Component } from "react";
import decode from "jwt-decode";
import Axios from "axios";
import { API_URL } from "../backend_api";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  state = {
    comment: "",
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
    this.fetchAppts();
  };

  handleReply = (apptId, oldComment) => {
    const { first } = decode(localStorage.getItem("JWT"));

    Axios.put(`${API_URL}/appointment/${apptId}`, {
      comment: `
      ${first}: ${this.state.comment}\n
      \n
      -->
      ${oldComment}
      `
    }).then(res => {
      if (res.data.updated) {
        this.fetchAppts();
        this.setState({ comment: "" });
      }
    });
  };

  fetchAppts = () => {
    const { userId, role } = decode(localStorage.getItem("JWT"));
    Axios.get(`${API_URL}/appointments/${userId}`).then(({ data: appts }) =>
      this.setState({ appointments: appts, role })
    );
  };

  handleStatus = (apptId, status) => {
    //e.preventDefault();

    Axios.put(`${API_URL}/appointment/${apptId}`, {
      status
    }).then(res => {
      if (res.data.updated) {
        this.fetchAppts();
      }
    });
  };

  render() {
    console.log("appts", this.state.appointments);
    return (
      <div
        className="container text-center"
        style={{
          minHeight: 800,
          marginTop: 55,
          backgroundColor: "rgb(230, 230, 230, .8)"
        }}
      >
        <span>
          <h2 className="text-dark pt-2">Dashboard </h2>
          <h6>newest appointment on top</h6>
        </span>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col" className="d-none d-md-block">
                {this.state.role === "mentor" ? "Student" : "Mentor"}
              </th>
              <th scope="col">Comments</th>
              <th scope="col">Status</th>
              {this.state.role === "mentor" && <th scope="col">Action</th>}
            </tr>
          </thead>
          <tbody>
            {this.state.appointments.length > 0 ? (
              this.state.appointments.map((appt, k) => {
                return (
                  <tr key={k}>
                    <th scope="row">{k + 1}</th>
                    {/* <td>{new Date(appt.date).toLocaleString()}</td> */}
                    <td>
                      {new Date(appt.date)
                        .toLocaleString()
                        .slice(0, 10)
                        .replace(",", " ")}
                    </td>
                    <td>
                      {new Date(appt.date)
                        .toLocaleString()
                        .replace(/:\d{2}\s/, " ")
                        .slice(11, 20)}
                    </td>
                    <td className="d-none d-md-block">
                      <Link
                        to={`/${appt.User.role}/${appt.User.userId}`}
                        className="btn btn-link"
                      >
                        {appt.User.first} {appt.User.last}
                      </Link>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        data-toggle="modal"
                        data-target={`#exampleModal${appt.apptId}`}
                      >
                        <i className="fa fa-comments" />
                      </button>

                      <div
                        className="modal fade"
                        id={`exampleModal${appt.apptId}`}
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                {appt.User.first} {appt.User.last}
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <p>{appt.comment}</p>
                              <textarea
                                className="form-control"
                                onChange={e =>
                                  this.setState({ comment: e.target.value })
                                }
                                value={this.state.comment}
                              />
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                onClick={() =>
                                  this.handleReply(appt.apptId, appt.comment)
                                }
                                className="btn btn-info"
                              >
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{appt.status}</td>
                    {this.state.role === "mentor" && (
                      <td>
                        <button
                          className="btn btn-info"
                          onClick={() =>
                            this.handleStatus(appt.apptId, "accepted")
                          }
                        >
                          Accept
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            this.handleStatus(appt.apptId, "rejected")
                          }
                        >
                          Decline
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7">
                  <div className="alert alert-warning">
                    There are currently no appointments.
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;
