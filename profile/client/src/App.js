import React from 'react';
import { Component } from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom"
import SignUp from "./views/SignUp"
import LogIn from "./views/LogIn"
import Private from "./views/Private"
import { Home } from "./views/Home"
import { Navbar } from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null }
    this.changeAuthStatus = this.changeAuthStatus.bind(this);
  }

  changeAuthStatus(inputedUser) {
    this.setState({ user: inputedUser })
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar user={this.state.user} handleAuth={this.changeAuthStatus} />
        <Switch>

          <Route path="/login" render={props => (<LogIn {...props} handleAuth={this.changeAuthStatus} />)} />
          <Route path="/signup" render={props => (<SignUp {...props} handleAuth={this.changeAuthStatus} />)} />
          <Route path="/private" render={props => (<Private {...props} user={this.state.user} />)} />

          <Route path="/" component={Home} />


        </Switch >
      </BrowserRouter>


    );
  }
}

export default App;
