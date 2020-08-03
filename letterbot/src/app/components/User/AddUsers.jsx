import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import fire from '../../../config/Fire';

// need find out how to close popup and run handlesignup at the same time

function MyVerticallyCenteredModal(props) {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSignUp = async event => {
        event.preventDefault();
        try {
          const user = await fire
            .auth()
            .createUserWithEmailAndPassword(email, password).then(data => {
                fire.firestore().collection("User").doc(data.user.uid).set({
                    name,
                    email
                });
            })
        } catch (error) {
          alert(error);
        }
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create User Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="formBasicname">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Enter name" onChange={e => setName(e.target.value)} value={name}/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}/>
                <Form.Text className="text-muted">
                    Password need to be 6+ characters.
                </Form.Text>
            </Form.Group>

        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
        <Button variant="primary" type="submit" onClick={handleSignUp}>Create User</Button>
        </Modal.Footer>
      </Modal>
    );
}


function AddUsers() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add User
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }


export default AddUsers;
