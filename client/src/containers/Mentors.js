import React, { Component } from "react";
import Axios from "axios";
import List from "../components/List";
import { API_URL } from "../backend_api";

class Mentors extends Component {
  state = {
    mentors: [],
    Profiles: [],
    isLoaded: false
  };

  componentDidMount = () => {
    Axios.get(`${API_URL}/mentors`).then(res => {
      console.log(res);
      this.setState({ mentors: res.data });
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="col-md-6">
          <form className="navbar-form" role="search">
            <div className="input-group add-on">
              <input
                type="text"
                className="form-control"
                style={{
                  backgroundColor: "rgba(0,0,0,.1",
                  color: "rgba(255,255,255,1)"
                }}
                placeholder="Search"
                name="srch-term"
                id="srch-term"
              />
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i class="fa fa-search" />
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* <h3>Find a mentor</h3> */}
        {this.state.mentors.map(mentor => (
          <div className="col-md-12" key={mentor.userId}>
            <List
              imgUrl={mentor.image}
              userId={mentor.userId}
              first={mentor.firstName}
              last={mentor.lastName}
              email={mentor.email}
              summary={mentor.summary}
              bio={mentor.bio}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Mentors;
