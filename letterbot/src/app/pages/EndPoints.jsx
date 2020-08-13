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
                        <h1 id='headers'className="display-4 pt-5 pb-3">End Points Page</h1>
                        <hr style={{border:"1px solid black", width:"80%"}} className="mt-5"></hr>
                        <AddEndpoint/>
                        <hr style={{border:"1px solid black", width:"80%"}} className="mb-5"></hr>
                        <ShowEndpoints/>

                    </Col> 
                </Row>
            </Container>
        )
    }
}

export default EndPoints;
