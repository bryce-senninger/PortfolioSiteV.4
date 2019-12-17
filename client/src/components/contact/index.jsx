import React from "react";
import { Link } from "react-router-dom";
import LinkedIn from "../../assets/linkedin-sign.png";
import GitHub from "../../assets/github-logo(1).png";

function Contact() {
  return (
    <>
      <div class="carousel-content carousel-contentHead">
        <div class="jumbotron headerjumbo">
          <h1 class="display-4">Bryce Senninger</h1>
          <p class="lead">Full-Stack Developer</p>
          <hr class="my-4" />
          <h2>Contact Info</h2>
          <Link to="/">Go Back</Link>
        </div>
      </div>
      <div className="carousel-content2">
        <div className="jumbotron bioJumbo pastJumbo">
          <img class="logo" src={LinkedIn} alt="Bryce" />
        </div>
      </div>
      <div className="carousel-content3">
        <div className="jumbotron projectJumbo presentJumbo">
          {/* <h1 className="display-4">Present</h1>
          <hr className="my-4" /> */}
          <form method="POST">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" />

            <label htmlFor="message">Message</label>
            <textarea name="message" rows="3"></textarea>

            <input type="submit" />
          </form>
        </div>
      </div>
      <div className="carousel-content4">
        <div className="jumbotron contactJumbo futureJumbo">
          <img class="logo" src={GitHub} alt="Bryce" />
        </div>
      </div>
    </>
  );
}

export default Contact;
