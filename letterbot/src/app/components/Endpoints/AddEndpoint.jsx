import React from 'react'
import fire from '../../../config/Fire';
import './endpoint.css'


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
            <div class="py-5" >
                <div class="container">
                <div class="row">
                    <div class="ml-auto col-lg-7 text-center text-lg-left">
                    <h1>Add an endpoint</h1>
                    <p class="mb-0">Let your robots reach more places by assigning more locations</p>
                    </div>
                    <div class="col-lg-4 d-flex justify-content-center align-items-center p-3">
                    <form class="form-inline mb-0" onSubmit={this.onSubmit}>
                        <div class="input-group"> 
                            <input type="text" value={location} name="location" onChange={this.onChange} placeholder="New endpoint"/>
                        <div class="input-group-append"> 
                        <button class="btn btn-primary" type="submit">Assign</button> 
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            )}
}

export default AddEndpoint;
