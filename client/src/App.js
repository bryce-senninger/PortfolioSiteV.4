import React from "react";
import "./App.css";
import Header from "./components/header";
import Bio from "./components/bio";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Carousel from "./components/carousel";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Carousel />
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
