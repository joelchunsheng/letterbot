import React from 'react'
import ShowRobots from '../components/Robots/ShowRobots'
import { Container, Row, Col } from 'react-bootstrap';
import './pages.css';


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>

                <Container>
                    <Row>
                        <Col sm={1}>

                        </Col>

                        <Col sm={7}>
                            <h1 className="pageName">Dashboard</h1>

                            <ShowRobots/>
                        </Col>
                    </Row>
                </Container>
                {/* <button onClick={() => fire.auth().signOut()}>SignOut</button> */}
            </div>
)
    }
}

export default Dashboard;
