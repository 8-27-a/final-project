import React from "react";
import "./style.css";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p>&copy; 2018 Mentor4Me, All rights reserved!</p>
        </div>
        <div className="col-md-6 social-media">
          <a
            href="http://facebook.com/mentor4mecoding"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook
          </a>
          <a
            href="http://instagram.com/mentor4me"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
          <a
            href="https://twitter.com/Mentor4MeCoding"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
