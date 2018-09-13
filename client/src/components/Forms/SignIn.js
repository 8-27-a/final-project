import React from "react";
import { Link } from "react-router-dom";

const SignIn = props => (
  <form>
    {!!props.errors.global && (
      <div className="alert alert-danger">{props.errors.global}</div>
    )}
    <div className="form-group">
      <h2 className="text-center mb-3">Login to your account</h2>
      <p className="text-center">
        <strong>Not a member yet?</strong>
        <Link to="/register"> Sign up for free!</Link>
      </p>
    </div>
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        name="email"
        id="email"
        className="form-control"
        onChange={props.onChange}
        value={props.email}
      />
      {props.errors.email ? (
        <small className="text-danger">{props.errors.email}</small>
      ) : (
        ""
      )}
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        className="form-control mt-2"
        onChange={props.onChange}
        value={props.password}
      />
      {props.errors.password ? (
        <small className="text-danger">{props.errors.password}</small>
      ) : (
        ""
      )}
    </div>
    <button className="btn btn-primary mt-4" type="submit">
      Login
    </button>
  </form>
);

export default SignIn;