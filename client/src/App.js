import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Home, Appointment, Profile, Login, Register } from "./containers";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header brand="Mentors 4 Me" />
          <Route exact path="/" component={Home} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Appt" component={Appointment} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
 