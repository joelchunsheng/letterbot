import React from 'react'
import { ListGroup, Card, Button } from 'react-bootstrap';
import fire from '../../../config/Fire';
import './showEndPoints.css'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class ShowEndpoints extends React.Component {
    constructor(props) {
        super(props)
        this.ref = fire.firestore().collection("Endpoints").orderBy("location", "asc")
        this.unsubscribe = null
        // var firstlist;
        // fire.firestore().collection("Robot").doc(this.props.valueFromParent).collection("Task").orderBy("datetimeadded", "asc").limit(1).get().then(querySnapshot => {firstlist = querySnapshot.docs[0].data().EndPoint})
        this.state = {
            endpoints : [],
            // firstlist : firstlist
        }

        //console.log(this.state.firstlist)
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

    // this only adds endpoint to robot 2
    // need to figure out how to add to selected robot
    // also need to push with a time stemp
    add(EndPoint, DateTimeAdded){
        console.log(DateTimeAdded);
        fire.firestore().collection("Robot").doc(this.props.valueFromParent).collection("Task").add({
            EndPoint,
            datetimeadded: Date.now()
        })
       
        // console.log(fire.firestore().collection("Robot").doc(this.props.valueFromParent).get().then((data) => console.log(data.data().currentTask)))
        
        // fire.firestore().collection("Robot").doc(this.props.valueFromParent).get().then((data) => {
        //     if (data.data().currentTask == "") {
        //         fire.firestore().collection("Robot").doc(this.props.valueFromParent).update({
        //             currentTask : EndPoint
        //         })
        //     }
        // })

        // IF "Current Task" (field) of a specific robot (from "Robot" document, "Robots" Collection) 
        // is not equal to the first index of the list of Upcoming tasks (from "Task" collection of each robot from the "Robot" Document)
        // Make "Current Task" (from robot document) equal to "EndPoint" (from "Task" collection of "Robot" Document)
        // fire.firestore().collection("Robot").doc(this.props.valueFromParent).get().then((data) => {
        //     if (data.data().currentTask != this.state.firstlist){
        //         fire.firestore().collection("Robot").doc(this.props.valueFromParent).update({
        //             currentTask : this.state.firstlist
        //         })
        //     }
        // })
            console.log(fire.firestore().collection("Robot").doc(this.props.valueFromParent).collection("Task").orderBy("datetimeadded", "asc").limit(1).get().then(querySnapshot => {console.log(querySnapshot.docs[0].data().EndPoint)}))
            // if (typeof String(this.state.firstlist) === 'string') {
            //     console.log("Variable is a string" + String(this.state.firstlist))
            // }
            // else{
            //     console.log ("not a string")
            // }
    }

    render() {
        return(
            <div>
                <Card>
                    <Card.Header as="h5" style={{color:"white", backgroundColor:"#3f506d"}}>Select next task</Card.Header>
                        {this.state.endpoints.map(endpoint =>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Button variant="primary" className="buttonSize" onClick={this.add.bind(this, endpoint.location)}><FontAwesomeIcon icon={faPlus} size="sm" className="iconSize"/></Button>{endpoint.location}</ListGroup.Item>
                        </ListGroup>
                            )}
                </Card>
            </div>
)
    }
}

export default ShowEndpoints;
