import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { ImAirplane } from 'react-icons/im'
import { AiFillCloud } from 'react-icons/ai'
import beach1 from '../../public/image/beach1.webp';
import beach2 from '../../public/image/beach2.webp';
import beach3 from '../../public/image/beach3.webp';
// import { IoEyeOutline } from 'react-icons/io';
import { AiOutlineEye } from 'react-icons/ai'
import { VscComment } from 'react-icons/vsc';
// import Avatar from 'react-avatar';
import { GoPerson } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { GiBalaclava } from 'react-icons/gi'
import "./Home.css"
import SocialIcon from '../../components/SocialIcon/SocialIcon'
import ImageSection from '../../components/imageSection/ImageSection'
import Footer from '../../components/footer/Footer'
import Post from '../../components/Post/Post'
const Home = () => {
    // // const width = 
    // document.documentElement.scrollTop = document.body.scrollTop = "118px";
    // if (document.documentElement.scrollTop === "118px") {
    //     add.classList.add('position-adujust')
    // }
    // className = "position-adujust"

    return (
        <>
            <div className="position-adujust">
                <Navbar />
            </div>
            <div className="container-fulid">
                <div style={{ padding: "59px" }}></div>
                <div className="homeImg">
                    <div className=" text">
                        <p>Travel Blog</p>
                        <h1>Going Places</h1>
                        <p>I haven’t been everywhere, but it’s on my list </p>
                    </div>
                </div>

                <div className="py-4 container-md middleSection">
                    <div className="row">
                        <div className="text-center">
                            <p style={{ color: "#B5B5B5" }} className="fs-6">
                                I'm a paragraph. Click here to add your own text and edit me. It’s easy. <br />
                                Just click “Edit Text” or double click me to add your own content and make changes to the font.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container-md ">
                    <div className="row travel-img">
                        <div className="ml-5 col-4 image1">
                            <a href="/travel">Travel</a>
                        </div>
                        <div className="col-4 image2">
                            <a href="/travel">Eat</a>
                        </div>
                        <div className="col-4 image3" >
                            <a href="/travel">Relax</a>
                        </div>
                    </div>
                </div>


                {/* color */}
                <div className="container-fluid color">
                    <div class="jumbotron">
                        <div className="container text-center">
                            <div className="text-center row">
                                <div className="col-md-2">
                                    <h5>As featured in</h5>
                                </div>
                                <div className="col-md-2 ">
                                    <div className="vr"></div>
                                </div>
                                <div className="col-md-2">
                                    {/* <h3>travel </h3> */}
                                    <span className="fw-bolder"> travel </span><br />
                                    blog
                                </div>
                                <div className="col-md-2">
                                    <ImAirplane /><br />
                                    PLANE<span className="fw-bolder">TOUR</span>
                                </div>
                                <div className="col-md-2">
                                    {/* <h3>Hello</h3> */}
                                    WORLD   <br />
                                    TRAVEL
                                </div>
                                <div className="col-md-2">
                                    <AiFillCloud /> <br />
                                    Skycloud
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of color */}

                {/* img and post section */}
                <Post />
                {/* end of img and post section */}

                {/* socialIcon section */}
                <div>
                    <SocialIcon />
                    <ImageSection />
                    <Footer />
                </div>
                {/* end ofsocialIcon section */}



            </div>
        </>

    )
}

export default Home
