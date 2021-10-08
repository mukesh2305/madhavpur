import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../Home/Home';

const Routeing = () => {
    return (
        <div>
            <Router>
                <Route path="/home">
                    <Home/>
                </Route>
            </Router>
        </div>
    )
}

export default Routeing
