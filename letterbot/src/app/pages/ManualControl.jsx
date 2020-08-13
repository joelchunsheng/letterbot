import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './pages.css';
import NavigationBar from '../components/navbar/navbar'
import Player from '../components/ManualControl/Player';

class ManualControl extends React.Component {


    render() {
        return(
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                        <NavigationBar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        <h1 className="display-4 pt-5 pb-3">Manual Control Page</h1>
                        <Player/>
                    </Col> 
                </Row>
            </Container>
        )
    }
}

export default ManualControl;
