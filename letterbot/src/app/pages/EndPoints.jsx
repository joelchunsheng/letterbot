import React from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import './pages.css';
import NavigationBar from '../components/navbar/navbar'


class EndPoints extends React.Component {
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
                        <h1 className="pageName">End Points Page</h1>
                    </Col> 
                </Row>
            </Container>
        )
    }
}

export default EndPoints;
