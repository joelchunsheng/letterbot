import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './pages.css';
import NavigationBar from '../components/navbar/navbar'
import ShowEndpoints from '../components/Endpoints/ShowEndpoints';
import AddEndpoint from '../components/Endpoints/AddEndpoint';


class EndPoints extends React.Component {


    render() {
        return(
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                        <NavigationBar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        <h1 className="pageName">End Points Page</h1>
                        <ShowEndpoints/>
                        <AddEndpoint/>
                    </Col> 
                </Row>
            </Container>
        )
    }
}

export default EndPoints;
