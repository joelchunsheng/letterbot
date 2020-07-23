import React from 'react'
import { Container, Row, Col, Navbar, Tab, ListGroup } from 'react-bootstrap';
import fire from '../../../config/Fire';

class UpcomingRobotTasks extends React.Component {
    constructor(props) {
        super(props)
        this.ref = fire.firestore().collection("Robot").doc(this.props.valueFromParent).collection("Task")
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

    render() {
        return(
        
            <Container fluid>
                <Row className="d-flex flex-column">
                    <h5>Upcoming Tasks:</h5>
                        <ul>
                        {this.state.tasks.map(task =>
                            <li>{task.EndPoint}</li>
                        )}
                    </ul> 
                </Row>
            </Container>
        )
    }
}

export default UpcomingRobotTasks;
