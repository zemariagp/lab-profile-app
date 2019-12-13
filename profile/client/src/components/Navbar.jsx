import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  constructor(props) {
    super(props)
    this.handleSignOut = this.handleSignOut.bind(this);
  }
  async handleSignOut() {
    await this.props.handleAuth(null);


  }
  render() {
    return (
      <nav className="navbar" >
        <h3>Iron Profile</h3>


        {this.props.user &&
          (<Fragment><Link className="nav-link" to="/edit">Edit</Link><Link onClick={this.handleSignOut} to="/">Log Out</Link> </Fragment>)
          || (<Fragment><Link to="/signup">Sign Up</Link>
            <Link to="/login">Log In</Link></Fragment>)}


      </nav >
    )
  }

}
