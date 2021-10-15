import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
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

// import "./Home.css"
import SocialIcon from '../../components/SocialIcon/SocialIcon'
import ImageSection from '../../components/imageSection/ImageSection'
import Footer from '../../components/footer/Footer'
import "./Post.css"

const Post = () => {
    return (
        <>

            {/* img and post section */}
            <div className="text-center container-md manageImg">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-12">
                            <img src={beach1} alt="" />
                        </div>
                        {/* <div className="col-12 "> */}
                        {/* </div> */}
                    </div>
                    <div class="container-admin">
                        <div class="admin-header">
                            <div class="admin-icon">
                                {/* icon */}
                                {/* <GiBalaclava /> */}
                                {/* <div className="font"> */}
                                <GoPerson className="personColor" />
                                {/* </div> */}
                            </div>
                            <div class="admin-name">
                                <span>Admin</span>
                                <i>Aug. 9 .1min  </i>
                            </div>
                        </div>
                        <div class="admin-title">
                            <h3>The Girl from Ipanema</h3>
                            <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                            <hr style={{ marginBottom: "4.2px" }} />
                        </div>
                        <div class="admin-footer">
                            <div className="row gx-0">
                                <div className="col-3">
                                    {/* <IoEyeOutline /> */}
                                    <AiOutlineEye />
                                    <span>0</span>
                                </div>
                                <div className="col-3 ">
                                    <VscComment />
                                    <span>0</span>
                                </div>
                            </div>
                            <div className="changePosition">
                                <span>7</span>
                                < AiOutlineHeart className="love-color" />
                            </div>

                        </div>

                    </div>


                    <div className="row">
                        <div className="col-12">
                            <img src={beach2} alt="" />
                        </div>
                    </div>
                    {/* post section */}
                    <div class="container-admin">
                        <div class="admin-header">
                            <div class="admin-icon">
                                {/* icon */}
                                {/* <GiBalaclava /> */}
                                {/* <BsPersonCircle /> */}
                                <GoPerson className="personColor" />
                            </div>
                            <div class="admin-name">
                                <span>Admin</span>
                                <i>Aug. 9 .1min  </i>
                            </div>
                        </div>
                        <div class="admin-title">
                            <h3>The Girl from Ipanema</h3>
                            <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                            <hr style={{ marginBottom: "4.2px" }} />
                        </div>
                        <div class="admin-footer">
                            <div className="row gx-0">
                                <div className="col-3">
                                    {/* <IoEyeOutline /> */}
                                    <AiOutlineEye />
                                    <span>0</span>
                                </div>
                                <div className="col-3 ">
                                    <VscComment />
                                    <span>0</span>
                                </div>
                                {/* <div className="col-2"></div> */}
                            </div>
                            <div className="changePosition">
                                <span>7</span>
                                < AiOutlineHeart className="love-color" />
                            </div>
                        </div>

                    </div>
                    {/* end of post section */}
                    <div className="row">
                        <div className="col-12">
                            <img src={beach3} alt="" />
                        </div>
                    </div>
                    {/* post section */}
                    <div class="container-admin">
                        <div class="admin-header">
                            <div class="admin-icon">
                                {/* icon */}
                                {/* <GiBalaclava /> */}
                                <GoPerson className="personColor" />
                            </div>
                            <div class="admin-name">
                                <span>Admin</span>
                                <i>Aug. 9 .1min  </i>
                            </div>
                        </div>
                        <div class="admin-title">
                            <h3>The Girl from Ipanema</h3>
                            <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                            <hr style={{ marginBottom: "4.2px" }} />
                        </div>
                        <div class="admin-footer">
                            <div className="row gx-0">
                                <div className="col-3">
                                    {/* <IoEyeOutline /> */}
                                    <AiOutlineEye />
                                    <span>0</span>
                                </div>
                                <div className="col-3 ">
                                    <VscComment />
                                    <span>0</span>
                                </div>
                                {/* <div className="col-2"></div> */}
                            </div>
                            <div className="changePosition">
                                <span>7</span>
                                < AiOutlineHeart className="love-color" />
                            </div>
                        </div>

                    </div>
                    {/* end of post section */}
                </div>
            </div>
            {/* end of img and post section */}

        </>
    )
}

export default Post
