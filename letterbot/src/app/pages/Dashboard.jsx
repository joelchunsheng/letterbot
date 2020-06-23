import React from 'react'
import fire from '../../config/Fire'


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h1>Dashboard Page</h1>
                <button onClick={() => fire.auth().signOut()}>SignOut</button>
            </div>
)
    }
}

export default Dashboard;
