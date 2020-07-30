import React from 'react'
import { Table } from 'react-bootstrap';
import fire from '../../../config/Fire';
import {Link} from 'react-router-dom'


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

    delete(id){
        fire.firestore().collection('Endpoints').doc(id).delete().then(() => {
          console.log("Document successfully deleted!");
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }

    render() {
        return(
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Robot ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.endpoints.map(endpoint =>

                        <tr>
                            <td>{endpoint.location}</td>
                            <td>{endpoint.key}</td>
                            <td>
                                <button class="btn btn-danger" onClick={this.delete.bind(this, endpoint.key)}>Delete</button>
                            </td>
                        </tr>
                        )}

                    </tbody>
                    </Table>
            </div>
)
    }
}

export default ShowEndpoints;
