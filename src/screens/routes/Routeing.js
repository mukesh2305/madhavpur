import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../Home/Home';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import ImageSection from '../../components/imageSection/ImageSection';
import Footer from '../../components/footer/Footer';
const Routeing = () => {
    return (
        <div>
            <Router>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/socialicon">
                    <SocialIcon />
                </Route>
                <Route exact path="/imagesection">
                    <ImageSection />
                </Route>
                <Route exact path="/footer">
                    <Footer />
                </Route>
            </Router>
        </div>
    )
}

export default Routeing
