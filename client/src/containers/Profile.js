import React, { Component } from "react";
import Axios from "axios";
import ProfileForm from "../components/Forms/Profile";
import { API_URL } from "../backend_api";
import decode from "jwt-decode";

class Profile extends Component {
  state = {
    first: "",
    last: "",
    email: "",
    password: "",
    password2: "",
    summary: "",
    bio: "",
    errors: {},
    success: ""
  };

  handleChange = e => {
    console.log("changed", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userId } = decode(localStorage.getItem("JWT"));

    const {
      first,
      last,
      email,
      password,
      password2,
      bio,
      summary
    } = this.state;
    const errors = this.validate({ email, password, password2 });
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      Axios.put(`${API_URL}/mentors/${userId}`, {
        first,
        last,
        email,
        password,
        bio,
        summary
      }).then(user => {
        if (user.data.updated) {
          this.setState({ success: "Your changes has been saved." });
        } else {
          this.setState({
            errors: { ...this.state.errors, global: user.data.message }
          });
        }
      });
    }
  };

  validate = data => {
    const errors = {};

    if (!data.email) errors.email = "Enter email";
    if (data.password !== data.password2)
      errors.password = "Password does not match";

    return errors;
  };

  componentWillMount = () => {
    if (!localStorage.getItem("JWT")) {
      this.props.history.push("/login");
    }
  };

  componentDidMount = () => {
    const { userId } = decode(localStorage.getItem("JWT"));
    Axios.get(`${API_URL}/mentors/${userId}`).then(profile => {
      console.log("profile", profile);
      const { firstName, lastName, email } = profile.data;
      this.setState({
        first: firstName,
        last: lastName,
        email,
        summary: profile.data.summary,
        bio: profile.data.bio
      });
    });
  };

  render() {
    const { userId } = decode(localStorage.getItem("JWT"));

    return (
      <div className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <ProfileForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                errors={this.state.errors}
                success={this.state.success}
                first={this.state.first}
                last={this.state.last}
                role={this.state.role}
                email={this.state.email}
                password={this.state.password}
                password2={this.state.password2}
                summary={this.state.summary}
                bio={this.state.bio}
                userId={userId}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
