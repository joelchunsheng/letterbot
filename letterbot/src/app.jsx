import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LandingPage from './app/pages/LandingPage'
import Dashboard from './app/pages/Dashboard'
import EndPoints from './app/pages/EndPoints'
import ManualControl from './app/pages/ManualControl'
import Settings from './app/pages/Settings'
import Task from './app/pages/Task'
import Users from './app/pages/Users'
import fire from "./config/Fire"

import { Spinner } from 'react-bootstrap';
import PrivateRoute from './PrivateRoute'

import 'bootstrap/dist/css/bootstrap.min.css';


class app extends Component{
    state = { loading: true, authenticated: false, user: null };

    componentWillMount() {
        fire.auth().onAuthStateChanged(user => {
          if (user) {
            this.setState({
              authenticated: true,
              currentUser: user,
              loading: false
            });
          } else {
            this.setState({
              authenticated: false,
              currentUser: null,
              loading: false
            });
          }
        });
      }

    render(){
        const { authenticated, loading } = this.state;

        if (loading) {
            return <Spinner style={{position: 'absolute', left: '50%', top: '45%'}} animation="grow" />;
        }

        return(
            <Router>
                <div>
                    <Route exact path="/" component={LandingPage} />

                    <PrivateRoute path="/dashboard" component={Dashboard} authenticated={authenticated} />

                    <PrivateRoute path="/endpoints" component={EndPoints} authenticated={authenticated} />

                    <PrivateRoute path="/manualcontrol" component={ManualControl} authenticated={authenticated} />

                    <PrivateRoute path="/settings" component={Settings} authenticated={authenticated} />

                    <PrivateRoute path="/task" component={Task} authenticated={authenticated} />

                    <PrivateRoute path="/users" component={Users} authenticated={authenticated} />
                    
                </div>

        </Router> 
        )
    }
} 

// const AppLayout = () => {

//     return(

//         <AuthProvider>

//         <Router>
//             <div>
//                 <PrivateRoute exact path="/" authenticated={authenticated}>
//                     <LandingPage />
//                 </PrivateRoute>

//                 <Route path="/dashboard">
//                     {/* <Navbar /> */}
//                     <Dashboard />
//                 </Route>

//                 <Route path="/endpoints">
//                     {/* <Navbar /> */}
//                     <EndPoints />
//                 </Route>

//                 <Route path="/manualcontrol">
//                     {/* <Navbar /> */}
//                     <ManualControl />
//                 </Route>

//                 <Route path="/settings">
//                     {/* <Navbar /> */}
//                     <Settings />
//                 </Route>

//                 <Route path="/task">
//                     {/* <Navbar /> */}
//                     <Task />
//                 </Route>

//                 <Route path="/users">
//                     {/* <Navbar /> */}
//                     <Users />
//                 </Route>
//             </div>


//         </Router>
//         </AuthProvider>
//     )
// }

export default app;