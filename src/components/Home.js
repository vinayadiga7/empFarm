import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Profile from "./Profile";
import PersonalFeed from "./PersonalFeed";
import Login from "./Login";
import Signup from "./Signup";
import "./css/main.css";

class Home extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/feed" component={PersonalFeed} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Home;
