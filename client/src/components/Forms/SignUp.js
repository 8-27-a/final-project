import React from "react";
import { Link } from "react-router-dom";

const SignUp = props => (
  <form>
    <div className="form-group">
      <h2 className="text-center mb-3">Sign up in seconds</h2>
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
        className="form-control mt-2"
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
        className="form-control mt-2"
        value={props.last}
        onChange={props.onChange}
      />
    </div>

    <div className="form-group">
      <div className="custom-control custom-radio custom-control-inline">
        <input 
          type="radio" 
          className="custom-control-input" 
          id="role" 
          name="role" 
          value={props.role} 
          onChange={props.onChange}
          />
        <label className="custom-control-label" htmlFor="role">Student</label>
      </div>
      <div className="custom-control custom-radio custom-control-inline">
        <input 
          type="radio" 
          className="custom-control-input" 
          id="role2" 
          name="role2"
          value={props.role2} 
          onChange={props.onChange}
          />
        <label className="custom-control-label" htmlFor="role2">Mentor</label>
      </div>
    </div>


    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        className="form-control mt-2"
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
        className="form-control mt-2"
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
        className="form-control mt-2"
        value={props.password2}
        onChange={props.onChange}
        required
      />
      {props.errors.password && (
        <small className="text-danger">{props.errors.password}</small>
      )}
    </div>
    <button className="btn btn-primary" type="submit" onClick={props.onSubmit}>
      Sign Up
    </button>
  </form>
);

export default SignUp;
