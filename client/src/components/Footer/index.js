import React from "react";
import "./style.css";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="copyright col-md-6">
          <p>&copy; 2018 Mentor4Me, All rights reserved</p>
        </div>
        <div className="col-md-6 social-media">
          <a
            className="fa fa-envelope"
            href="mailto:mentor4me@gmail.com"
            target="_blank"
          />
          <a
            className="fa fa-facebook"
            href="http://facebook.com/mentor4mecoding"
            target="_blank"
          />
          <a
            className="fa fa-instagram"
            href="http://instagram.com/mentor4me"
            target="_blank"
          />
          <a
            className=" fa fa-twitter"
            href="https://twitter.com/Mentor4MeCoding"
            target="_blank"
          />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
