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
        <div className="row">
          <form className="form-inline ml-3 mb-3 mr-sm-2 w-100">
            <i className="fa fa-search position-absolute" />
            <input
              className="form-control pl-4 w-100 mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            {/* <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            /> */}
          </form>
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
      </div>
    );
  }
}

export default Mentors;
