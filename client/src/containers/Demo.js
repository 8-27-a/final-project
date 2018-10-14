import React, { Component } from "react";
import "./about.css";

class Demo extends Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="/images/tech7.jpg"
              alt="6th slide"
            />
            <div className="carousel-caption-6 py-20">
              <h1 className="caption-6">
                <small>Team Name:</small> <strong>Make Coding Fun Again</strong>{" "}
                <br />
                <small>Project Name:</small> <strong>Mentor4me </strong>
                <br />
                <br />
                <br />
                <small>Purpose:</small> To create an app that a user can find
                <br />
                and make appointments with mentors of their choice <br />
                based on their profiles and mentors can also view student
                <br /> profiles before accepting an appointment request - an app
                that is <br /> user friendly and protects the privacy by
                allowing only the authenticated users to view personal profiles
                of other users.
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech7.jpg"
              alt="7th slide"
            />
            <div className="carousel-caption-7 py-20">
              <h1 className="caption-7">
                <small>Site map:</small>
                <br />
                <br />- Home / dev team intro
                <br />- Find a mentor
                <br />
                &nbsp; &nbsp; &nbsp;- Mentors List
                <br />
                &nbsp; &nbsp; &nbsp;- Mentor Profile <br />
                &nbsp; &nbsp; &nbsp;- Appointment Booking
                <br />- About
                <br />- Demo
                <br />- User
                <br />
                &nbsp; &nbsp; &nbsp;- Dashboard
                <br />
                &nbsp; &nbsp; &nbsp;- Profile Setting
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech7.jpg"
              alt="8th slide"
            />
            <div className="carousel-caption-8 py-20">
              <h1 className="caption-8">
                <small>User Functions:</small>
                <br />- User can signup, login, select a user role of mentor
                <br />
                or student, update profile (includes first & last name,
                <br /> avatar image url, reset password, skillsets , and <br />
                personal bio)
                <br />
                <br />
                <small>Student Functions:</small>
                <br />- View mentor list with abbreviated profile and click to
                <br />
                view detail profile or search for a mentor by their first or
                <br />
                last name
                <br />
                <br />- Make appointment with a mentor by selecting date, time,
                <br />
                and with an optional comment <br /> <br />- View Dashboard that
                displays all appointments with mentor name, ability to send/
                <br />
                receive comments with the mentor, and see the appointment status
                (pending, accepted, rejected)
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech7.jpg"
              alt="9th slide"
            />
            <div className="carousel-caption-9 py-20">
              <h1 className="caption-9">
                <small>Mentor Functions:</small>
                <br />- View mentor list with abbreviated profile and click{" "}
                <br />
                to view detail profile of mentors
                <br />
                <br />- View Dashboard that displays all appointments with
                <br />
                student name, link to student’s profile detail, appointment
                <br />
                status, and ability to accept or reject an appointment, and
                <br />
                ability to send/receive comments with the students
                <br />
                <br />
                <small>About & Demo features:</small>
                <br /> - Carousel slides that promote the mentor4me app.
                <br /> - Carousel slides that introduce the app, its
                functionalities, and the technologies used.
                <br />
                <br />
                <small>Dev Team Intro feature:</small>
                <br /> - A section in the home page that introduces the
                developer team members
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech7.jpg"
              alt="10th slide"
            />
            <div className="carousel-caption-10 py-20">
              <h1 className="caption-10">
                <small>Technologies used:</small>
                <br />
                <br />- JavaScript
                <br />- MERN stack
                <br />- MySQL <br />- Express
                <br />- ReactJS
                <br />- NodeJS
                <br />- Github for source control
                <br />- Heroku for cloud deployment
                <br />
              </h1>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Demo;
