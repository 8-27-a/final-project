import React from "react";
import "./style.css";

const Footer = () => (
  <footer className="mt-5 py-3 text-muted text-small">
    <div className="container">
      <div className="row">
        <div className="copyright col-md-6">
          <p className="mb-0">&copy; 2018 Mentor4Me, All rights reserved</p>
        </div>
        <div className="col-md-6 social-media">
          <a
            href="mailto:mentor4me@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope" />
          </a>
          <a
            href="http://facebook.com/mentor4mecoding"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook" />
          </a>
          <a
            href="http://instagram.com/mentor4me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram" />
          </a>
          <a
            href="https://twitter.com/Mentor4MeCoding"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
