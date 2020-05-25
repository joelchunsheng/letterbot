import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import LandingPage from './app/pages/LandingPage'
import Dashboard from './app/pages/Dashboard'
import EndPoints from './app/pages/EndPoints'
import ManualControl from './app/pages/ManualControl'
import Settings from './app/pages/Settings'
import Task from './app/pages/Task'
import Users from './app/pages/Users'

import Navbar from './app/components/navbar/navbar'

const AppLayout = () => {
    return(
        <HashRouter>

            <Route exact path="/">
                <LandingPage />
            </Route>

            <Route path="/dashboard">
                {/* <Navbar /> */}
                <Dashboard />
            </Route>

            <Route path="/endpoints">
                {/* <Navbar /> */}
                <EndPoints />
            </Route>

            <Route path="/manualcontrol">
                {/* <Navbar /> */}
                <ManualControl />
            </Route>

            <Route path="/settings">
                {/* <Navbar /> */}
                <Settings />
            </Route>

            <Route path="/task">
                {/* <Navbar /> */}
                <Task />
            </Route>

            <Route path="/users">
                {/* <Navbar /> */}
                <Users />
            </Route>

        </HashRouter>
    )
}

export default AppLayout;