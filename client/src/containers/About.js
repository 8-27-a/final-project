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
              src="/images/scenic1.jpg"
              width="800"
              height="820"
              alt="First slide"
            />
            <div className="carousel-caption">
              <h2 className="text-dark">Slide 1</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/scenic2.jpg"
              width="800"
              height="820"
              alt="Second slide"
            />
            <div className="carousel-caption">
              <h2>Slide 2</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/scenic3.jpg"
              width="800"
              height="820"
              alt="Third slide"
            />
            <div className="carousel-caption">
              <h2>Slide 3</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/scenic4.jpg"
              width="800"
              height="820"
              alt="Fourth slide"
            />
            <div className="carousel-caption">
              <h2>Slide 4</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="/images/scenic5.jpg"
              width="800"
              height="820"
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
