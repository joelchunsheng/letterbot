import React from 'react'
import fire from '../../../config/Fire';
import './SignIn.css';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{},
        }
    }

    render() {
        return(
            <div className="signInContainer">
                <div className="signInHeading">
                    <h1>WELCOME TO LETTERBOT</h1>
                    <p>Delivering mails and documents to you.</p>
                </div>

                <form class="login-form">
                    <input type="text" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <p>
                    <a>Forgot password?</a>
                    </p>
                    <button>login</button>
                </form>

            </div>
        )
    }
}

export default SignIn;
