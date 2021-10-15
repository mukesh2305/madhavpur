import React from 'react'
import "./SocialIcon.css"

import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
const SocialIcon = () => {
    return (
        <div className=" text-center socialIcon-color">
            <div className="jumbotron">

                <div className="container text-center socialIcon-height">
                    <ul className="row flex-nowrap">
                        <li className="col-1 list-unstyled SocialIcon">
                            <a
                                className="text-decoration-none"
                                href="https://www.facebook.com"
                            >
                                <GrFacebookOption className="white" />
                            </a>
                        </li>
                        <div className="col-2 social white ">
                            Facebook
                        </div>

                        <li className="col-1 list-unstyled  SocialIcon">
                            <a
                                className="text-decoration-none"
                                href="https://www.instagram.com/"
                            >
                                <AiOutlineInstagram className="white" />
                            </a>
                        </li>
                        <div className="col-2 social white">
                            Instagram
                        </div>
                        <li className="col-1 list-unstyled  SocialIcon">
                            <a
                                className="text-decoration-none"
                                href="https://www.pinterest.com/"
                            >
                                <FaPinterestP className="white" />
                            </a>
                        </li>
                        <div className="col-2 social white">
                            Pinteres
                        </div>
                        <li className="col-1 list-unstyled  SocialIcon">
                            <a
                                className="text-decoration-none"
                                href="https://www.twitter.com"
                            >
                                <RiTwitterLine className="white" />
                            </a>
                        </li>
                        <div className="col-2 social white">
                            Twitter
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SocialIcon
