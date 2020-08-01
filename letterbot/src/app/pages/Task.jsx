import React from 'react'
import { Container, Row, Col, Navbar, Tab, ListGroup } from 'react-bootstrap';
import './pages.css';
import fire from '../../config/Fire';
import NavigationBar from '../components/navbar/navbar'
import UpcomingRobotTasks from '../components/Robots/UpcomingRobotTasks'
import ShowEndPoints from '../components/Task/showEndPoints'

class Task extends React.Component {
    constructor(props) {
        super(props)
        this.ref = fire.firestore().collection("Robot").orderBy("name", "asc")
        this.unsubscribe = null
        this.state ={
            robots : []
        }
    }

    componentDidMount(){
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }

    onCollectionUpdate = (querySnapshot) => {
        const robots = []
        querySnapshot.forEach((doc) => {
            const {name, id, status,currentTask} = doc.data()
            robots.push({
               key: doc.id,
               doc,
               name,
               id,
               status,
               currentTask 
            })
        })
        this.setState({
            robots
        })
    }

    render() {
        return(
        
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                        <NavigationBar />
                    </Col>
                    <Col  xs={10} id="page-content-wrapper">
                        <h1 className="pageName">Task Page</h1>
                        <Tab.Container id="list-group-tabs-example">
                            <Row>
                                <Col sm={4}>
                                {this.state.robots.map(robot =>
                                <ListGroup>
                                    <ListGroup.Item action href={`#${robot.key}`}>
                                    {robot.name}
                                    </ListGroup.Item>
                                </ListGroup>
                                )}
                                </Col>
                                <Col sm={5}>
                                    {this.state.robots.map(robot =>
                                    <Tab.Content>
                                        <Tab.Pane eventKey={`#${robot.key}`} className="taskborder">
                                            {
                                                // Centralize red/green
                                            }
                                        <h3>Status : <text style={{color: robot.status == "Running" ? 'green' : 'red'}}>{robot.status}</text></h3>
                                        <p>Current Task : {robot.currentTask}</p>
                                        <UpcomingRobotTasks valueFromParent={robot.key}/>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    )}
                                </Col>
                                <Col sm={3}>
                                    {this.state.robots.map(robot =>
                                    <Tab.Content>
                                        <Tab.Pane eventKey={`#${robot.key}`}>
                                        <ShowEndPoints valueFromParent={robot.key}/>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    )}
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col> 
                </Row>
            </Container>
        )
    }
}

export default Task;
