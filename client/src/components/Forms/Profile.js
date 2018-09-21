import React from "react";
import { Link } from "react-router-dom";

const Profile = props => {
  console.log("props.success", props.success);
  console.log("props.erros", props.errors);
  return (
    <form>
      <div className="form-group">
        <h2 className="text-center mb-3">Edit your profile</h2>
        <p className="text-center">
          <Link to={`/${props.role}/${props.userId}`}>Profile preview</Link>
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
        <label htmlFor="imgUrl">Profile Image</label>
        <input
          type="text"
          id="imgUrl"
          name="imgUrl"
          className="form-control mt-2"
          value={props.imgUrl}
          onChange={props.onChange}
        />
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
      <div className="form-group">
        <label htmlFor="summary">Summary</label>
        <textarea
          id="summary"
          name="summary"
          className="form-control mt-2"
          value={props.summary}
          onChange={props.onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="bio">Biography</label>
        <textarea
          id="bio"
          name="bio"
          className="form-control mt-2"
          value={props.bio}
          onChange={props.onChange}
          required
        />
      </div>
      <button
        className="btn btn-primary mb-5"
        type="submit"
        onClick={props.onSubmit}
      >
        Save Changes
      </button>
      <button
        className="btn btn-danger mb-5 ml-5"
        type="submit"
        onClick={props.onSubmit}
      >
        Delete Account
      </button>
      {!!props.success && (
        <div className="alert alert-success">{props.success}</div>
      )}
      {!!props.errors.global && (
        <div className="alert alert-danger">{props.errors.global}</div>
      )}
    </form>
  );
};

export default Profile;
