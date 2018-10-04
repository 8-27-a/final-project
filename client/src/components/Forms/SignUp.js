import React from "react";
import { Link } from "react-router-dom";

const SignUp = props => (
  <form style={{ height: "71vh" }}>
    <div className="form-group mt-5">
      <h2 className="text-center mt-5 mb-3">Sign up in seconds</h2>
      <p className="text-center">
        <strong>Already a member?</strong>
        <Link to="/login/"> Sign in here</Link>
      </p>
    </div>

    <div className="form-group">
      <label htmlFor="first">First Name</label>
      <input
        type="text"
        id="first"
        name="first"
        className="form-control"
        value={props.first}
        onChange={props.onChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="last">Last Name</label>
      <input
        type="text"
        id="last"
        name="last"
        className="form-control"
        value={props.last}
        onChange={props.onChange}
      />
    </div>

    <div className="form-group" onSubmit={props.handleSubmit}>
      <label>
        Mentor or Student?
        <select
          name="role"
          value={props.role}
          onChange={props.onChange}
          className="form-control"
        >
          <option value="student">Student</option>
          <option value="mentor">Mentor</option>
        </select>
      </label>
    </div>

    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        className="form-control"
        placeholder="example@example.com"
        value={props.email}
        onChange={props.onChange}
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
        className="form-control"
        value={props.password}
        onChange={props.onChange}
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
        className="form-control"
        value={props.password2}
        onChange={props.onChange}
        required
      />
      {props.errors.password && (
        <small className="text-danger">{props.errors.password}</small>
      )}
    </div>
    <button
      className="btn btn-info mb-3"
      type="submit"
      onClick={props.onSubmit}
    >
      Sign Up
    </button>
    {!!props.errors.global && (
      <div className="alert alert-danger">{props.errors.global}</div>
    )}
  </form>
);

export default SignUp;
