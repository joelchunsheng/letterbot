import React from 'react'
import { Table } from 'react-bootstrap';
import fire from '../../../config/Fire';


class ShowUsers extends React.Component {
    constructor(props) {
        super(props)
        this.ref = fire.firestore().collection("User").orderBy("name", "asc")
        this.unsubscribe = null
        this.state ={
            users : []
        }
    }

    componentDidMount(){
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
    }

    onCollectionUpdate = (querySnapshot) => {
        const users = []
        querySnapshot.forEach((doc) => {
            const {name, email} = doc.data()
            users.push({
               key: doc.id,
               doc,
               name,
               email 
            })
        })
        this.setState({
            users
        })
    }

    render() {
        return(
            <div>
                <Table responsive className="table-striped">
                    <thead className="thead-dark">
                        <tr>
                        {/* <th>#</th> */}
                        <th>Name</th>
                        <th>User ID</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user =>

                        <tr>
                            <td>{user.name}</td>
                            <td>{user.key}</td>
                            <td>{user.email}</td>
                        </tr>
                        )}

                    </tbody>
                    </Table>
            </div>
)
    }
}

export default ShowUsers;
