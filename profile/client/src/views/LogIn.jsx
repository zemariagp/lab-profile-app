import React, { Component, Fragment } from 'react'
import { LogIn as login } from "../services/authService"

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = { username: "", password: "" };

  }

  async handleButtonClick(event) {

    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    try {
      const returnedUser = await login({ username, password });
      this.props.handleAuth(returnedUser);
      this.props.history.push(`/private`);
    } catch (error) { console.log(error); }

  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }



  render() {
    return (
      <Fragment>
        <form style={{ maxWidth: "80%", margin: "auto", marginTop: "50%" }}>
          <h3>Log In</h3>
          <input className="form-control" onChange={this.handleInputChange} name="username" type="text" placeholder="Username" />
          <input className="form-control" onChange={this.handleInputChange} name="password" type="password" placeholder="Password" />
          <button className="btn btn-lg btn-primary btn-block" onClick={this.handleButtonClick}>LOGIN</button>
        </form>
      </Fragment>
    )
  }
}

export default LogIn
