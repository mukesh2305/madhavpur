import React from 'react'
import girl from "../../public/image/girl.webp";
import "./Footer.css"
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from 'react-router-dom';
const footer = () => {
    return (
        <div className="container-fluid color-container">

            <div className="container size">
                <div className="jumbotron">
                    <div className="row bottom">
                        <div className="col-2">
                            <img src={girl} alt="" />
                        </div>
                        <div className="col-4 size-left">
                            <h4>About Me</h4>
                            <p>
                                I'm a paragraph. Click here to add your own text and edit me.
                                It’s easy.Just click “Edit Text” or double click me to
                                add your own content and make changes to the font.
                            </p>
                            <Link excat to="/about">Read me</Link>
                        </div>
                        <div className="col-4 leftSection">
                            <h4>Join My Mailing List</h4>
                            <p>Email*</p>
                            <input type="text" placeholder="Enter your email here" className="p-0" />
                            <button>Subscribe Now</button>
                        </div>
                    </div>

                    <div className="row adjustSocial">
                        <div className="col-6 footer-color">
                            © 2023 by Going Places. Proudly created with Wix.com
                        </div>
                        <div className="col-1"></div>
                        <div className="col-4">
                            <ul className="row flex-nowrap">
                                <li className="col-3 list-unstyled">
                                    <a
                                        className="text-decoration-none"
                                        href="https://www.facebook.com"
                                    >
                                        <GrFacebookOption />
                                    </a>
                                </li>
                                <li className="col-3 list-unstyled">
                                    <a
                                        className="text-decoration-none"
                                        href="https://www.instagram.com/"
                                    >
                                        <AiOutlineInstagram />
                                    </a>
                                </li>
                                <li className="col-3 list-unstyled">
                                    <a
                                        className="text-decoration-none"
                                        href="https://www.pinterest.com/"
                                    >
                                        <FaPinterestP />
                                    </a>
                                </li>
                                <li className="col-3 list-unstyled">
                                    <a
                                        className="text-decoration-none"
                                        href="https://www.twitter.com"
                                    >
                                        <IoLogoTwitter />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
