import React from 'react'
import { Table } from 'react-bootstrap';
import fire from '../../../config/Fire';
import {Link} from 'react-router-dom'


class ShowCurrentTask extends React.Component {
    constructor(props) {
        super(props)
        this.ref = fire.firestore().collection("Robot").doc(this.props.valueFromParent).collection("Task").orderBy("datetimeadded", "asc").limit(1)
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
            const {EndPoint} = doc.data()
            robots.push({
               key: doc.id,
               doc,
               EndPoint
            })
        })
        this.setState({
            robots
        })
    }

    render() {
        return(
            <div>
                {this.state.robots.map(robot =>
                        <div>{robot.EndPoint}</div>
                )}
            </div>
)
    }
}

export default ShowCurrentTask;
