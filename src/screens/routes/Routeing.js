import React from 'react';

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
import About from "../About/About";
import Travel from "../Travel/Travel";
import Post from '../../components/Post/Post';
import Eat from '../Eat/Eat';
import Relax from '../Relax/Relax';
import Videos from '../Videos/Videos';
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
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/travel">
                    <Travel />
                </Route>
                <Route exact path="/post">
                    <Post />
                </Route>
                <Route exact path="/eat">
                    <Eat />
                </Route>
                <Route exact path="/relax">
                    <Relax />
                </Route>
                <Route exact path="/videos">
                    <Videos />
                </Route>
            </Router>
        </div>
    )
}

export default Routeing
