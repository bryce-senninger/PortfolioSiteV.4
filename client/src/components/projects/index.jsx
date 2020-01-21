import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <>
      <div class="carousel-content carousel-contentHead">
        <div class="jumbotron headerjumbo">
          <h1 class="display-4">Bryce Senninger</h1>
          <p class="lead">Full-Stack Developer</p>
          <hr class="my-4" />
          <h2>Projects</h2>
          <Link to="/">Go Back</Link>
        </div>
      </div>
      <a class="projectLink" href="">
        <div class="carousel-content2 techContainer">
          <div class="jumbotron techJobJumbo">
            <h1 class="display-4 techJobSearch">Tech Job Finder</h1>
            <hr class="my-4 hr2" />
            <p>
              Exploration of external API integration with personal database.
            </p>
            <p>
              Browse job listings from the GitHub Jobs API by description or
              location, and save listings to the database for future reference.
            </p>
            <p>
              Click anywhere to visit the heroku deployed project, or click{" "}
              <a href="https://github.com/bryce-senninger/TechJobSearch">
                here
              </a>{" "}
              to visit the GitHub repository.
            </p>
          </div>
        </div>
      </a>
      <a class="projectLink" href="https://readymetgo.herokuapp.com/">
        <div class="carousel-content3 rmgContainer">
          <div class="jumbotron readyMetGoJumbo">
            <h1 class="display-4 readyMetGo">Ready? Met. Go!</h1>
            <hr class="my-4 metHr" />
            <p>
              Development of a user database, comparing form inputs to desired
              fields and displaying dynamic results.
            </p>
            <p>
              Find skilled artists, musicians, developers, and more matching
              your search criteria for potential project collaboration.
            </p>
            <p>
              Click anywhere to visit the heroku deployed project, or click{" "}
              <a href="https://github.com/bryce-senninger/ReadyMetGo">here</a>{" "}
              to visit the GitHub repository.
            </p>
          </div>
        </div>
      </a>
      <a class="projectLink" href="https://recrenter.herokuapp.com">
        <div class="carousel-content6 recContainer">
          <div class="jumbotron recJumbo">
            <h1 class="display-4 recRenter">Rec Renter</h1>
            <hr class="my-4 hr2" />
            <p>
              Full-stack web app featuring React.js based front-end, Express
              server routing, Node.js, and MongoDB back-end.
            </p>
            <p>
              Find and list privately owned recreational gear for rent. List and
              search by category and related subcategory.
            </p>
            <p>
              Click anywhere to visit the GitHub Pages deployed project, or
              click{" "}
              <a href="https://github.com/bryce-senninger/AmericanLiteratureTrivia">
                here
              </a>{" "}
              to visit the GitHub repository.
            </p>
          </div>
        </div>
      </a>
      <a
        class="projectLink"
        href="https://bryce-senninger.github.io/AmericanLiteratureTrivia/"
      >
        <div class="carousel-content5">
          <div class="jumbotron triviaJumbo">
            <h1 class="display-4 triviaGame">American Literature Trivia</h1>
            <hr class="my-4 hr2" />
            <p>Trivia game created with timers and JavaScript logic.</p>
            <p>
              Test your knowledge of classic American literature in this game!
            </p>
            <p>
              Click anywhere to visit the GitHub Pages deployed project, or
              click{" "}
              <a href="https://github.com/bryce-senninger/AmericanLiteratureTrivia">
                here
              </a>{" "}
              to visit the GitHub repository.
            </p>
          </div>
        </div>
      </a>
      <a class="projectLink" href="https://trackrecipes.herokuapp.com/">
        <div class="carousel-content4 recipeContainer">
          <div class="jumbotron recipeJumbo">
            <h1 class="display-4 recipeTracker">Recipe Tracker</h1>
            <hr class="my-4 hr2" />
            <p>
              Dynamic HTML creation using Express Handlebars and MySQL database.
            </p>
            <p>
              Create a list of recipes you'd like to try or have tried. Add new
              recipes or remove old ones at any time.
            </p>
            <p>
              Click anywhere to visit the heroku deployed project, or click{" "}
              <a href="https://github.com/bryce-senninger/RecipeTracker">
                here
              </a>{" "}
              to visit the GitHub repository.
            </p>
          </div>
        </div>
      </a>
    </>
  );
}

export default Projects;
