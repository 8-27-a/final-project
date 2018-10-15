import React, { Component } from "react";
import "./about.css";

class About extends Component {
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
              src="/images/tech1.png"
              alt="1st slide"
            />
            <div className="carousel-caption-1 py-20">
              <h1 className="caption-1">
                It's a new week and there's always room to build a project that
                never existed before...
                <br /> Find a Mentor4me!
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech2.jpg"
              alt="2nd slide"
            />
            <div className="carousel-caption-2 py-20">
              <h1 className="caption-2">
                Stuck on your code and a coffee isn't cutting it...?
                <br />
                Find a Mentor4me!
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech3.jpg"
              alt="3rd slide"
            />
            <div className="carousel-caption-3 py-20">
              <h1 className="caption-3">
                When you can't find the error and hours have gone by. Maybe it's
                time to get some assistance...
                <br /> Find a Mentor4me!
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech6.jpeg"
              alt="4th slide"
            />
            <div className="carousel-caption-4 py-20">
              <h1 className="caption-4">
                Getting started as a coder and need some help? <br />
                Find top notch tutors to get your career started in the tech
                space...
                {/* You need the right tools to bring clarity to your project. We
                are here to connect you with mentors who will conquer it with
                you... */}
                <br />
                Find a Mentor4me!
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech5.jpg"
              alt="5th slide"
            />
            <div className="carousel-caption-5 py-20">
              <h1 className="caption-5">
                Having trouble with your code? Keep calm and...
                <br />
                Find a Mentor4me!
              </h1>
            </div>
          </div>

          {/* <div className="carousel-item">
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
                <small>Purpose:</small> To create an app that a user can find
                and <br />
                make appointments with mentors of their choice <br />
                based on their profiles and mentors can also view <br />
                student profiles before accepting an appointment request - an
                app that is user friendly and protects the privacy by allowing
                only the authenticated users to view personal profiles of other
                users.
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech6.jpeg"
              alt="7th slide"
            />
            <div className="carousel-caption-7 py-20">
              <h1 className="caption-7">
                User Functions:
                <br />- User can signup, login, select a user role of mentor/
                student, update profile (includes first & last name, avatar
                image url, reset password, skillsets , and personal bio) <br />
                <br />
                Student Functions: <br />- View mentor list with abbreviated
                profile and click to view detail profile or search for a mentor
                by their first or last name
                <br />- Make appointment with a selected mentor by inputting
                date, time, and an optional comment <br />- View Dashboard that
                displays all appointments with mentor name, ability to
                send/receive comments with the <br />
                mentor, and the appointment
                <br /> status (pending, accepted,
                <br /> rejected)
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech6.jpeg"
              alt="8th slide"
            />
            <div className="carousel-caption-8 py-20">
              <h1 className="caption-8">
                Mentor Functions:
                <br />- View mentor list with abbreviated profile and click to
                view detail profile of mentors
                <br />- View Dashboard that displays all appointments with
                student name, link to student’s profile detail, appointment
                status, and ability to accept or reject an appointment, and
                ability to send/receive comments with the students
                <br />
                <br />
                About feature:
                <br /> - Slides to introduce the app, its functionalities, and
                technologies used.
                <br /> - Slides that promotes the mentor4me app.
                <br />
                <br />
                Dev Team Intro feature:
                <br /> - Short introduction of <br />
                developer team members
              </h1>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech6.jpeg"
              alt="9th slide"
            />
            <div className="carousel-caption-9 py-20">
              <h1 className="caption-9">
                Technologies used:
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
          </div> */}
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

export default About;
