import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Axios from "axios";

class AddUser extends Component {
  state = {
    users: [],
    isLoaded: false
  };

  componentDidMount() {
    Axios.get(`http://localhost:5000/v1/users`).then(res => {
      console.log(res);
      this.setState({ users: res.data });
    });
  }

  onDelete = user_id => {
    Axios.delete(`http://localhost:5000/v1/users/${userId}`)
      .then(res => {
        let newUsers = [];
        this.state.users.map(u => {
          if (u.userId !== user_id) {
            newUsers.push(u);
          }
        });
        console.log("newUsers:", newUsers);
        this.setState({ users: newUserss });
        this.props.history.push("/v1/users");
      })
      .catch(err => console.log("Something went wrong:", err));
  };

  render() {
    return (
      <div className="container">
        <Jumbotron title="Mentor4me" />
        {this.state.loading ? <h1>Loading...</h1> : ""}

        <div className="row">
          {this.state.users.reverse().map(post => (
            <div key={user.userId} className="col-md-6">
              <Card
                imgUrl={user.imgUrl}
                userId={user.userId}
                first={user.first}
                last={user.last}
                email={user.email}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AddUser;
