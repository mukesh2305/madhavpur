import React from 'react'
import "./Navbar.css"
import { AiOutlineSearch } from 'react-icons/ai'
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaPinterestP } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="nav">
            {/* nav class */}
            <div className="container-md p-4" >
                <div className="row" id="row" >

                    <div className="col-md-12 col-lg-3  leftPart">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" className="search" placeholder="Search.." />
                            </div>
                            <div className="col-6">
                                <AiOutlineSearch />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-lg-6  middlePart">
                        {/* <div className="nav__middlepart-linksdiv"> */}
                        <ul className="row middlePart__row">
                            <li className="col-2 list-unstyled"><Link className="text-decoration-none link" to="/home" exact>Home</Link></li>
                            <li className="col-2 list-unstyled"><Link className="text-decoration-none link" to="/about" exact>About</Link></li>
                            <li className="col-2 list-unstyled"><Link className="text-decoration-none link" to="/travel" exact>Travel</Link></li>
                            <li className="col-2 list-unstyled"><Link className="text-decoration-none link" to="/eat" exact>Eat</Link></li>
                            <li className="col-2 list-unstyled"><Link className="text-decoration-none link" to="/relax" exact>Relax</Link></li>
                            <li className="col-2 list-unstyled"><Link className="text-decoration-none link" to="/videos" exact>Videos</Link></li>
                        </ul>
                        {/* </div> */}
                    </div>

                    <div className="col-md-12 col-lg-3  d-flex justify-content-end rightPart">
                        <ul className="row">
                            <li className="col-3 list-unstyled"><a className="text-decoration-none" href="https://www.facebook.com" ><GrFacebookOption /></a></li>
                            <li className="col-3 list-unstyled"><a className="text-decoration-none" href="https://www.instagram.com/" ><AiOutlineInstagram /></a></li>
                            <li className="col-3 list-unstyled"><a className="text-decoration-none" href="https://www.pinterest.com/" ><FaPinterestP /></a></li>
                            <li className="col-3 list-unstyled"><a className="text-decoration-none" href="https://www.twitter.com" ><IoLogoTwitter /></a></li>
                        </ul>
                    </div>

                </div>
            </div >
            {/* end of nav class */}
        </div>
    )
}

export default Navbar
