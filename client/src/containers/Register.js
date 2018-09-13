import React, { Component } from "react";
import Axios from "axios";
import SignUp from "../components/Forms/SignUp";

class Register extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.targe.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password, password2 } = this.state;
    const errors = this.validate({ email, password, password2 });
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      Axios.post("http://localhost:5000/signup", { email, password }).then(
        user => {
          if (user.data.success) {
            this.props.history.push("/login");
          } else {
            this.setState({
              errors: { ...this.state.errors, global: user.data.message }
            });
          }
          // console.log(res.data);
          // this.setState({ email, password });
        }
      );
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
