import React from 'react'
import fire from '../../../config/Fire';


class AddEndpoint extends React.Component {
    constructor(props) {
        super(props)
        this.ref = fire.firestore().collection("Endpoints")
        this.state ={
            location : ''
        }
    }

    onChange = (e) =>{
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const {location} = this.state;
        this.ref.add({
            location,
            // datetimeadded: Date.now()
        }).then((docRef)=>{
            this.setState({
                location : ''
            })
        })
        .catch((error)=>{
            console.error("Error adding document")
        })
    }

    render() {
        const { location } = this.state;

        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={location} name="location" onChange={this.onChange}/>
                    <button class="btn btn-success" type="submit">Submit</button>
                </form>
            </div>
            
            )}
}

export default AddEndpoint;
