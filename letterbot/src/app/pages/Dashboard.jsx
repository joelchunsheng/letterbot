import React from 'react'
import ShowRobots from '../components/Robots/ShowRobots'
import { Container, Row, Col } from 'react-bootstrap';
import './pages.css';
import ActiveRobots from '../components/Robots/ActivieRobots';
import fire from '../../config/Fire';


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>

                <h1 className="pageName">Dashboard</h1>
                <ShowRobots/>
                <ActiveRobots/>
                {/* temporary logout button to end session */}
                <button onClick={() => fire.auth().signOut()}>SignOut</button>
            </div>
)
    }
}

export default Dashboard;
