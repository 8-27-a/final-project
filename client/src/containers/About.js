import React, { Component } from "react";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <div className="about" style={{ minHeight: 800 }}>
        {/* style={{ backgroundImage: `url(require("images/tech4.gif"))` }}> */}
        <h1 className="text-center text-white">About Us</h1>
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="/images/tech4.gif"
                width="800"
                height="700"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="/images/tech1.jpg"
                width="800"
                height="700"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                width="800"
                height="700"
                src="/images/tech2.jpg"
                alt="Third slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                width="800"
                height="700"
                src="/images/tech.jpeg"
                alt="Fourth slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                width="800"
                height="700"
                src="/images/tech4.jpg"
                alt="Fifth slide"
              />
            </div>
          </div>
          <Link
            className="carousel-control-prev"
            to="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </Link>
          <Link
            className="carousel-control-next"
            to="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default About;
