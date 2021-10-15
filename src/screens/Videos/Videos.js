import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Post from '../../components/Post/Post'
import SocialIcon from '../../components/SocialIcon/SocialIcon'
import ImageSection from '../../components/imageSection/ImageSection'
import Footer from '../../components/footer/Footer'
import "./Videos.css"
const Travel = () => {
    return (
        <>
            <div className="position-adjust">
                <Navbar />
            </div>
            <div className="container-fluid ">
                <div style={{ padding: "59px" }}></div>
                <div className='container adjustSizing'>
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-12">
                                <h1>Videos</h1>
                            </div>
                            <div className="col-12">
                                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <video src="https://www.pexels.com/video/aerial-view-of-beautiful-resort-2169880/" width="940" height="528.75" controls ></video>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 d-flex justify-content-between sizing">
                                <input type="text" placeholder="Seach Vidoes..." />

                                <select id="cars">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <video src="https://www.pexels.com/video/aerial-view-of-beautiful-resort-2169880/" width="306" height="172" controls ></video>
                            </div>
                            <div className="col-4">
                                <video src="https://www.pexels.com/video/aerial-view-of-beautiful-resort-2169880/" width="306" height="172" controls ></video>
                            </div>
                            <div className="col-4">
                                <video src="https://www.pexels.com/video/aerial-view-of-beautiful-resort-2169880/" width="306" height="172" controls ></video>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                {/* <Post /> */}

                <SocialIcon />
                <ImageSection />
                <Footer />
            </div>
        </>
    )
}

export default Travel
