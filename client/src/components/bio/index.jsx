import React from "react";
import { Link } from "react-router-dom";
import Selfie from "../../assets/selfie.png";

function Bio() {
  return (
    <>
      <div class="carousel-content carousel-contentHead">
        <div class="jumbotron headerjumbo">
          <h1 class="display-4">Bryce Senninger</h1>
          <p class="lead">Full-Stack Developer</p>
          <hr class="my-4" />
          <h2>Personal Bio</h2>
          <Link to="/">Go Back</Link>
        </div>
      </div>
      <div className="carousel-content2">
        <div className="jumbotron bioJumbo pastJumbo">
          <h1 className="display-4">Past</h1>
          <hr className="my-4" />
          <p>
            I began my post-secondary education at the University of Utah
            studying Economics and Statistical Analysis. Eventually I came to
            the conclusion that Economics might not be the best way to explore
            my passion for problem solving and creative reasoning.
          </p>
          <p>
            I started coding and knew right away I had found a passion, and I
            haven't looked back since.
          </p>
        </div>
      </div>
      <div className="carousel-content3">
        <div className="jumbotron projectJumbo presentJumbo">
          <h1 className="display-4">Present</h1>
          <hr className="my-4" />
          <p>
            One thing I find so exciting about coding is that the applications
            are limitless, and the learning never stops.
          </p>
          <p>
            These days I enjoy working on projects that allow me to combine my
            interest in coding with other passions. Whether it be outdoor
            recreation, literature, film, cooking, or something else entirely- I
            love the process of creating applications that make it easier for
            people to track, share, and connect.
          </p>
          <img class="selfie" src={Selfie} alt="Bryce" />
        </div>
      </div>
      <div className="carousel-content4">
        <div className="jumbotron contactJumbo futureJumbo">
          <h1 className="display-4">Future</h1>
          <hr className="my-4" />
          <p>
            My goal is to continue learning and exploring my passion for coding
            through a continuous commitment to developing my skills as a
            programmer and expanding my area of knowledge within the field. I am
            seeking new opportunites that allow me to utilize my skills in
            problem solving and creative reasoning while also challenging me to
            grow.
          </p>
        </div>
      </div>
    </>
  );
}

export default Bio;
