import React, { Fragment, Component } from 'react'
import { LogOut as logout } from "./../services/authService"

export class Private extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  async handleButtonClick() {
    try {
      await logout();

    } catch (error) {
      console.log(error);
    }
    this.props.history.push("/");

  }
  render() {
    return (
      <Fragment>
        {this.props.user && (<Fragment>
          <h1>Profile</h1>
          <h2>Username</h2>
          <p>{this.props.user.username}</p>
          <h2>Campus</h2>
          <p>{this.props.user.campus}</p>
          <h2>Course</h2>

          <p>{this.props.user.course}</p>

          <button onClick={this.handleButtonClick}>Upload Photo</button>
          <button onClick={this.handleButtonClick}>LOGOUT</button>
        </Fragment>) || <img src="https://cdn.dribbble.com/users/216925/screenshots/2044807/bolt.gif"></img>}


      </Fragment>
    )
  }
}

export default Private
