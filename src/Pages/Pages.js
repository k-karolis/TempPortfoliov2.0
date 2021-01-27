import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BasePage from "../BasePage/BasePage";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import Experience from "./ExperiencePage/ExperiencePage";
import Portfolio from "./PortfolioPage/PortfolioPage";
import ContactMe from "./ContactPage/ContactPage";

export default function Pages() {
  return (
    <Router>
      <BasePage />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
        <Route component={Error} />=
        <Route path="*" component={Pages.NotFound} />
      </Switch>
    </Router>
  );
}
