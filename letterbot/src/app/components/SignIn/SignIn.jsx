import React, { Component } from 'react'
import fire from '../../../config/Fire';
import { withRouter } from "react-router";
import './SignIn.css';


class SignIn extends Component {
    // constructor(props) {
    //     super(props);
    // }

    handleSignIn = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          const user = await fire
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          this.props.history.push("/dashboard");
        } catch (error) {
          alert(error);
        }
      };

    render() {
        return(
            <div className="signInContainer">
                <div className="signInHeading">
                    <h1>WELCOME TO LETTERBOT</h1>
                    <p>Delivering mails and documents to you.</p>
                </div>

                <form onSubmit={this.handleSignIn} class="login-form">
                    <input onChange={this.handleChange} id="email" type="email" placeholder="email"/>
                    <input onChange={this.handleChange} id="password" type="password" placeholder="password"/>
                    <p>
                    <a>Forgot password?</a>
                    </p>
                    <button type="submit">login</button>
                </form>

            </div>
        )
    }
}

export default withRouter(SignIn);
