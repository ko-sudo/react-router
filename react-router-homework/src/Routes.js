import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";
import About from "./components/About";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import ExtraPage from "./components/ExtraPage";
import NavBar from "./NavBar";

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          
          <NavBar />
          <hr />
          <Route name="Home" exact path="/" component={HomePage} />
          <Route name="Menu" path="/menu" component={Menu} />
          <Route name="About" path="/about" component={About} />
          <Route name="ExtraPage" path="/ExtraPage" component={ExtraPage} />
          <hr />
        </Router>
      </div>
    );
  }
}
export default Routes;