import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about" style={{ minHeight: 800 }}>
        <h1 className="text-center text-white">About Us</h1>
        <div
          id="carouselExampleControls"
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
              <div className="carousel-caption">
                <h1>Slide 1</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="/images/tech1.jpg"
                width="800"
                height="700"
                alt="Second slide"
              />
              <div className="carousel-caption">
                <h1>Slide 2</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                width="800"
                height="700"
                src="/images/tech2.jpg"
                alt="Third slide"
              />
              <div className="carousel-caption">
                <h1>Slide 3</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                width="800"
                height="700"
                src="/images/tech.jpeg"
                alt="Fourth slide"
              />
              <div className="carousel-caption">
                <h1>Slide 4</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                width="800"
                height="700"
                src="/images/tech4.jpg"
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
