import React, { Component } from "react";
import Axios from "axios";
import SignUp from "../components/Forms/SignUp";
import { API_URL } from "../backend_api";

class Register extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
    first: "",
    last: "",
    role: "",
    errors: {}
  };

  handleChange = e => {
    console.log("changed", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password, password2, first, last, role } = this.state;
    const errors = this.validate({ email, password, password2 });
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      Axios.post(`${API_URL}/signup`, {
        email,
        password,
        first,
        last,
        role
      }).then(user => {
        if (user.status === 201) {
          this.props.history.push("/login");
        } else {
          this.setState({
            errors: { ...this.state.errors, global: user.data }
          });
        }
        // console.log(res.data);
        // this.setState({ email, password });
      });
    }
  };

  // Axios.get(`http://localhost:5000/v1/users`).then(res => {
  //   console.log(res.data);
  //   const { email, password } = res.data;
  //   this.setState({ email, password });
  // });
  validate = data => {
    const errors = {};

    if (!data.email) errors.email = "Enter email";
    if (!data.password) errors.password = "Enter password";
    if (data.password !== data.password2)
      errors.password = "Password does not match";

    return errors;
  };

  componentWillMount = () => {
    if (localStorage.getItem("JWT")) {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <SignUp
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                errors={this.state.errors}
                email={this.state.email}
                password={this.state.password}
                password2={this.state.password2}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
