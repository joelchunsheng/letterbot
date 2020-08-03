import React from 'react'
import ShowRobots from '../components/Robots/ShowRobots'
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import './pages.css';
import ActiveRobots from '../components/Robots/ActivieRobots';
import fire from '../../config/Fire';
import NavigationBar from '../components/navbar/navbar'


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                        <NavigationBar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        <h1 className="pageName">Dashboard</h1>
                        <ShowRobots/>
                        {/* <ActiveRobots/> */}
                    </Col> 
                </Row>
            </Container>
)   
    }
}

export default Dashboard;
