import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './pages.css';
import NavigationBar from '../components/navbar/navbar'
import ShowUsers from '../components/User/ShowUsers';
import AddUsers from '../components/User/AddUsers';


class Users extends React.Component {
    render() {
        return(
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                        <NavigationBar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        <h1 id='headers' className="display-4 pt-5 pb-3">Users Page</h1>
                        <AddUsers/>
                        <ShowUsers/>
                    </Col> 
                </Row>
            </Container>
        )
    }
}

export default Users;
