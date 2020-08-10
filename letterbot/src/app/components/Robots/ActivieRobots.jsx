import React from 'react'
import { Table } from 'react-bootstrap';
import fire from '../../../config/Fire';


class ActiveRobots extends React.Component {
    constructor(props) {
        super(props)
        this.ref = fire.firestore().collection("Robot").where("status", "==", "Running")
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
            const {name, currentTask} = doc.data()
            robots.push({
               key: doc.id,
               doc,
               name,
               currentTask 
            })
        })
        this.setState({
            robots
        })
    }

    render() {
        return(
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        {/* <th>#</th> */}
                        <th>Name</th>
                        <th>Current Task</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.robots.map(robot =>

                        <tr>
                            <td>{robot.name}</td>
                            <td>{robot.currentTask}</td>
                        </tr>
                        )}

                    </tbody>
                    </Table>
            </div>
)
    }
}

export default ActiveRobots;
