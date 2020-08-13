import React from 'react'
import ShowRobots from '../components/Robots/ShowRobots'
import { Container, Row, Col } from 'react-bootstrap';
import './pages.css';
import NavigationBar from '../components/navbar/navbar'


class Dashboard extends React.Component {

    render() {


        return(
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                        <NavigationBar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        <h1 id='headers' className="display-4 pt-5 pb-3">Dashboard</h1>
                        <ShowRobots/>
                        {/* <ActiveRobots/> */}
                    </Col> 
                </Row>
            </Container>
)   
    }
}

export default Dashboard;
