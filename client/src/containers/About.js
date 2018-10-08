import React, { Component } from "react";

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
              alt="First slide"
            />
            <div className="carousel-caption">
              <h2 className="text-dark">Slide 1</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech2.jpg"
              alt="Second slide"
            />
            <div className="carousel-caption">
              <h2>Slide 2</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech3.jpg"
              alt="Third slide"
            />
            <div className="carousel-caption">
              <h2>Slide 3</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech4.jpg"
              alt="Fourth slide"
            />
            <div className="carousel-caption">
              <h2>Slide 4</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/tech5.jpg"
              alt="Fifth slide"
            />
            <div className="carousel-caption">
              <h2>Slide 5</h2>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true" />
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default About;
