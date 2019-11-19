import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <div>
      <div className="contentWrapper">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-pause="false"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active slide1">
              <div className="carousel-content"></div>
            </div>
            <div className="carousel-item slide2">
              <div className="carousel-content"></div>
            </div>
            <div className="carousel-item slide3">
              <div className="carousel-content"></div>
            </div>
          </div>
        </div>
        <div className="carousel-content carousel-contentHead">
          <div className="jumbotron headerjumbo">
            <h1 className="display-4 myName">Bryce Senninger</h1>
            <p className="lead fsWebDev">Full-Stack Web Developer</p>
            <hr className="my-4" />
            <p>
              Specialized in HTML, CSS, Javascript, React, Node.js, Express,
              MySQL, and MongoDB
            </p>
          </div>
        </div>
        <div className="carousel-content2">
          <div className="jumbotron bioJumbo">
            <h1 className="display-4">Bio</h1>
            <hr className="my-4" />
            <p>Click here to learn a little more about me.</p>
          </div>
        </div>
        <div className="carousel-content3">
          <div className="jumbotron projectJumbo">
            <h1 className="display-4">Projects</h1>
            <hr className="my-4" />
            <p>Click here for some recent project links and descriptions.</p>
          </div>
        </div>
        <div className="carousel-content4">
          <div className="jumbotron contactJumbo">
            <h1 className="display-4">Contact</h1>
            <hr className="my-4" />
            <p>Click here for contact information.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
