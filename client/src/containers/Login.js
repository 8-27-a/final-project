import React, { Component } from "react";
import Axios from "axios";
import SignIn from "../components/Forms/SignIn";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  // login = (data) => {
  //   return Axios.post('/auth', data).then(res => {
  //     const token = res.data.token;
  //     localStorage.setItem('jwtToken', token);
  //   });
  // }

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.targe.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const errors = this.validate({ email, password });
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      Axios.post("http://localhost:5000/auth", { email, password }).then(
        user => {
          if (user.data.success) {
            localStorage.setItem("JWT", user.data.token);
            this.props.history.push("/");
          } else {
            this.setState({
              errors: { ...this.state.errors, global: user.data.message }
            });
          }
          // console.log(res.data);
          //   this.setState({ email, password });
        }
      );
    }
  };
  validate = data => {
    const errors = {};

    if (!data.email) errors.email = "Enter email";
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
      <div className="bg-light py-5">
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
