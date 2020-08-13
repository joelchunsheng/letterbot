import React from 'react'
import Iframe from 'react-iframe'
import { Row, Col, Tab, ListGroup, Alert, Table } from 'react-bootstrap';
import fire from '../../../config/Fire';

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.ref = fire.firestore().collection("Robot").orderBy("name", "asc")
        this.state ={
            robots : [],
            ipAddress : ''
        }
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
 
    componentDidMount(){
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)


        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ device_id: 'TestBot', registry_id: 'TestBot' })
        };
        fetch('https://asia-east2-letterbot-staging.cloudfunctions.net/get-ip', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ ipAddress: "http://" + data + ":5331/?action=stream"});
                console.log(data)
            });

    }


    render() {
        const guideStyle ={
            width: 650,
        }

        return(
            <div>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#3OMLkhPwZVfPoqVrEf8F">
                <Row>
                    <Col sm={3}>
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
                            <Tab.Pane eventKey={`#${robot.key}`}>
                                <Iframe url= {this.state.ipAddress}
                                    width="650px"
                                    height="490px"
                                    id="robot1"
                                    className="myClassname"
                                    display="initial"
                                    position="relative"/>
                            </Tab.Pane>
                        </Tab.Content>
                        )}

                        <Alert variant='secondary' style={guideStyle}>
                            <Alert.Heading>Movement Controls</Alert.Heading>
                            <Table responsive>
                                <thead>
                                    <tr>
                                    <th>Arrow Up</th>
                                    <th>Arrow Down</th>
                                    <th>Arrow Left</th>
                                    <th>Arrow Right</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Forward</td>
                                    <td>Backward</td>
                                    <td>Left</td>
                                    <td>Right</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Alert>
                    </Col>
                </Row>
                </Tab.Container>
            </div>
        )
    }
}

export default Player;
