import React from 'react'
import { Table, ListGroup, Card, Button } from 'react-bootstrap';
import fire from '../../../config/Fire';
import {Link} from 'react-router-dom'
import './showEndPoints.css'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class ShowEndpoints extends React.Component {
    constructor(props) {
        super(props)
        this.ref = fire.firestore().collection("Endpoints").orderBy("location", "asc")
        this.unsubscribe = null
        this.state ={
            endpoints : []
        }
    }

    componentDidMount(){
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }

    onCollectionUpdate = (querySnapshot) => {
        const endpoints = []
        querySnapshot.forEach((doc) => {
            const {location, id} = doc.data()
            endpoints.push({
               key: doc.id,
               doc,
               location,
               id
            })
        })
        this.setState({
            endpoints
        })
    }

    render() {
        return(
            <div>
                <Card>
                    <Card.Header as="h5">Choose the next destination</Card.Header>
                        {this.state.endpoints.map(endpoint =>
                        <ListGroup variant="flush">
                            <ListGroup.Item><Button variant="primary" className="buttonSize"><FontAwesomeIcon icon={faPlus} size="sm" className="iconSize"/></Button> {endpoint.location}</ListGroup.Item>
                        </ListGroup>
                            )}
                </Card>
            </div>
)
    }
}

export default ShowEndpoints;
