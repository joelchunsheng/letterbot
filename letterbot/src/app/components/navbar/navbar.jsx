import React from 'react'
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './navbar.css'
import fire from '../../../config/Fire';
import { faHome, faTasks, faLocationArrow, faUser, faFlag, faCog, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Side = props => {


    return (
            <Nav className="col-md-12 d-none d-md-block bg-nav sidebar px-0 py-0" style={{position: "sticky"}} activeKey="/dashboard">
                <div className="sidebar-sticky"></div>
                <h2 className="pt-5 py-3 text-white text-center">Letterbot</h2>
               
                <Nav.Item className="hover">
                    <Nav.Link className="text-white" href="/dashboard"><FontAwesomeIcon icon={faHome} size="md" className="text-white mr-3"/>Dashboard</Nav.Link>
                </Nav.Item>

                <Nav.Item className="hover">
                    <Nav.Link className="text-white" href="/task"><FontAwesomeIcon icon={faTasks} size="md" className="text-white mr-3"/>Task</Nav.Link>
                </Nav.Item>

                <Nav.Item className="hover">
                    <Nav.Link className="text-white" href="/manualcontrol"><FontAwesomeIcon icon={faLocationArrow} size="md" className="text-white mr-3"/>Manual Control</Nav.Link>
                </Nav.Item>

                <Nav.Item className="hover">
                    <Nav.Link className="text-white" href="/users"><FontAwesomeIcon icon={faUser} size="md" className="text-white mr-3"/>Users</Nav.Link>
                </Nav.Item>

                <Nav.Item className="hover">
                    <Nav.Link className="text-white" href="/endpoints"><FontAwesomeIcon icon={faFlag} size="md" className="text-white mr-3"/>End Points</Nav.Link>
                </Nav.Item>
               
                {/* <Nav.Item className="hover">
                    <Nav.Link className="text-white"href="/settings"><FontAwesomeIcon icon={faCog} size="md" className="text-white mr-3"/>Settings</Nav.Link>
                </Nav.Item> */}
                
                <Nav.Item className="hover bottom mb-3">
                    <Nav.Link className="text-white text-center" onClick={() => fire.auth().signOut()}><FontAwesomeIcon icon={faSignOutAlt} size="md" className="text-white mr-3"/>Sign Out</Nav.Link>
                </Nav.Item>
            </Nav>
        );
  };
  const navbar = withRouter(Side);
  export default navbar