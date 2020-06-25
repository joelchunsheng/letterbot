import React from 'react'
import { Table } from 'react-bootstrap';
import fire from '../../../config/Fire';
import {Link} from 'react-router-dom'


class ShowRobots extends React.Component {
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
            const {name, id, status} = doc.data()
            robots.push({
               key: doc.id,
               doc,
               name,
               id,
               status 
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
                        <th>Robot ID</th>
                        <th>Status</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.robots.map(robot =>

                        <tr>
                            <td>{robot.name}</td>
                            <td>{robot.key}</td>
                            <td>{robot.status}</td>
                            <td>
                                <Link to={`/task/${robot.key}`}>Assign task</Link>
                                <Link to={`/manualcontrol/${robot.key}`}>Manual control</Link>
                            </td>

                        </tr>
                        )}

                    </tbody>
                    </Table>
            </div>
)
    }
}

export default ShowRobots;