import React from "react";
import { Link } from "react-router-dom";

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
      <div class="">
        <div class="jumbotron bioPageJumbo">
          <p class="headP">
            I am a full-stack developer specialized in HTML, CSS, JavaScript,
            React, Node.js, Express, MySQL, and MongoDB.
          </p>
          <p>
            Previous to coding, I was a student at the University of Utah. I
            entered the University of Utah with 60 credit hours applied to my
            degree from completion of the International Baccalaureate program
            and AP testing in high school, which unfortunately meant I didn't
            have much time to explore my interests in college. Rather quickly I
            found myself diving into upper level classes for my declared major,
            Economics with an Emphasis on Statistical Analysis.
          </p>
          <img
            class="selfie"
            src={require("../../assets/selfie.png")}
            alt="Bryce"
          />
          <p>
            As I began to worry this field might not be my calling, I also found
            myself increasingly intrigued by the projects my friends in the CS
            department were working on.
          </p>
          <p>
            I decided to take a step away from the path in front of me and
            explore this curiousity in coding, and began tinkering around with
            HTML, CSS, and JavaScript in the fall of 2018. Immediately I fell in
            love with the aspects of problem solving and implemenation of logic.
            Knowing that this was the path that I wanted to take, I decided to
            enroll in the Full-Stack Development Professional Education Camp
            offered through the University of Utah.
          </p>
          <p>
            The experience from the bootcamp was incredible, very rapidly
            exposing me to many different technologies and giving me the tools
            to take my code to the next level. Running through full front-end
            design, back-end database creation, and the necessary logic
            intersecting the two at a break-neck pace was a thrilling
            experience- and one that taught me quickly how important it is in
            the field of coding to be able to learn new concepts and adapt
            rapidly.
          </p>
          <p>
            I pride myself on my problem solving and learning capabilities, and
            having had them thorougly put to the test and discovering a passion
            in the process has been life-changing for me. I can't wait to see
            what the future holds for me in this exciting field.
          </p>
        </div>
      </div>
    </>
  );
}

export default Bio;
