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
        this.ref = fire.firestore().collection("Endpoints").orderBy("datetimeadded", "asc")
        this.unsubscribe = null
        this.state = {
            endpoints : []
        }
    }

    componentDidMount(){
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }

    onCollectionUpdate = (querySnapshot) => {
        const endpoints = []
        querySnapshot.forEach((doc) => {
            const {location, datetimeadded, id} = doc.data()
            endpoints.push({
               key: doc.id,
               doc,
               location,
               datetimeadded,
               id
            })
        })
        this.setState({
            endpoints
        })
    }

    // this only adds endpoint to robot 2
    // need to figure out how to add to selected robot
    // also need to push with a time stemp
    add(EndPoint, DateTimeAdded){
        console.log(DateTimeAdded);
        fire.firestore().collection("Robot").doc(this.props.valueFromParent).collection("Task").add({
            EndPoint,
            datetimeadded: DateTimeAdded
        })
    }

    render() {
        return(
            <div>
                <Card>
                    <Card.Header as="h5">Choose the next destination</Card.Header>
                        {this.state.endpoints.map(endpoint =>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Button variant="primary" className="buttonSize" onClick={this.add.bind(this, endpoint.location, endpoint.datetimeadded)}><FontAwesomeIcon icon={faPlus} size="sm" className="iconSize"/></Button> {endpoint.location}</ListGroup.Item>
                        </ListGroup>
                            )}
                </Card>
            </div>
)
    }
}

export default ShowEndpoints;
