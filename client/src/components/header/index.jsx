import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <>
      <div className="contentWrapper">
        <div className="carousel-content carousel-contentHead">
          <div className="jumbotron headerjumbo">
            <h1 className="display-4 myName">Bryce Senninger</h1>
            <p className="lead fsWebDev">Full-Stack Developer</p>
            <hr className="my-4" />
            <p>
              Specialized in HTML, CSS, JavaScript, React, Node.js, Express,
              MySQL, and MongoDB
            </p>
          </div>
        </div>
        <div className="carousel-content2">
          <Link to="/bio" style={{ textDecoration: "none" }}>
            <div className="jumbotron bioJumbo">
              <h1 className="display-4">Bio</h1>
              <hr className="my-4" />
              <p>Click here to learn a little more about me.</p>
            </div>
          </Link>
        </div>
        <div className="carousel-content3">
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <div className="jumbotron projectJumbo">
              <h1 className="display-4">Projects</h1>
              <hr className="my-4" />
              <p>Click here for some recent project links and descriptions.</p>
            </div>
          </Link>
        </div>
        <div className="carousel-content4">
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <div className="jumbotron contactJumbo">
              <h1 className="display-4">Contact</h1>
              <hr className="my-4" />
              <p>Click here for contact information.</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
