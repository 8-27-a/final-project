import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="pagetop m-0">
        {/* <h1 className="text-center text-dark">About Us</h1> */}
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="/images/scenic1.jpg"
                alt="First slide"
              />
              <div className="carousel-caption">
                <h2>Slide 1</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="/images/scenic2.jpg"
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
                alt="Fifth slide"
              />
              <div className="carousel-caption">
                <h1>Slide 5</h1>
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
      </div>
    );
  }
}

export default About;
