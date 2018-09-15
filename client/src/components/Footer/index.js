import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p>&copy; 2018 Mentor4Me, All rights reserved!</p>
        </div>
        <div className="col-md-6 social-media">
          <Link
            to="http://facebook.com/mentor4mecoding"
            target="_blank"
            rel="noopener noreferrer"
          >
            facebook
          </Link>

          <Link
            to="http://instagram.com/mentor4me"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </Link>
          <Link
            to="https://twitter.com/Mentor4MeCoding"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
