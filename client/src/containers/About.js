import React, { Component } from "react";
// import { NavLink, Link } from "react-router-dom";
// import "./About.css"

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">About Us</h1>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="/images/no+avatar.png"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="..." alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="..." alt="Third slide" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
