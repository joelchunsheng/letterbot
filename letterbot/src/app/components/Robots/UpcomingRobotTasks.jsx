import React from 'react'
import { Container, Row, Col, Navbar, Tab, ListGroup, Button } from 'react-bootstrap';
import fire from '../../../config/Fire';
import './UpcomingRobotTasks.css'
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class UpcomingRobotTasks extends React.Component {
    constructor(props) {
        super(props)
        this.ref = fire.firestore().collection("Robot").doc(this.props.valueFromParent).collection("Task").orderBy("datetimeadded", "asc");
        this.unsubscribe = null
        this.state ={
            tasks : []
        }
    }

    componentDidMount(){
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }

    onCollectionUpdate = (querySnapshot) => {
        const tasks = []
        querySnapshot.forEach((doc) => {
            const {EndPoint, time} = doc.data()
            tasks.push({
               key: doc.id,
               doc,
               EndPoint,
               time 
            })
        })
        this.setState({
            tasks
        })
    }

    delete(id){
        fire.firestore().collection("Robot").doc(this.props.valueFromParent).collection("Task").doc(id).delete().then(() => {
          console.log("Document successfully deleted!");
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }

    render() {
        return(
        
            <Container fluid>
                <Row className="d-flex flex-column">
                    <h5>Assigned Tasks:</h5>
                        {this.state.tasks.map(task =>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="pl-0 py-0">
                                    <Button variant="primary" className="buttonSize" onClick={this.delete.bind(this, task.key)}><FontAwesomeIcon icon={faMinus} size="sm" className="iconcolor"/></Button> {task.EndPoint}
                                </ListGroup.Item>
                            </ListGroup>
                        )}
                </Row>
            </Container>
        )
    }
}

export default UpcomingRobotTasks;
