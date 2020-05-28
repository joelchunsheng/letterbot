import React from 'react'
import SignIn from '../components/SignIn/SignIn';


class LandingPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <SignIn/>
            </div>
        )
    }
}

export default LandingPage;
