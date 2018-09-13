import React from "react";
import { Link } from "react-router-dom";

const SignUp = props => (
  <form>
    {!!props.errors.global && (
      <div className="alert alert-danger">{props.errors.global}</div>
    )}
    <div className="form-group">
      <h2 className="text-center mb-3">Sign up in seconds</h2>
      <p className="text-center">
        <strong>Already a member?</strong>
        <Link to="/users/login/"> Sign in here</Link>
      </p>
    </div>
    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        className="form-control mt-2"
        value={props.email}
        onChange={props.handleChange}
      />
      {props.errors.email && (
        <small className="text-danger">{props.errors.email}</small>
      )}
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        className="form-control mt-2"
        value={props.password}
        onChange={props.handleChange}
      />
      {props.errors.password && (
        <small className="text-danger">{props.errors.password}</small>
      )}
    </div>
    <div className="form-group">
      <label htmlFor="password2">Confirm Password</label>
      <input
        type="password"
        id="password2"
        name="password2"
        className="form-control mt-2"
        value={props.password2}
        onChange={props.handleChange}
        required
      />
      {props.errors.password && (
        <small className="text-danger">{props.errors.password}</small>
      )}
    </div>
    <button className="btn  btn-primary" type="submit" onClick={props.onSubmit}>
      Sign Up
    </button>
  </form>
);

export default SignUp;
