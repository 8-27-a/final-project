import React from "react";

const SignIn = props => {
  return (
    <form className="form-signin p-5 my-5 border rounded bg-white">
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="inputUsername"
          name="email"
          className="form-control"
          placeholder="Email Address"
          value={props.data.email}
          onChange={props.onChange}
          required
          autoFocus
        />
      </div>
      <div className="form-group">
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          id="inputPassword"
          name="password"
          className="form-control mt-2"
          placeholder="Password"
          value={props.data.password}
          onChange={props.onChange}
          required
        />
      </div>
      <button
        className="btn btn-primary mt-3"
        type="submit"
        onClick={props.onSubmit}
      >
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
