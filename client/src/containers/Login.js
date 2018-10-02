import React, { Component } from "react";
import validator from "validator";
import Axios from "axios";
import SignIn from "../components/Forms/SignIn";
import { API_URL } from "../backend_api";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const errors = this.validate({ email, password });
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      Axios.post(`${API_URL}/auth`, { email, password }).then(user => {
        if (user.data.success) {
          localStorage.setItem("JWT", user.data.token);
          this.props.history.push("/");
        } else {
          console.log("err", user.data.message);
          this.setState({
            errors: { ...this.state.errors, global: user.data.message }
          });
        }
        // console.log(res.data);
      });
    }
  };

  validate = data => {
    const errors = {};

    if (!data.email) errors.email = "Enter email";
    if (!validator.isEmail(data.email)) errors.email = "Enter a valid email";
    if (!data.password) errors.password = "Enter password";

    return errors;
  };

  componentWillMount = () => {
    if (localStorage.getItem("JWT")) {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <div className="bg-navy text-dark py-5 mt-10" style={{ minHeight: 800 }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <SignIn
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                errors={this.state.errors}
                email={this.state.email}
                password={this.state.password}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
