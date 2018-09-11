import React from "react";

const SignUp = props => {
  return (
    <form className="form-signup p-5 my-5 border rounded bg-white">
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={props.data.email}
          onChange={props.onChange}
          required
          autoFocus
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-control mt-2"
          value={props.data.password}
          onChange={props.onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="Password2">Confirm Password</label>
        <input
          type="password"
          id="password2"
          name="password2"
          className="form-control mt-2"
          value={props.data.password2}
          onChange={props.onChange}
          required
        />
      </div>
      <button
        className="btn btn-primary btn-block mt-3"
        type="submit"
        onClick={props.onSubmit}
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
