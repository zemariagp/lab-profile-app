import React, { Component } from 'react'
import { SignUp as signupService } from "./../services/authService"


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { inputData: { username: null, password: null, campus: null, course: null } }
    this.handleForm = this.handleForm.bind(this);
  }

  async handleForm(event) {
    event.preventDefault();

    if (event.target.type) {
      this.setState({ inputData: { ...this.state.inputData, [event.target.name]: event.target.value } })
    }
    else {
      const returnedUser = await signupService(this.state.inputData);

      this.props.handleAuth(returnedUser);
      this.props.history.push(`/private`);


    }


  }

  render() {
    return (

      <div >
        <form className="form-signin" style={{ margin: "auto" }} onChange={this.handleForm} onSubmit={this.handleForm}>
          <h3>Sign Up</h3>

          <input className="form-control" type="text" name="username" required />

          <input className="form-control" type="password" name="password" required />

          <input className="form-control" type="campus" name="campus" required />

          <input className="form-control" type="course" name="course" required />
          <button className="btn btn-lg btn-primary btn-block" >Submit</button>

        </form>
      </div >
    )


  }

}

export default SignUp
