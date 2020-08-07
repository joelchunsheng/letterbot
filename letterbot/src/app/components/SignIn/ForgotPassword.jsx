import React, { Component } from 'react'
import fire from '../../../config/Fire';
import { withRouter } from "react-router";
import './ForgotPassword.css';
import { Alert } from 'react-bootstrap';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
    }

    handleSignIn = async event => {
        event.preventDefault();
        const { email } = event.target.elements;
        try {
          const user = await fire
            .auth()
            .sendPasswordResetEmail(email.value);
            alert("Password reset email sent. Please check your email.");
        } catch (error) {
          alert(error);
        }
      };

    render() {
        return(
          <div>
              <div className="forgotPasswordContainer">
                <div className="forgotPasswordHeading">
                    <h1>Forgot your password?</h1>
                    <p>Please enter your email address to request a password reset.</p>
                </div>

                <form onSubmit={this.handleSignIn} class="email-form">
                    <input onChange={this.handleChange} id="email" type="email" placeholder="email"/>
                    <button type="submit">Send</button>

                    <p>
                      <a href='/'>Back to login.</a>
                    </p>
                </form>
            </div>
          </div>

        )
    }
}

export default ForgotPassword;
