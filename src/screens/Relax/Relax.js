import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Post from '../../components/Post/Post'
import SocialIcon from '../../components/SocialIcon/SocialIcon'
import ImageSection from '../../components/imageSection/ImageSection'
import Footer from '../../components/footer/Footer'
import "./Relax.css"
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
                                <h1>Relax</h1>
                            </div>
                            <div className="col-12">
                                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Post />
                <SocialIcon />
                <ImageSection />
                <Footer />
            </div>
        </>
    )
}

export default Travel
