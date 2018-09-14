import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Home, Mentor, Dashboard, Login, Register } from "./containers";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header brand="Mentor4me" />
          <Route exact path="/" component={Home} />
          <Route exact path="/mentors" component={Mentor} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
